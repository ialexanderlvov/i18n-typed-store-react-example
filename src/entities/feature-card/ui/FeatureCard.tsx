import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/shadcn/ui/card';
import { cn } from '@/shared/lib/cn';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

type ColorVariant = 'blue' | 'purple' | 'yellow' | 'green';

interface FeatureCardProps {
	icon: LucideIcon;
	title: string;
	description: ReactNode;
	color: ColorVariant;
}

const colorClasses: Record<ColorVariant, { border: string; bg: string; icon: string; hoverBorder: string }> = {
	blue: {
		border: 'border-blue-500/20',
		bg: 'from-blue-500/10',
		icon: 'text-blue-400',
		hoverBorder: 'hover:border-blue-500/40',
	},
	purple: {
		border: 'border-purple-500/20',
		bg: 'from-purple-500/10',
		icon: 'text-purple-400',
		hoverBorder: 'hover:border-purple-500/40',
	},
	yellow: {
		border: 'border-yellow-500/20',
		bg: 'from-yellow-500/10',
		icon: 'text-yellow-400',
		hoverBorder: 'hover:border-yellow-500/40',
	},
	green: {
		border: 'border-green-500/20',
		bg: 'from-green-500/10',
		icon: 'text-green-400',
		hoverBorder: 'hover:border-green-500/40',
	},
};

export function FeatureCard({ icon: Icon, title, description, color }: FeatureCardProps) {
	const colors = colorClasses[color];
	const iconBgClass =
		color === 'blue'
			? 'bg-blue-500/20'
			: color === 'purple'
			? 'bg-purple-500/20'
			: color === 'yellow'
			? 'bg-yellow-500/20'
			: 'bg-green-500/20';

	return (
		<Card
			className={cn(
				'border-2 bg-linear-to-br to-transparent transition-all hover:shadow-lg hover:scale-[1.02]',
				colors.border,
				colors.bg,
				colors.hoverBorder
			)}
		>
			<CardHeader>
				<div className='flex items-center gap-3 mb-2'>
					<div className={cn('p-2 rounded-lg', iconBgClass)}>
						<Icon className={cn('h-5 w-5', colors.icon)} />
					</div>
					<CardTitle className='text-lg'>{title}</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription className='text-base'>{description}</CardDescription>
			</CardContent>
		</Card>
	);
}
