import { useTranslationLazy } from '@locales/useTranslation';

interface PageHeaderProps {
	translationKey: 'main' | 'news' | 'settings';
	gradientFrom?: string;
	gradientTo?: string;
}

export function PageHeader({ translationKey, gradientFrom = 'from-primary/20', gradientTo = 'to-transparent' }: PageHeaderProps) {
	const translations = useTranslationLazy(translationKey);

	return (
		<div className='relative'>
			<div className={`absolute inset-0 bg-linear-to-r ${gradientFrom} via-primary/10 ${gradientTo} rounded-2xl blur-3xl -z-10`} />
			<div className='relative'>
				<h1 className='text-5xl font-bold mb-3 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent'>
					{translations.title}
				</h1>
				<div className='text-xl text-muted-foreground'>{translations.subtitle}</div>
			</div>
		</div>
	);
}
