import type { TranslationStore } from '../types/translation-store';
import type { CreateTranslationStoreOptions } from '../types/create-translation-store';
import type { TranslationModuleMap } from '../types/create-translation-module-map';
import { createTranslationModuleMap } from './create-translation-module-map';

import { EventEmitter } from './event-emitter';
import { smartDeepMerge } from './smart-merge';

/**
 * Creates a translation store factory with typed translations for different locales.
 * The store supports lazy loading, caching, error handling, and fallback locale merging.
 *
 * @template T - Type of translations object (e.g., { common: 'common', errors: 'errors' })
 * @template L - Type of locales object (e.g., { en: 'en', ru: 'ru' })
 * @template Module - Type of the raw module loaded from the module loader
 *
 * @param options - Configuration options for the translation store
 * @returns Object with a `type()` method for creating a typed translation store
 * @throws {TypeError} If required options are invalid
 *
 * @example
 * ```ts
 * const translations = { common: 'common', errors: 'errors' } as const;
 * const locales = { en: 'en', ru: 'ru' } as const;
 *
 * const storeFactory = createTranslationStore({
 *   translations,
 *   locales,
 *   loadModule: async (locale, namespace) => import(`./${namespace}/${locale}.json`),
 *   extractTranslation: (module) => module.default || module,
 *   defaultLocale: 'en',
 *   useFallback: true,
 *   fallbackLocale: 'en',
 * });
 *
 * const store = storeFactory.type<{
 *   common: { greeting: string };
 *   errors: { notFound: string };
 * }>();
 * ```
 */
