/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSyncExternalStore } from 'react';
import { useI18nTypedStoreContext } from './useI18nTypedStoreContext';

/**
 * Hook for accessing and managing the current locale.
 * Returns the current locale and a function to change it.
 * Supports SSR/SSG by using useSyncExternalStore for proper hydration.
 *
 * @template T - Type of translations object
 * @template L - Type of locales object
 * @template M - Type of translation modules mapping
 *
 * @returns Object with current locale and setLocale function
 *
 * @example
 * ```tsx
 * function LocaleSwitcher() {
 *   const { locale, setLocale } = useI18nLocale();
 *   return (
 *     <select value={locale} onChange={(e) => setLocale(e.target.value as keyof Locales)}>
 *       <option value="en">English</option>
 *       <option value="ru">Русский</option>
 *     </select>
 *   );
 * }
 * ```
 */
export const useI18nLocale = <T extends Record<string, string>, L extends Record<string, string>, M extends { [K in keyof T]: any }>() => {
	const { store } = useI18nTypedStoreContext<T, L, M>();

	// Use useSyncExternalStore for proper SSR/SSG hydration
	const locale = useSyncExternalStore(
		(notify) => {
			const listener = () => {
				notify();
			};
			store.addChangeLocaleListener(listener);
			return () => {
				store.removeChangeLocaleListener(listener);
			};
		},
		() => store.currentLocale,
		() => store.currentLocale // Server snapshot (same as client for initial render)
	);

	const updateLocale = (locale: keyof L) => {
		store.changeLocale(locale);
	};

	return { locale, setLocale: updateLocale };
};
