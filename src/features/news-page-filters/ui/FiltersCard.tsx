import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/shadcn/ui/card';
import { Badge } from '@/shared/ui/shadcn/ui/badge';
import { Filter } from 'lucide-react';
import { useTranslationLazy } from '@locales/useTranslation';

export function FiltersCard() {
	const news = useTranslationLazy('news');
	return (
		<Card className='border-2 border-blue-500/20 bg-linear-to-br from-blue-500/10 to-transparent shadow-lg'>
			<CardHeader>
				<CardTitle className='text-xl font-bold flex items-center gap-2'>
					<Filter className='h-5 w-5 text-blue-400' />
					Filters
				</CardTitle>
			</CardHeader>
			<CardContent className='flex flex-wrap gap-3'>
				<Badge variant='default' className='bg-blue-500/20 text-blue-300 border-blue-500/30 px-3 py-1 text-sm font-medium'>
					{news.filters.all}
				</Badge>
				<Badge variant='secondary' className='bg-purple-500/20 text-purple-300 border-purple-500/30 px-3 py-1 text-sm font-medium'>
					{news.filters.latest}
				</Badge>
				<Badge variant='secondary' className='bg-green-500/20 text-green-300 border-green-500/30 px-3 py-1 text-sm font-medium'>
					{news.filters.popular}
				</Badge>
				<Badge variant='secondary' className='bg-orange-500/20 text-orange-300 border-orange-500/30 px-3 py-1 text-sm font-medium'>
					{news.filters.trending}
				</Badge>
			</CardContent>
		</Card>
	);
}
