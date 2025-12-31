import { plur } from '../../plural/de';
import CommonTranslationsEn from './en';

export default class CommonTranslationsDe implements CommonTranslationsEn {
	public selectPlural = plur;

	greeting = (
		<>
			Hallo, <strong>Welt</strong>!
		</>
	);
	welcome = (
		<>
			Willkommen in unserer <em>Anwendung</em>
		</>
	);
	loading = 'Laden...';
	error = 'Ein Fehler ist aufgetreten';
	success = 'Vorgang erfolgreich abgeschlossen';
	buttons = {
		save: 'Speichern',
		cancel: 'Abbrechen',
		delete: 'Löschen',
		edit: 'Bearbeiten',
		create: 'Erstellen',
		submit: 'Absenden',
		close: 'Schließen',
		back: 'Zurück',
		next: 'Weiter',
		previous: 'Zurück',
		confirm: 'Bestätigen',
		search: 'Suchen',
		filter: 'Filter',
		reset: 'Zurücksetzen',
	};
	labels = {
		name: 'Name',
		email: 'E-Mail',
		password: 'Passwort',
		description: 'Beschreibung',
		title: 'Titel',
		date: 'Datum',
		time: 'Zeit',
		status: 'Status',
		category: 'Kategorie',
		language: 'Sprache',
		theme: 'Design',
	};
	pages = {
		main: 'Hauptseite',
		news: 'Nachrichten',
		settings: 'Einstellungen',
	};
	messages = {
		noData: 'Keine Daten verfügbar',
		notFound: 'Nicht gefunden',
		unauthorized: (
			<>
				Sie sind <strong>nicht berechtigt</strong>, diese Aktion auszuführen
			</>
		),
		validationError: 'Bitte überprüfen Sie die eingegebenen Daten',
		networkError: (
			<>
				Netzwerkfehler. Bitte <em>versuchen Sie es später erneut</em>
			</>
		),
		saveSuccess: 'Daten erfolgreich gespeichert',
		deleteSuccess: 'Element erfolgreich gelöscht',
		confirmDelete: 'Sind Sie sicher, dass Sie dieses Element löschen möchten?',
	};
	time = {
		now: 'Jetzt',
		today: 'Heute',
		yesterday: 'Gestern',
		tomorrow: 'Morgen',
		lastWeek: 'Letzte Woche',
		nextWeek: 'Nächste Woche',
	};

	// Pluralization methods
	items = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'Element',
			other: 'Elemente',
		});

	users = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'Benutzer',
			other: 'Benutzer',
		});

	articles = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'Artikel',
			other: 'Artikel',
		});

	comments = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'Kommentar',
			other: 'Kommentare',
		});

	views = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'Aufruf',
			other: 'Aufrufe',
		});

	likes = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'Gefällt mir',
			other: 'Gefällt mir',
		});

	minutes = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'Minute',
			other: 'Minuten',
		});

	hours = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'Stunde',
			other: 'Stunden',
		});

	days = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'Tag',
			other: 'Tage',
		});
}

