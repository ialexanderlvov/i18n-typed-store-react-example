import { SettingsSectionCard } from '@/features/settings-page-section';
import { User, Shield, Bell } from 'lucide-react';
import { useTranslationLazy } from '@locales/useTranslation';

export function AccountSectionCard() {
	const settings = useTranslationLazy('settings');
	return (
		<SettingsSectionCard
			title={settings.sections.account.title}
			icon={User}
			sectionColor='purple'
			settings={[
				{
					icon: User,
					label: settings.sections.account.profile.label,
					description: settings.sections.account.profile.description,
					color: 'purple',
				},
				{
					icon: Shield,
					label: settings.sections.account.security.label,
					description: settings.sections.account.security.description,
					color: 'red',
				},
				{
					icon: Bell,
					label: settings.sections.account.notifications.label,
					description: settings.sections.account.notifications.description,
					color: 'yellow',
				},
			]}
		/>
	);
}

