import { plur } from '../../plural/fr';
import NewsTranslationsEn from './en';

export default class NewsTranslationsFr implements NewsTranslationsEn {
	public selectPlural = plur;

	title = 'Actualités';
	subtitle = (
		<>
			Restez informé des <strong>dernières actualités</strong>
		</>
	);
	empty = {
		title: 'Aucune actualité disponible',
		description: (
			<>
				Il n'y a <em>aucun article d'actualité</em> pour le moment
			</>
		),
	};
	filters = {
		all: 'Tout',
		latest: 'Dernières',
		popular: 'Populaires',
		trending: 'Tendances',
		category: 'Catégorie',
		date: 'Date',
	};
	article = {
		readMore: 'Lire la suite',
		readLess: 'Lire moins',
		author: 'Auteur',
		publishedAt: 'Publié le',
		share: 'Partager',
		bookmark: 'Marquer',
		tags: 'Tags',
	};
	categories = {
		technology: 'Technologie',
		science: 'Science',
		business: 'Entreprise',
		sports: 'Sport',
		entertainment: 'Divertissement',
		health: 'Santé',
		politics: 'Politique',
		world: 'Monde',
	};
	actions = {
		loadMore: 'Charger plus',
		refresh: 'Actualiser',
		search: 'Rechercher des actualités...',
	};
	messages = {
		loading: (
			<>
				Chargement des <em>actualités</em>...
			</>
		),
		error: (
			<>
				Échec du chargement des <strong>actualités</strong>
			</>
		),
		noResults: (
			<>
				Aucune actualité trouvée correspondant à vos <em>critères</em>
			</>
		),
	};

	// Pluralization methods
	views = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'vue',
			other: 'vues',
		});

	comments = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'commentaire',
			other: 'commentaires',
		});

	articles = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'article',
			other: 'articles',
		});

	newsItems = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'actualité',
			other: 'actualités',
		});
}

