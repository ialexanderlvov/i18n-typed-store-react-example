import { useI18nLocale } from 'i18n-typed-store/react';
import type { LOCALES, TRANSLATIONS } from './constants';
import type { ITranslationStoreTypes } from './store';

export const useLocale = () => {
	return useI18nLocale<typeof TRANSLATIONS, typeof LOCALES, ITranslationStoreTypes>();
};
