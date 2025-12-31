import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/shadcn/ui/card';
import { useTranslationLazy } from '@locales/useTranslation';

export function EmptyStateCard() {
	const news = useTranslationLazy('news');
	return (
		<Card className='border-2 border-muted/50 bg-linear-to-br from-muted/20 to-transparent shadow-lg'>
			<CardHeader>
				<CardTitle className='text-xl font-bold'>{news.empty.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<CardDescription className='text-base'>{news.empty.description}</CardDescription>
			</CardContent>
		</Card>
	);
}
