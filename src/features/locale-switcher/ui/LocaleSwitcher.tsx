import { useState } from 'react';
import { useI18nLocale } from '@libs/i18n-typed-store/react';
import { LOCALES, TRANSLATIONS } from '../../../../locales/constants';
import type { ITranslationStoreTypes } from '../../../../locales/store';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/shared/ui/shadcn/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { useLocalStorage } from '@/shared/hooks/useLocalStorage';

const localeLabels: Record<keyof typeof LOCALES, string> = {
	en: 'English',
	ru: 'Русский',
	de: 'Deutsch',
	fr: 'Français',
};

const LOCALE_STORAGE_KEY = 'i18n-locale';

export function LocaleSwitcher() {
	const { locale, setLocale } = useI18nLocale<typeof TRANSLATIONS, typeof LOCALES, ITranslationStoreTypes>();
	const [, setStoredLocale] = useLocalStorage<keyof typeof LOCALES>(LOCALE_STORAGE_KEY, 'en');
	const [open, setOpen] = useState(false);

	const handleSelect = (newLocale: keyof typeof LOCALES) => {
		setLocale(newLocale);
		setStoredLocale(newLocale);
		setOpen(false);
	};

	return (
		<DropdownMenu open={open} onOpenChange={setOpen}>
			<DropdownMenuTrigger isOpen={open} onOpenChange={setOpen} className='gap-2 min-w-[100px]'>
				<span className='font-medium'>{localeLabels[locale]}</span>
				<ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
			</DropdownMenuTrigger>
			<DropdownMenuContent isOpen={open}>
				<DropdownMenuItem
					onClick={() => handleSelect('en')}
					className={locale === 'en' ? 'bg-primary/10 text-primary font-medium' : ''}
				>
					English
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => handleSelect('ru')}
					className={locale === 'ru' ? 'bg-primary/10 text-primary font-medium' : ''}
				>
					Русский
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => handleSelect('de')}
					className={locale === 'de' ? 'bg-primary/10 text-primary font-medium' : ''}
				>
					Deutsch
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => handleSelect('fr')}
					className={locale === 'fr' ? 'bg-primary/10 text-primary font-medium' : ''}
				>
					Français
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
