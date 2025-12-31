import { Suspense } from 'react';
import { LoadingSpinner } from '@/shared/ui/Loader';
import { PageHeader } from '@/widgets/page-header';
import { EmptyStateCard } from '@/features/news-page-empty-state';
import { FiltersCard } from '@/features/news-page-filters';
import { CategoriesCard } from '@/features/news-page-categories';
import { ArticleExampleCard } from '@/features/news-page-article-example';
import { ActionsCard } from '@/features/news-page-actions';
import { MessagesCard } from '@/features/news-page-messages';

function NewsPageContent() {
	return (
		<div className='container mx-auto p-6 space-y-8'>
			<PageHeader translationKey='news' gradientFrom='from-blue-500/20' gradientTo='to-transparent' />

			<EmptyStateCard />

			<FiltersCard />

			<CategoriesCard />

			<ArticleExampleCard />

			<ActionsCard />

			<MessagesCard />
		</div>
	);
}

export function NewsPage() {
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
			<NewsPageContent />
		</Suspense>
	);
}