export const createTranslationStore = <T extends Record<string, string>, L extends Record<string, string>, Module = unknown>({
	translations,
	locales,
	loadModule,
	extractTranslation,
	deleteOtherLocalesAfterLoad = false,
	loadFromCache = true,
	defaultLocale,
	useFallback = false,
	fallbackLocale = defaultLocale,
	changeLocaleEventName = 'change-locale',
}: CreateTranslationStoreOptions<T, L, Module>) => {
	// Validate inputs
	if (!translations || Object.keys(translations).length === 0) {
		throw new TypeError('translations must be a non-empty object');
	}

	if (!locales || Object.keys(locales).length === 0) {
		throw new TypeError('locales must be a non-empty object');
	}

	if (typeof loadModule !== 'function') {
		throw new TypeError('loadModule must be a function');
	}

	if (typeof extractTranslation !== 'function') {
		throw new TypeError('extractTranslation must be a function');
	}

	if (!(defaultLocale in locales)) {
		throw new TypeError(`defaultLocale '${String(defaultLocale)}' must be a key in locales`);
	}

	if (useFallback && !(fallbackLocale in locales)) {
		throw new TypeError(`fallbackLocale '${String(fallbackLocale)}' must be a key in locales`);
	}

	return {
		/**
		 * Creates a typed translation store.
		 * The store provides methods to load and access translations for each locale.
		 * When useFallback is enabled, translations are automatically merged with fallback locale.
		 *
		 * @template M - Type of translation modules mapping where each key corresponds to a key from translations
		 * @returns Store with methods to load translations for each locale
		 *
		 * @example
		 * ```ts
		 * const store = storeFactory.type<{
		 *   common: { greeting: string; goodbye: string };
		 *   errors: { notFound: string; unauthorized: string };
		 * }>();
		 *
		 * await store.common.load('ru');
		 * // If useFallback is true and 'ru' translation is missing some keys,
		 * // they will be filled from fallback locale (e.g., 'en')
		 * const greeting = store.common.translations.ru.namespace?.greeting;
		 * ```
		 */
		type: <M extends { [K in keyof T]: any }>(): TranslationStore<T, L, M> => {
			const namespaceModuleMap: TranslationModuleMap<T, L, Module> = createTranslationModuleMap(translations, locales, loadModule);
			const emitter = new EventEmitter();

			const store = {
				currentLocale: defaultLocale,
				locales,
				translationsMap: translations,
				translations: {},
				addChangeLocaleListener: (listener) => {
					emitter.on(changeLocaleEventName, listener);
				},
				removeChangeLocaleListener: (listener) => {
					emitter.off(changeLocaleEventName, listener);
				},
				changeLocale: (locale) => {
					store.currentLocale = locale;
					emitter.emit(changeLocaleEventName, locale);
				},
			} as TranslationStore<T, L, M>;

			// Initialize store structure for each translation key
			for (const namespaceKey of Object.keys(translations) as (keyof T)[]) {
				// Create initial state for all locales

				store.translations[namespaceKey] = {
					currentTranslation: undefined,
					currentLocale: undefined,
					translations: Object.fromEntries(
						Object.keys(locales).map((localeKey) => [
							localeKey,
							{
								namespace: undefined,
								isLoading: false,
								isError: false,
								loadingPromise: undefined,
							},
						]),
					) as TranslationStore<T, L, M>['translations'][keyof T]['translations'],
					load: async (
						locale: keyof L = store.currentLocale || defaultLocale,
						fromCache: boolean = loadFromCache,
					): Promise<void> => {
						// Validate locale
						if (!(locale in locales)) {
							throw new TypeError(`Invalid locale: '${String(locale)}' is not a valid locale key`);
						}

						const namespaceState = store.translations[namespaceKey].translations[locale];

						if (namespaceState.loadingPromise) {
							return namespaceState.loadingPromise;
						}

						// Check if already loading to prevent duplicate requests
						if (namespaceState.isLoading) {
							return;
						}

						// Check cache if enabled
						const shouldUseCache = namespaceState.namespace && fromCache !== false;
						if (shouldUseCache) {
							store.translations[namespaceKey].currentTranslation = namespaceState.namespace;
							store.translations[namespaceKey].currentLocale = locale;
							return;
						}

						// Reset error state and set loading state
						namespaceState.isError = false;
						namespaceState.isLoading = true;

						namespaceState.loadingPromise = (async () => {
							try {
								const namespaceState = store.translations[namespaceKey].translations[locale];

								// Load current locale translation
								const loadedModule = await namespaceModuleMap[namespaceKey][locale]();
								let currentTranslation = (await extractTranslation(
									loadedModule,
									locale,
									namespaceKey,
								)) as M[typeof namespaceKey];

								// Load fallback if enabled and different from current locale
								if (useFallback && locale !== fallbackLocale) {
									const fallbackState = store.translations[namespaceKey].translations[fallbackLocale];

									// Check if fallback is already loaded
									let fallbackTranslation: M[typeof namespaceKey] | undefined = fallbackState.namespace;

									// If fallback is not loaded, load it
									if (!fallbackTranslation) {
										// Check if fallback is already loading
										if (fallbackState.loadingPromise) {
											await fallbackState.loadingPromise;
											fallbackTranslation = fallbackState.namespace;
										} else if (!fallbackState.isLoading) {
											// Load fallback with proper promise handling
											fallbackState.isError = false;
											fallbackState.isLoading = true;

											fallbackState.loadingPromise = (async () => {
												try {
													const fallbackModule = await namespaceModuleMap[namespaceKey][fallbackLocale]();
													fallbackTranslation = (await extractTranslation(
														fallbackModule,
														fallbackLocale,
														namespaceKey,
													)) as M[typeof namespaceKey];
													fallbackState.namespace = fallbackTranslation;
												} catch (error) {
													fallbackState.isError = true;
													// If fallback fails, continue with current translation
												} finally {
													fallbackState.isLoading = false;
													fallbackState.loadingPromise = undefined;
												}
											})();

											await fallbackState.loadingPromise;
											fallbackTranslation = fallbackState.namespace;
										} else {
											// Fallback is loading but no promise - this is a race condition edge case
											// Skip fallback merge and use current translation only to avoid infinite waiting
											// This shouldn't happen in normal flow, but we handle it gracefully
											fallbackTranslation = undefined;
										}
									}

									// Merge current with fallback using smart merge
									if (fallbackTranslation) {
										currentTranslation = smartDeepMerge(
											currentTranslation,
											fallbackTranslation,
										) as M[typeof namespaceKey];
									}
								}

								namespaceState.namespace = currentTranslation;

								if (deleteOtherLocalesAfterLoad) {
									for (const otherLocaleKey of Object.keys(
										store.translations[namespaceKey].translations,
									) as (keyof L)[]) {
										if (otherLocaleKey !== locale && otherLocaleKey !== store.currentLocale) {
											store.translations[namespaceKey].translations[otherLocaleKey].namespace = undefined;
										}
									}
								}
								store.translations[namespaceKey].currentTranslation = namespaceState.namespace;
								store.translations[namespaceKey].currentLocale = locale;
							} catch (error) {
								namespaceState.isError = true;
								throw error;
							} finally {
								namespaceState.isLoading = false;
								namespaceState.loadingPromise = undefined; //
							}
						})();

						return namespaceState.loadingPromise;
					},
				};
			}

			return store;
		},
	};
};
