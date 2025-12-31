import { Card, CardHeader, CardTitle } from '@/shared/ui/shadcn/ui/card';
import { useTranslationLazy } from '@locales/useTranslation';

export function DescriptionCard() {
	const main = useTranslationLazy('main');
	return (
		<Card className='border-2 border-primary/20 bg-linear-to-br from-card to-card/50 shadow-lg'>
			<CardHeader>
				<CardTitle className='text-2xl'>{main.description}</CardTitle>
			</CardHeader>
		</Card>
	);
}
