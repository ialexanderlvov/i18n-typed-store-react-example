import type { TranslationStore } from './translation-store';

/**
 * Context value for I18n typed store.
 * Provides access to translation store, locale management, and loading state.
 *
 * @template T - Type of translations object (e.g., { common: 'common', errors: 'errors' })
 * @template L - Type of locales object (e.g., { en: 'en', ru: 'ru' })
 * @template M - Type of translation modules mapping (e.g., { common: { greeting: string }, errors: { notFound: string } })
 */
export interface II18nTypedStoreContext<
	T extends Record<string, string> = Record<string, string>,
	L extends Record<string, string> = Record<string, string>,
	M extends { [K in keyof T]: any } = { [K in keyof T]: any },
> {
	/** Translation store instance */
	store: TranslationStore<T, L, M>;
	/**
	 * Suspense mode for translation loading:
	 * - 'once' - suspend only on first load
	 * - 'first-load-locale' - suspend on first load for each locale
	 * - 'change-locale' - suspend on every locale change
	 */
	suspenseMode: 'once' | 'first-load-locale' | 'change-locale';
}
