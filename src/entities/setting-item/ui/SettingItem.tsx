import { CardDescription } from '@/shared/ui/shadcn/ui/card';
import { cn } from '@/shared/lib/cn';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

type ColorVariant = 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'yellow' | 'pink';

interface SettingItemProps {
	icon: LucideIcon;
	label: string;
	description: ReactNode;
	color: ColorVariant;
	children?: ReactNode;
}

const colorClasses: Record<ColorVariant, { border: string; icon: string }> = {
	blue: { border: 'border-blue-500/20', icon: 'text-blue-400' },
	purple: { border: 'border-purple-500/20', icon: 'text-purple-400' },
	green: { border: 'border-green-500/20', icon: 'text-green-400' },
	orange: { border: 'border-orange-500/20', icon: 'text-orange-400' },
	red: { border: 'border-red-500/20', icon: 'text-red-400' },
	yellow: { border: 'border-yellow-500/20', icon: 'text-yellow-400' },
	pink: { border: 'border-pink-500/20', icon: 'text-pink-400' },
};

export function SettingItem({ icon: Icon, label, description, color, children }: SettingItemProps) {
	const colors = colorClasses[color];
	return (
		<div className={cn('p-4 rounded-lg bg-secondary/30 border', colors.border)}>
			<label className='text-sm font-semibold flex items-center gap-2 mb-2'>
				<Icon className={cn('h-4 w-4', colors.icon)} />
				{label}
			</label>
			<CardDescription className='mt-1'>{description}</CardDescription>
			{children}
		</div>
	);
}
