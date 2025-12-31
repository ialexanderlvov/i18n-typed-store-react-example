import { Button } from '@/shared/ui/shadcn/ui/button';
import { Suspense } from 'react';
import { Link, useLocation } from 'react-router';
import { LocaleSwitcher } from '@/features/locale-switcher';
import { SuspenseModeSwitcher, type SuspenseMode } from '@/features/suspense-mode-switcher';
import { Home, Newspaper, Settings as SettingsIcon } from 'lucide-react';
import { LoadingSpinner } from '@/shared/ui/Loader';
import { useTranslationLazy } from '@locales/useTranslation';

interface NavigationProps {
	onSuspenseModeChange?: (mode: SuspenseMode) => void;
}

function NavigationContent({ onSuspenseModeChange }: NavigationProps) {
	const common = useTranslationLazy('common');
	const location = useLocation();

	const isActive = (path: string) => {
		if (path === '/') {
			return location.pathname === '/' || location.pathname === '/main';
		}
		return location.pathname === path;
	};

	return (
		<nav className='sticky top-0 z-50 border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm'>
			<div className='container mx-auto flex h-16 items-center justify-between px-4'>
				<div className='flex items-center gap-6'>
					<Link
						to='/'
						className='font-bold text-xl bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent hover:opacity-80 transition-opacity'
					>
						i18n-typed-store
					</Link>
					<div className='flex gap-2'>
						<Link to='/'>
							<Button variant={isActive('/') ? 'secondary' : 'ghost'} size='sm' className='transition-all hover:scale-105'>
								<Home className='h-4 w-4 mr-2' />
								{common.pages.main}
							</Button>
						</Link>
						<Link to='/news'>
							<Button
								variant={isActive('/news') ? 'secondary' : 'ghost'}
								size='sm'
								className='transition-all hover:scale-105'
							>
								<Newspaper className='h-4 w-4 mr-2' />
								{common.pages.news}
							</Button>
						</Link>
						<Link to='/settings'>
							<Button
								variant={isActive('/settings') ? 'secondary' : 'ghost'}
								size='sm'
								className='transition-all hover:scale-105'
							>
								<SettingsIcon className='h-4 w-4 mr-2' />
								{common.pages.settings}
							</Button>
						</Link>
					</div>
				</div>
				<div className='flex items-center gap-3'>
					<SuspenseModeSwitcher onChange={onSuspenseModeChange} />
					<LocaleSwitcher />
				</div>
			</div>
		</nav>
	);
}

export function Navigation({ onSuspenseModeChange }: NavigationProps) {
	return (
		<Suspense
			fallback={
				<nav className='sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
					<div className='container mx-auto flex h-16 items-center justify-between px-4'>
						<div className='flex items-center gap-6'>
							<LoadingSpinner className='h-5 w-5' />
						</div>
					</div>
				</nav>
			}
		>
			<NavigationContent onSuspenseModeChange={onSuspenseModeChange} />
		</Suspense>
	);
}
