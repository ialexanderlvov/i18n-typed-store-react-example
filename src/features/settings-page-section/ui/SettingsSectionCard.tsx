import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/shadcn/ui/card';
import { SettingItem } from '@/entities/setting-item';
import { cn } from '@/shared/lib/cn';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

type SectionColor = 'blue' | 'purple' | 'green' | 'yellow';

interface Setting {
	label: string;
	description: ReactNode;
	color: 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'yellow' | 'pink';
	icon: LucideIcon;
	children?: ReactNode;
}

interface SettingsSectionCardProps {
	title: string;
	icon: LucideIcon;
	sectionColor: SectionColor;
	settings: Setting[];
}

const sectionColors: Record<SectionColor, { border: string; bg: string; iconBg: string; icon: string }> = {
	blue: {
		border: 'border-blue-500/20',
		bg: 'from-blue-500/10',
		iconBg: 'bg-blue-500/20',
		icon: 'text-blue-400',
	},
	purple: {
		border: 'border-purple-500/20',
		bg: 'from-purple-500/10',
		iconBg: 'bg-purple-500/20',
		icon: 'text-purple-400',
	},
	green: {
		border: 'border-green-500/20',
		bg: 'from-green-500/10',
		iconBg: 'bg-green-500/20',
		icon: 'text-green-400',
	},
	yellow: {
		border: 'border-yellow-500/20',
		bg: 'from-yellow-500/10',
		iconBg: 'bg-yellow-500/20',
		icon: 'text-yellow-400',
	},
};

export function SettingsSectionCard({ title, icon: Icon, sectionColor, settings }: SettingsSectionCardProps) {
	const colors = sectionColors[sectionColor];
	return (
		<Card className={cn('border-2 bg-linear-to-br to-transparent shadow-lg', colors.border, colors.bg)}>
			<CardHeader>
				<CardTitle className='text-xl font-bold flex items-center gap-2'>
					<div className={cn('p-2 rounded-lg', colors.iconBg)}>
						<Icon className={cn('h-5 w-5', colors.icon)} />
					</div>
					{title}
				</CardTitle>
			</CardHeader>
			<CardContent className='space-y-4'>
				{settings.map((setting, index) => (
					<SettingItem
						key={index}
						icon={setting.icon}
						label={setting.label}
						description={setting.description}
						color={setting.color}
					>
						{setting.children}
					</SettingItem>
				))}
			</CardContent>
		</Card>
	);
}
