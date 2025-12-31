import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/shadcn/ui/card';
import { useTranslationLazy } from '@locales/useTranslation';

export function DemoComponentCard() {
	const main = useTranslationLazy('main');
	return (
		<Card className='border-2 border-lime-500/30 bg-linear-to-br from-lime-500/10 to-transparent shadow-xl'>
			<CardHeader>
				<CardTitle className='text-xl font-bold'>Demo Component</CardTitle>
			</CardHeader>
			<CardContent>{main.demoComponent}</CardContent>
		</Card>
	);
}
