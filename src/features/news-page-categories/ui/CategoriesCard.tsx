import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/shadcn/ui/card';
import { Button } from '@/shared/ui/shadcn/ui/button';
import { Tag } from 'lucide-react';
import { useTranslationLazy } from '@locales/useTranslation';

export function CategoriesCard() {
	const news = useTranslationLazy('news');
	return (
		<Card className='border-2 border-purple-500/20 bg-linear-to-br from-purple-500/10 to-transparent shadow-lg'>
			<CardHeader>
				<CardTitle className='text-xl font-bold flex items-center gap-2'>
					<Tag className='h-5 w-5 text-purple-400' />
					Categories
				</CardTitle>
			</CardHeader>
			<CardContent className='grid grid-cols-2 md:grid-cols-4 gap-3'>
				<Button variant='outline' size='sm' className='border-2 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all'>
					{news.categories.technology}
				</Button>
				<Button variant='outline' size='sm' className='border-2 hover:border-green-500/50 hover:bg-green-500/10 transition-all'>
					{news.categories.science}
				</Button>
				<Button variant='outline' size='sm' className='border-2 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all'>
					{news.categories.business}
				</Button>
				<Button variant='outline' size='sm' className='border-2 hover:border-red-500/50 hover:bg-red-500/10 transition-all'>
					{news.categories.sports}
				</Button>
				<Button variant='outline' size='sm' className='border-2 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all'>
					{news.categories.entertainment}
				</Button>
				<Button variant='outline' size='sm' className='border-2 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all'>
					{news.categories.health}
				</Button>
				<Button variant='outline' size='sm' className='border-2 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all'>
					{news.categories.politics}
				</Button>
				<Button variant='outline' size='sm' className='border-2 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all'>
					{news.categories.world}
				</Button>
			</CardContent>
		</Card>
	);
}
