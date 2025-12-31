import { Suspense } from 'react';
import { LoadingSpinner } from '@/shared/ui/Loader';
import { PageHeader } from '@/widgets/page-header';
import { GeneralSectionCard } from '@/features/settings-page-general-section';
import { AccountSectionCard } from '@/features/settings-page-account-section';
import { PrivacySectionCard } from '@/features/settings-page-privacy-section';
import { AdvancedSectionCard } from '@/features/settings-page-advanced-section';
import { ActionsButtons } from '@/features/settings-page-actions';
import { MessagesCard } from '@/features/settings-page-messages';

function SettingsPageContent() {
	return (
		<div className='container mx-auto p-6 space-y-8'>
			<PageHeader translationKey='settings' gradientFrom='from-purple-500/20' gradientTo='to-transparent' />

			<GeneralSectionCard />

			<AccountSectionCard />

			<PrivacySectionCard />

			<AdvancedSectionCard />

			<ActionsButtons />

			<MessagesCard />
		</div>
	);
}

export function SettingsPage() {
	return (
		<Suspense
			fallback={
				<div className='container mx-auto p-6'>
					<div className='flex items-center justify-center min-h-[400px]'>
						<LoadingSpinner />
					</div>
				</div>
			}
		>
			<SettingsPageContent />
		</Suspense>
	);
}
