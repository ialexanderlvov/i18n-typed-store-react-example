import { mainReactComponent } from '@locales/components/react-component';
import { plur } from '../../plural/en';

export default class MainTranslationsEn {
	title = 'Main Page';
	subtitle = (
		<>
			Welcome to the <strong>main page</strong> of our application
		</>
	);
	description = (
		<>
			This is a <em>demonstration application</em> for internationalization
		</>
	);
	demoComponent = mainReactComponent('Demo react component', 'THIS IS REACT COMPONENT');
	features = {
		title: 'Features',
		multiLanguage: {
			title: 'Multi-language support',
			description: (
				<>
					Switch between different languages <strong>seamlessly</strong>
				</>
			),
		},
		typedTranslations: {
			title: 'Typed translations',
			description: (
				<>
					Full <strong>TypeScript</strong> support with type safety
				</>
			),
		},
		lazyLoading: {
			title: 'Lazy loading',
			description: (
				<>
					Translations are loaded <em>on demand</em> for better performance
				</>
			),
		},
		namespaceSupport: {
			title: 'Namespace support',
			description: (
				<>
					Organize translations by <strong>feature</strong> or <strong>module</strong>
				</>
			),
		},
	};
	statistics = {
		title: 'Statistics',
	};
	recentActivity = {
		title: 'Recent Activity',
		noActivity: (
			<>
				No <em>recent activity</em>
			</>
		),
	};
	quickActions = {
		title: 'Quick Actions',
		createArticle: 'Create Article',
		viewNews: 'View News',
		openSettings: 'Open Settings',
	};

	// Pluralization methods
	users = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'user',
			other: 'users',
		});

	articles = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'article',
			other: 'articles',
		});

	views = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'view',
			other: 'views',
		});

	likes = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'like',
			other: 'likes',
		});
}
