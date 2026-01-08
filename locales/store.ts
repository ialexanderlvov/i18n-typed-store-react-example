/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTranslationStore } from 'i18n-typed-store';
import { LOCALES, TRANSLATIONS } from './constants';

import type MainTranslationsEn from './translations/main/en';
import type NewsTranslationsEn from './translations/news/en';
import type SettingsTranslationsEn from './translations/settings/en';
import type CommonTranslationsEn from './translations/common/en';

export interface ITranslationStoreTypes extends Record<keyof typeof TRANSLATIONS, any> {
	common: CommonTranslationsEn;
	main: MainTranslationsEn;
	news: NewsTranslationsEn;
	settings: SettingsTranslationsEn;
}

export const store = createTranslationStore({
	translations: TRANSLATIONS,
	locales: LOCALES,
	loadModule: (locale, namespace) => {
		if (namespace === 'lang') {
			return import(`./translations/${namespace}/index.tsx`);
		}
		return import(`./translations/${namespace}/${locale}.tsx`);
	},
	extractTranslation: (module) => new module.default(),
	defaultLocale: localStorage.getItem('i18n-locale') ? (JSON.parse(localStorage.getItem('i18n-locale')!) as keyof typeof LOCALES) : 'en',
	deleteOtherLocalesAfterLoad: false,
	loadFromCache: false,
	// fallbackLocale: 'en',
	// useFallback: true,
}).type<ITranslationStoreTypes>();
