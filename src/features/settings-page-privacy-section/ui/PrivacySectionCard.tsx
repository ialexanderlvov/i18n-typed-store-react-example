import { SettingsSectionCard } from '@/features/settings-page-section';
import { Shield, Database, Cookie, Share2 } from 'lucide-react';
import { useTranslationLazy } from '@locales/useTranslation';

export function PrivacySectionCard() {
	const settings = useTranslationLazy('settings');
	return (
		<SettingsSectionCard
			title={settings.sections.privacy.title}
			icon={Shield}
			sectionColor='green'
			settings={[
				{
					icon: Database,
					label: settings.sections.privacy.dataCollection.label,
					description: settings.sections.privacy.dataCollection.description,
					color: 'green',
				},
				{
					icon: Cookie,
					label: settings.sections.privacy.cookies.label,
					description: settings.sections.privacy.cookies.description,
					color: 'orange',
				},
				{
					icon: Share2,
					label: settings.sections.privacy.sharing.label,
					description: settings.sections.privacy.sharing.description,
					color: 'blue',
				},
			]}
		/>
	);
}

