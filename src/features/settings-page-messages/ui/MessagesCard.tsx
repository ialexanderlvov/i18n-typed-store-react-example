import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/shadcn/ui/card';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { useTranslationLazy } from '@locales/useTranslation';

export function MessagesCard() {
	const settings = useTranslationLazy('settings');
	return (
		<Card className='border-2 border-primary/20 bg-linear-to-br from-primary/10 to-transparent shadow-lg'>
			<CardHeader>
				<CardTitle className='text-xl font-bold'>Messages</CardTitle>
			</CardHeader>
			<CardContent className='space-y-3'>
				<div className='text-sm flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20'>
					<CheckCircle2 className='h-4 w-4 text-green-400' />
					<span className='text-green-400'>{settings.messages.saveSuccess}</span>
				</div>
				<div className='text-sm flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20'>
					<AlertCircle className='h-4 w-4 text-red-400' />
					<span className='text-red-400'>{settings.messages.saveError}</span>
				</div>
				<div className='text-sm text-muted-foreground p-3 rounded-lg bg-secondary/50'>{settings.messages.resetConfirm}</div>
				<div className='text-sm flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20'>
					<CheckCircle2 className='h-4 w-4 text-green-400' />
					<span className='text-green-400'>{settings.messages.resetSuccess}</span>
				</div>
			</CardContent>
		</Card>
	);
}
