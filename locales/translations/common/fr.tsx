import { plur } from '../../plural/fr';
import CommonTranslationsEn from './en';

export default class CommonTranslationsFr implements CommonTranslationsEn {
	public selectPlural = plur;

	greeting = (
		<>
			Bonjour, <strong>Monde</strong> !
		</>
	);
	welcome = (
		<>
			Bienvenue dans notre <em>application</em>
		</>
	);
	loading = 'Chargement...';
	error = "Une erreur s'est produite";
	success = 'Opération terminée avec succès';
	buttons = {
		save: 'Enregistrer',
		cancel: 'Annuler',
		delete: 'Supprimer',
		edit: 'Modifier',
		create: 'Créer',
		submit: 'Soumettre',
		close: 'Fermer',
		back: 'Retour',
		next: 'Suivant',
		previous: 'Précédent',
		confirm: 'Confirmer',
		search: 'Rechercher',
		filter: 'Filtrer',
		reset: 'Réinitialiser',
	};
	labels = {
		name: 'Nom',
		email: 'E-mail',
		password: 'Mot de passe',
		description: 'Description',
		title: 'Titre',
		date: 'Date',
		time: 'Heure',
		status: 'Statut',
		category: 'Catégorie',
		language: 'Langue',
		theme: 'Thème',
	};
	pages = {
		main: 'Principal',
		news: 'Actualités',
		settings: 'Paramètres',
	};
	messages = {
		noData: 'Aucune donnée disponible',
		notFound: 'Non trouvé',
		unauthorized: (
			<>
				Vous n'êtes <strong>pas autorisé</strong> à effectuer cette action
			</>
		),
		validationError: 'Veuillez vérifier les données saisies',
		networkError: (
			<>
				Erreur réseau. Veuillez <em>réessayer plus tard</em>
			</>
		),
		saveSuccess: 'Données enregistrées avec succès',
		deleteSuccess: 'Élément supprimé avec succès',
		confirmDelete: 'Êtes-vous sûr de vouloir supprimer cet élément ?',
	};
	time = {
		now: 'Maintenant',
		today: "Aujourd'hui",
		yesterday: 'Hier',
		tomorrow: 'Demain',
		lastWeek: 'La semaine dernière',
		nextWeek: 'La semaine prochaine',
	};

	// Pluralization methods
	items = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'élément',
			other: 'éléments',
		});

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

	comments = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'commentaire',
			other: 'commentaires',
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

	minutes = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'minute',
			other: 'minutes',
		});

	hours = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'heure',
			other: 'heures',
		});

	days = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'jour',
			other: 'jours',
		});
}
