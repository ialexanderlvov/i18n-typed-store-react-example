import { plur } from '../../plural/de';
import NewsTranslationsEn from './en';

export default class NewsTranslationsDe implements NewsTranslationsEn {
	public selectPlural = plur;

	title = 'Nachrichten';
	subtitle = (
		<>
			Bleiben Sie auf dem Laufenden mit den <strong>neuesten Nachrichten</strong>
		</>
	);
	empty = {
		title: 'Keine Nachrichten verfügbar',
		description: (
			<>
				Es gibt derzeit <em>keine Nachrichtenartikel</em>
			</>
		),
	};
	filters = {
		all: 'Alle',
		latest: 'Neueste',
		popular: 'Beliebt',
		trending: 'Trending',
		category: 'Kategorie',
		date: 'Datum',
	};
	article = {
		readMore: 'Weiterlesen',
		readLess: 'Weniger anzeigen',
		author: 'Autor',
		publishedAt: 'Veröffentlicht am',
		share: 'Teilen',
		bookmark: 'Lesezeichen',
		tags: 'Tags',
	};
	categories = {
		technology: 'Technologie',
		science: 'Wissenschaft',
		business: 'Wirtschaft',
		sports: 'Sport',
		entertainment: 'Unterhaltung',
		health: 'Gesundheit',
		politics: 'Politik',
		world: 'Welt',
	};
	actions = {
		loadMore: 'Mehr laden',
		refresh: 'Aktualisieren',
		search: 'Nachrichten suchen...',
	};
	messages = {
		loading: (
			<>
				Lade <em>Nachrichten</em>...
			</>
		),
		error: (
			<>
				Fehler beim Laden der <strong>Nachrichten</strong>
			</>
		),
		noResults: (
			<>
				Keine Nachrichten gefunden, die Ihren <em>Kriterien</em> entsprechen
			</>
		),
	};

	// Pluralization methods
	views = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'Aufruf',
			other: 'Aufrufe',
		});

	comments = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'Kommentar',
			other: 'Kommentare',
		});

	articles = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'Artikel',
			other: 'Artikel',
		});

	newsItems = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'Nachricht',
			other: 'Nachrichten',
		});
}

