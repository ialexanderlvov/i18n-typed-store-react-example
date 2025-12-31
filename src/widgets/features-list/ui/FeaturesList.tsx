import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/shadcn/ui/card';
import { FeatureCard } from '@/entities/feature-card';
import { Globe, Code, Zap, FolderTree } from 'lucide-react';
import { useTranslationLazy } from '@locales/useTranslation';

export function FeaturesList() {
	const main = useTranslationLazy('main');
	return (
		<Card className='border-2 shadow-xl'>
			<CardHeader>
				<CardTitle className='text-2xl font-bold'>{main.features.title}</CardTitle>
			</CardHeader>
			<CardContent className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<FeatureCard
					icon={Globe}
					title={main.features.multiLanguage.title}
					description={main.features.multiLanguage.description}
					color='blue'
				/>
				<FeatureCard
					icon={Code}
					title={main.features.typedTranslations.title}
					description={main.features.typedTranslations.description}
					color='purple'
				/>
				<FeatureCard
					icon={Zap}
					title={main.features.lazyLoading.title}
					description={main.features.lazyLoading.description}
					color='yellow'
				/>
				<FeatureCard
					icon={FolderTree}
					title={main.features.namespaceSupport.title}
					description={main.features.namespaceSupport.description}
					color='green'
				/>
			</CardContent>
		</Card>
	);
}

