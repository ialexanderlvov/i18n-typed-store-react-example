import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/shadcn/ui/card';
import { Button } from '@/shared/ui/shadcn/ui/button';
import { Plus, Newspaper, Settings } from 'lucide-react';
import { useTranslationLazy } from '@locales/useTranslation';
import { useNavigate } from 'react-router';

export function QuickActionsCard() {
	const main = useTranslationLazy('main');
	const navigate = useNavigate();

	return (
		<Card className='border-2 border-primary/30 bg-linear-to-br from-primary/10 via-primary/5 to-transparent shadow-xl'>
			<CardHeader>
				<CardTitle className='text-2xl font-bold'>{main.quickActions.title}</CardTitle>
			</CardHeader>
			<CardContent className='pt-6'>
				<div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-4'>
					<Button
						className='w-full sm:w-auto sm:min-w-[180px] justify-center transition-all hover:scale-[1.03] active:scale-[0.97] shadow-lg hover:shadow-xl bg-linear-to-r from-primary to-primary/80'
						size='lg'
					>
						<Plus className='h-4 w-4 mr-2' />
						{main.quickActions.createArticle}
					</Button>
					<Button
						onClick={() => navigate('/news')}
						variant='secondary'
						className='w-full sm:w-auto sm:min-w-[180px] justify-center transition-all hover:scale-[1.03] active:scale-[0.97] shadow-lg hover:shadow-xl'
						size='lg'
					>
						<Newspaper className='h-4 w-4 mr-2' />
						{main.quickActions.viewNews}
					</Button>
					<Button
						onClick={() => navigate('/settings')}
						variant='outline'
						className='w-full sm:w-auto sm:min-w-[180px] justify-center transition-all hover:scale-[1.03] active:scale-[0.97] border-2 hover:border-primary/50 shadow-md hover:shadow-lg'
						size='lg'
					>
						<Settings className='h-4 w-4 mr-2' />
						{main.quickActions.openSettings}
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
