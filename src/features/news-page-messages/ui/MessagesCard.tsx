import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/shadcn/ui/card';
import { Loader2, AlertCircle } from 'lucide-react';
import { useTranslationLazy } from '@locales/useTranslation';

export function MessagesCard() {
	const news = useTranslationLazy('news');
	return (
		<Card className='border-2 border-yellow-500/20 bg-linear-to-br from-yellow-500/10 to-transparent shadow-lg'>
			<CardHeader>
				<CardTitle className='text-xl font-bold'>Messages</CardTitle>
			</CardHeader>
			<CardContent className='space-y-3'>
				<div className='text-sm flex items-center gap-2 p-2 rounded-lg bg-blue-500/10 border border-blue-500/20'>
					<Loader2 className='h-4 w-4 animate-spin text-blue-400' />
					{news.messages.loading}
				</div>
				<div className='text-sm text-destructive flex items-center gap-2 p-2 rounded-lg bg-red-500/10 border border-red-500/20'>
					<AlertCircle className='h-4 w-4' />
					{news.messages.error}
				</div>
				<div className='text-sm text-muted-foreground p-2 rounded-lg bg-secondary/50'>{news.messages.noResults}</div>
			</CardContent>
		</Card>
	);
}
