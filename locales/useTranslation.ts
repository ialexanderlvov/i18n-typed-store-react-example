import { useI18nTranslationLazy } from 'i18n-typed-store/react';
import type { LOCALES, TRANSLATIONS } from './constants';
import type { ITranslationStoreTypes } from './store';

export const useTranslationLazy = <K extends keyof typeof TRANSLATIONS>(translation: K) => {
	return useI18nTranslationLazy<typeof TRANSLATIONS, typeof LOCALES, ITranslationStoreTypes, K>(translation);
};
