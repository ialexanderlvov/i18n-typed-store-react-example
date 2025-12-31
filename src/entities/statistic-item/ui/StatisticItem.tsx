import { Badge } from '@/shared/ui/shadcn/ui/badge';
import type { LucideIcon } from 'lucide-react';

type BadgeVariant = 'green' | 'blue' | 'purple' | 'red';

interface StatisticItemProps {
	icon: LucideIcon;
	label: string;
	badgeText: string;
	badgeVariant: BadgeVariant;
}

const badgeClasses: Record<BadgeVariant, string> = {
	green: 'bg-green-500/20 text-green-400 border-green-500/30',
	blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
	purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
	red: 'bg-red-500/20 text-red-400 border-red-500/30',
};

export function StatisticItem({ icon: Icon, label, badgeText, badgeVariant }: StatisticItemProps) {
	return (
		<div className='flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors'>
			<span className='font-medium flex items-center gap-2'>
				<Icon className='h-4 w-4 text-primary' />
				{label}
			</span>
			<Badge variant='default' className={badgeClasses[badgeVariant]}>
				{badgeText}
			</Badge>
		</div>
	);
}
