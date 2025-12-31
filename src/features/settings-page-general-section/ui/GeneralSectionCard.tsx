import { SettingsSectionCard } from '@/features/settings-page-section';
import { Button } from '@/shared/ui/shadcn/ui/button';
import { Globe, Palette, Clock } from 'lucide-react';
import { useTranslationLazy } from '@locales/useTranslation';

export function GeneralSectionCard() {
	const settings = useTranslationLazy('settings');
	return (
		<SettingsSectionCard
			title={settings.sections.general.title}
			icon={Palette}
			sectionColor='blue'
			settings={[
				{
					icon: Globe,
					label: settings.sections.general.language.label,
					description: settings.sections.general.language.description,
					color: 'blue',
				},
				{
					icon: Palette,
					label: settings.sections.general.theme.label,
					description: settings.sections.general.theme.description,
					color: 'purple',
					children: (
						<div className='flex gap-2 mt-3'>
							<Button
								variant='outline'
								size='sm'
								className='border-2 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all'
							>
								{settings.sections.general.theme.options.light}
							</Button>
							<Button
								variant='outline'
								size='sm'
								className='border-2 hover:border-gray-500/50 hover:bg-gray-500/10 transition-all'
							>
								{settings.sections.general.theme.options.dark}
							</Button>
							<Button
								variant='outline'
								size='sm'
								className='border-2 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all'
							>
								{settings.sections.general.theme.options.system}
							</Button>
						</div>
					),
				},
				{
					icon: Clock,
					label: settings.sections.general.timezone.label,
					description: settings.sections.general.timezone.description,
					color: 'green',
				},
			]}
		/>
	);
}

