import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/shadcn/ui/card';
import { Button } from '@/shared/ui/shadcn/ui/button';
import { RefreshCw, Search } from 'lucide-react';
import { useTranslationLazy } from '@locales/useTranslation';

export function ActionsCard() {
	const news = useTranslationLazy('news');
	return (
		<Card className='border-2 border-green-500/20 bg-linear-to-br from-green-500/10 to-transparent shadow-lg'>
			<CardHeader>
				<CardTitle className='text-xl font-bold'>Actions</CardTitle>
			</CardHeader>
			<CardContent className='flex flex-wrap gap-3'>
				<Button className='bg-linear-to-r from-primary to-primary/80 shadow-lg hover:shadow-xl transition-all hover:scale-105'>
					{news.actions.loadMore}
				</Button>
				<Button variant='secondary' className='shadow-lg hover:shadow-xl transition-all hover:scale-105'>
					<RefreshCw className='h-4 w-4 mr-2' />
					{news.actions.refresh}
				</Button>
				<Button variant='outline' className='border-2 shadow-md hover:shadow-lg transition-all hover:scale-105'>
					<Search className='h-4 w-4 mr-2' />
					{news.actions.search}
				</Button>
			</CardContent>
		</Card>
	);
}
