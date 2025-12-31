import { Suspense } from 'react';
import { LoadingSpinner } from '@/shared/ui/Loader';
import { PageHeader } from '@/widgets/page-header';
import { DescriptionCard } from '@/features/main-page-description';
import { DemoComponentCard } from '@/features/main-page-demo';
import { QuickActionsCard } from '@/features/main-page-quick-actions';
import { FeaturesList } from '@/widgets/features-list';
import { StatisticsCard } from '@/widgets/statistics-card';
import { RecentActivityCard } from '@/widgets/recent-activity';

function MainPageContent() {
	return (
		<div className='container mx-auto px-6 py-8 space-y-8'>
			<PageHeader translationKey='main' />

			<DescriptionCard />

			<DemoComponentCard />

			<FeaturesList />

			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				<StatisticsCard />
				<RecentActivityCard />
			</div>

			<QuickActionsCard />
		</div>
	);
}

export function MainPage() {
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
			<MainPageContent />
		</Suspense>
	);
}
