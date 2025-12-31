import { useState } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/shared/ui/shadcn/ui/dropdown-menu';
import { ChevronDown, Loader2 } from 'lucide-react';
import { useLocalStorage } from '@/shared/hooks/useLocalStorage';

export type SuspenseMode = 'once' | 'first-load-locale' | 'change-locale';

const SUSPENSE_MODE_STORAGE_KEY = 'i18n-suspense-mode';

const suspenseModeLabels: Record<SuspenseMode, string> = {
	once: 'Once',
	'first-load-locale': 'First Load Locale',
	'change-locale': 'Change Locale',
};

interface SuspenseModeSwitcherProps {
	onChange?: (mode: SuspenseMode) => void;
}

export function SuspenseModeSwitcher({ onChange }: SuspenseModeSwitcherProps) {
	const [suspenseMode, setSuspenseMode] = useLocalStorage<SuspenseMode>(SUSPENSE_MODE_STORAGE_KEY, 'first-load-locale');
	const [open, setOpen] = useState(false);

	const handleSelect = (mode: SuspenseMode) => {
		setSuspenseMode(mode);
		onChange?.(mode);
		setOpen(false);
	};

	return (
		<DropdownMenu open={open} onOpenChange={setOpen}>
			<DropdownMenuTrigger isOpen={open} onOpenChange={setOpen} className='gap-2 min-w-[140px]'>
				<Loader2 className='h-4 w-4 text-primary' />
				<span className='font-medium text-xs sm:text-sm'>{suspenseModeLabels[suspenseMode]}</span>
				<ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
			</DropdownMenuTrigger>
			<DropdownMenuContent isOpen={open} className='w-56'>
				<DropdownMenuItem
					onClick={() => handleSelect('once')}
					className={suspenseMode === 'once' ? 'bg-primary/10 text-primary font-medium' : ''}
				>
					{suspenseModeLabels.once}
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => handleSelect('first-load-locale')}
					className={suspenseMode === 'first-load-locale' ? 'bg-primary/10 text-primary font-medium' : ''}
				>
					{suspenseModeLabels['first-load-locale']}
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => handleSelect('change-locale')}
					className={suspenseMode === 'change-locale' ? 'bg-primary/10 text-primary font-medium' : ''}
				>
					{suspenseModeLabels['change-locale']}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
