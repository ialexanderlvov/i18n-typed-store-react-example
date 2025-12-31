import type { TranslationModuleMap } from '../types/create-translation-module-map';

/**
 * Creates a map of translation module loaders for all combinations of translations and locales.
 * This map is used internally by the translation store to lazy-load translation modules.
 *
 * @template T - Type of translations object (e.g., { common: 'common', errors: 'errors' })
 * @template L - Type of locales object (e.g., { en: 'en', ru: 'ru' })
 * @template Module - Type of the raw module loaded from the module loader
 *
 * @param translations - Object with translation keys
 * @param locales - Object with locale keys
 * @param loadModule - Function to load a translation module for a specific locale and namespace
 * @returns Immutable map where each namespace key contains an object with loader functions for each locale
 * @throws {TypeError} If translations or locales are empty objects
 *
 * @example
 * ```ts
 * const translations = { common: 'common', errors: 'errors' } as const;
 * const locales = { en: 'en', ru: 'ru' } as const;
 * const loadModule = async (locale, namespace) => import(`./${namespace}/${locale}.json`);
 *
 * const moduleMap = createTranslationModuleMap(translations, locales, loadModule);
 * moduleMap.common.en() will load './common/en.json'
 * moduleMap.errors.ru() will load './errors/ru.json'
 * ```
 */
export const createTranslationModuleMap = <T extends Record<string, string>, L extends Record<string, string>, Module = unknown>(
	translations: T,
	locales: L,
	loadModule: (locale: keyof L, namespace: keyof T) => Promise<Module>,
): TranslationModuleMap<T, L, Module> => {
	if (!translations || Object.keys(translations).length === 0) {
		throw new TypeError('translations must be a non-empty object');
	}

	if (!locales || Object.keys(locales).length === 0) {
		throw new TypeError('locales must be a non-empty object');
	}

	if (typeof loadModule !== 'function') {
		throw new TypeError('loadModule must be a function');
	}

	const namespaceModules = {} as Record<keyof T, Record<keyof L, () => Promise<Module>>>;

	for (const namespaceKey of Object.keys(translations) as (keyof T)[]) {
		namespaceModules[namespaceKey] = {} as Record<keyof L, () => Promise<Module>>;

		for (const localeKey of Object.keys(locales) as (keyof L)[]) {
			namespaceModules[namespaceKey][localeKey] = () => loadModule(localeKey, namespaceKey);
		}
	}

	return namespaceModules as TranslationModuleMap<T, L, Module>;
};
