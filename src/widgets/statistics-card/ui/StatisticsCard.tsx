import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/shadcn/ui/card';
import { StatisticItem } from '@/entities/statistic-item';
import { Users, FileText, Eye, Heart } from 'lucide-react';
import { useTranslationLazy } from '@locales/useTranslation';

export function StatisticsCard() {
	const main = useTranslationLazy('main');
	const common = useTranslationLazy('common');
	return (
		<Card className='border-2 border-primary/20 bg-linear-to-br from-primary/5 to-transparent shadow-lg'>
			<CardHeader>
				<CardTitle className='text-xl font-bold flex items-center gap-2'>
					<div className='p-2 rounded-lg bg-primary/20'>
						<Users className='h-5 w-5 text-primary' />
					</div>
					{main.statistics.title}
				</CardTitle>
			</CardHeader>
			<CardContent className='space-y-4'>
				<StatisticItem icon={Users} label={common.users(42)} badgeText='Active' badgeVariant='green' />
				<StatisticItem icon={FileText} label={main.articles(15)} badgeText='Published' badgeVariant='blue' />
				<StatisticItem icon={Eye} label={main.views(1234)} badgeText='Total' badgeVariant='purple' />
				<StatisticItem icon={Heart} label={main.likes(89)} badgeText='Liked' badgeVariant='red' />
			</CardContent>
		</Card>
	);
}
