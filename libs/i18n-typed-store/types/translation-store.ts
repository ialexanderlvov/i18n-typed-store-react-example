/**
 * Translation store structure.
 * Manages translations for multiple namespace keys and locales.
 *
 * @template T - Type of translations object (e.g., { common: 'common', errors: 'errors' })
 * @template L - Type of locales object (e.g., { en: 'en', ru: 'ru' })
 * @template M - Type of translation modules mapping (e.g., { common: { greeting: string }, errors: { notFound: string } })
 */
export type TranslationStore<T extends Record<string, string>, L extends Record<string, string>, M extends { [K in keyof T]: any }> = {
	/** Currently active locale */
	currentLocale: keyof L;
	/** Available locales */
	locales: L;
	/** Translations map (namespace keys) */
	translationsMap: T;
	/**
	 * Adds a listener for locale change events.
	 *
	 * @param listener - Function to call when locale changes
	 */
	addChangeLocaleListener: (listener: (locale: keyof L) => void) => void;
	/**
	 * Removes a locale change listener.
	 *
	 * @param listener - Listener function to remove
	 */
	removeChangeLocaleListener: (listener: (locale: keyof L) => void) => void;
	/**
	 * Changes the current locale and notifies all listeners.
	 *
	 * @param locale - New locale key
	 */
	changeLocale: (locale: keyof L) => void;
	/** Translations organized by namespace key */
	translations: {
		[K in keyof T]: {
			/** Currently active translation for this namespace */
			currentTranslation?: M[K];
			/** Locale of the current translation */
			currentLocale?: keyof L;
			/** Translations for all locales for this namespace */
			translations: Record<
				keyof L,
				{
					/** Loaded translation data, undefined if not loaded yet */
					namespace: M[K] | undefined;
					/** Whether translation is currently being loaded */
					isLoading: boolean;
					/** Whether an error occurred during loading */
					isError: boolean;
					/** Promise for the ongoing loading operation */
					loadingPromise?: Promise<void>;
				}
			>;
			/**
			 * Loads translation for a specific locale.
			 *
			 * @param locale - Locale key to load translation for
			 * @param fromCache - Whether to use cached translation if available (default: true)
			 * @returns Promise that resolves when translation is loaded
			 * @throws Error if loading fails
			 */
			load: (locale: keyof L, fromCache?: boolean) => Promise<void>;
		};
	};
};
