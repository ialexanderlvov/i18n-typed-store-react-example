import { SettingsSectionCard } from '@/features/settings-page-section';
import { Code, FlaskConical, RotateCcw } from 'lucide-react';
import { useTranslationLazy } from '@locales/useTranslation';

export function AdvancedSectionCard() {
	const settings = useTranslationLazy('settings');
	return (
		<SettingsSectionCard
			title={settings.sections.advanced.title}
			icon={Code}
			sectionColor='yellow'
			settings={[
				{
					icon: Code,
					label: settings.sections.advanced.developer.label,
					description: settings.sections.advanced.developer.description,
					color: 'yellow',
				},
				{
					icon: FlaskConical,
					label: settings.sections.advanced.experimental.label,
					description: settings.sections.advanced.experimental.description,
					color: 'pink',
				},
				{
					icon: RotateCcw,
					label: settings.sections.advanced.reset.label,
					description: settings.sections.advanced.reset.description,
					color: 'red',
				},
			]}
		/>
	);
}

