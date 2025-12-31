import { useI18nLocale } from '@libs/i18n-typed-store/react/useLocale';
import type { LOCALES, TRANSLATIONS } from './constants';
import type { ITranslationStoreTypes } from './store';

export const useLocale = () => {
	return useI18nLocale<typeof TRANSLATIONS, typeof LOCALES, ITranslationStoreTypes>();
};
