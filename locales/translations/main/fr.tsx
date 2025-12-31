import { mainReactComponent } from '@locales/components/react-component';
import { plur } from '../../plural/fr';
import MainTranslationsEn from './en';

export default class MainTranslationsFr implements MainTranslationsEn {
	public selectPlural = plur;

	title = 'Page principale';
	subtitle = (
		<>
			Bienvenue sur la <strong>page principale</strong> de notre application
		</>
	);
	description = (
		<>
			Ceci est une <em>application de démonstration</em> pour l'internationalisation
		</>
	);
	demoComponent = mainReactComponent('Composant React de démonstration', 'CECI EST UN COMPOSANT REACT');
	features = {
		title: 'Fonctionnalités',
		multiLanguage: {
			title: 'Support multilingue',
			description: (
				<>
					Basculez entre différentes <strong>langues</strong> en toute transparence
				</>
			),
		},
		typedTranslations: {
			title: 'Traductions typées',
			description: (
				<>
					Support complet de <strong>TypeScript</strong> avec sécurité de type
				</>
			),
		},
		lazyLoading: {
			title: 'Chargement différé',
			description: (
				<>
					Les traductions sont chargées <em>à la demande</em> pour de meilleures performances
				</>
			),
		},
		namespaceSupport: {
			title: 'Support des espaces de noms',
			description: (
				<>
					Organisez les traductions par <strong>fonctionnalité</strong> ou <strong>module</strong>
				</>
			),
		},
	};
	statistics = {
		title: 'Statistiques',
	};
	recentActivity = {
		title: 'Activité récente',
		noActivity: (
			<>
				Aucune <em>activité récente</em>
			</>
		),
	};
	quickActions = {
		title: 'Actions rapides',
		createArticle: 'Créer un article',
		viewNews: 'Voir les actualités',
		openSettings: 'Ouvrir les paramètres',
	};

	// Pluralization methods
	users = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'utilisateur',
			other: 'utilisateurs',
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
			one: 'vue',
			other: 'vues',
		});

	likes = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: "j'aime",
			other: "j'aime",
		});
}

