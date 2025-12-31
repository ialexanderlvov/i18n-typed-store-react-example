import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/shadcn/ui/card';
import { Button } from '@/shared/ui/shadcn/ui/button';
import { Badge } from '@/shared/ui/shadcn/ui/badge';
import { User, Calendar, Tag, Eye, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { useTranslationLazy } from '@locales/useTranslation';

export function ArticleExampleCard() {
	const news = useTranslationLazy('news');
	return (
		<Card className='border-2 border-primary/20 bg-linear-to-br from-primary/5 to-transparent shadow-xl'>
			<CardHeader>
				<CardTitle className='text-xl font-bold'>Article Example</CardTitle>
			</CardHeader>
			<CardContent className='space-y-4'>
				<div className='flex items-center gap-4 text-sm'>
					<div className='flex items-center gap-2 text-muted-foreground'>
						<User className='h-4 w-4' />
						<span>
							{news.article.author}: <span className='text-foreground font-medium'>John Doe</span>
						</span>
					</div>
					<div className='flex items-center gap-2 text-muted-foreground'>
						<Calendar className='h-4 w-4' />
						<span>
							{news.article.publishedAt}: <span className='text-foreground font-medium'>2024-01-15</span>
						</span>
					</div>
				</div>
				<div className='flex items-center gap-3 flex-wrap'>
					<Badge variant='outline' className='border-primary/30 bg-primary/10'>
						<Tag className='h-3 w-3 mr-1' />
						{news.article.tags}
					</Badge>
					<div className='flex items-center gap-1 text-sm text-muted-foreground'>
						<Eye className='h-4 w-4' />
						{news.views(1234)}
					</div>
					<div className='flex items-center gap-1 text-sm text-muted-foreground'>
						<MessageCircle className='h-4 w-4' />
						{news.comments(56)}
					</div>
				</div>
				<div className='flex gap-2 pt-2'>
					<Button variant='outline' size='sm' className='border-2 hover:border-primary/50 hover:bg-primary/10 transition-all'>
						{news.article.readMore}
					</Button>
					<Button variant='outline' size='sm' className='border-2 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all'>
						<Share2 className='h-4 w-4 mr-1' />
						{news.article.share}
					</Button>
					<Button
						variant='outline'
						size='sm'
						className='border-2 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all'
					>
						<Bookmark className='h-4 w-4 mr-1' />
						{news.article.bookmark}
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
