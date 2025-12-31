import { Button } from '@/shared/ui/shadcn/ui/button';
import { Save, RotateCcw, X, CheckCircle2 } from 'lucide-react';
import { useTranslationLazy } from '@locales/useTranslation';

export function ActionsButtons() {
	const settings = useTranslationLazy('settings');
	return (
		<div className='flex flex-wrap gap-3'>
			<Button className='bg-linear-to-r from-primary to-primary/80 shadow-lg hover:shadow-xl transition-all hover:scale-105'>
				<Save className='h-4 w-4 mr-2' />
				{settings.actions.save}
			</Button>
			<Button variant='secondary' className='shadow-lg hover:shadow-xl transition-all hover:scale-105'>
				<RotateCcw className='h-4 w-4 mr-2' />
				{settings.actions.reset}
			</Button>
			<Button variant='outline' className='border-2 shadow-md hover:shadow-lg transition-all hover:scale-105'>
				<X className='h-4 w-4 mr-2' />
				{settings.actions.cancel}
			</Button>
			<Button variant='outline' className='border-2 shadow-md hover:shadow-lg transition-all hover:scale-105'>
				<CheckCircle2 className='h-4 w-4 mr-2' />
				{settings.actions.apply}
			</Button>
		</div>
	);
}
