import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/shadcn/ui/card';
import { useTranslationLazy } from '@locales/useTranslation';

export function RecentActivityCard() {
	const main = useTranslationLazy('main');
	return (
		<Card className='border-2 border-secondary/50 bg-linear-to-br from-secondary/10 to-transparent shadow-lg'>
			<CardHeader>
				<CardTitle className='text-xl font-bold'>{main.recentActivity.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='text-muted-foreground text-center py-8'>{main.recentActivity.noActivity}</div>
			</CardContent>
		</Card>
	);
}
