import { mainReactComponent } from '@locales/components/react-component';
import { plur } from '../../plural/de';
import MainTranslationsEn from './en';

export default class MainTranslationsDe implements MainTranslationsEn {
	public selectPlural = plur;

	title = 'Hauptseite';
	subtitle = (
		<>
			Willkommen auf der <strong>Hauptseite</strong> unserer Anwendung
		</>
	);
	description = (
		<>
			Dies ist eine <em>Demonstrationsanwendung</em> für Internationalisierung
		</>
	);
	demoComponent = mainReactComponent('Demo React-Komponente', 'DIES IST EINE REACT-KOMPONENTE');
	features = {
		title: 'Funktionen',
		multiLanguage: {
			title: 'Mehrsprachige Unterstützung',
			description: (
				<>
					Wechseln Sie nahtlos zwischen verschiedenen <strong>Sprachen</strong>
				</>
			),
		},
		typedTranslations: {
			title: 'Typisierte Übersetzungen',
			description: (
				<>
					Vollständige <strong>TypeScript</strong>-Unterstützung mit Typsicherheit
				</>
			),
		},
		lazyLoading: {
			title: 'Lazy Loading',
			description: (
				<>
					Übersetzungen werden <em>bei Bedarf</em> geladen für bessere Leistung
				</>
			),
		},
		namespaceSupport: {
			title: 'Namespace-Unterstützung',
			description: (
				<>
					Organisieren Sie Übersetzungen nach <strong>Funktion</strong> oder <strong>Modul</strong>
				</>
			),
		},
	};
	statistics = {
		title: 'Statistiken',
	};
	recentActivity = {
		title: 'Letzte Aktivität',
		noActivity: (
			<>
				Keine <em>letzte Aktivität</em>
			</>
		),
	};
	quickActions = {
		title: 'Schnellaktionen',
		createArticle: 'Artikel erstellen',
		viewNews: 'Nachrichten anzeigen',
		openSettings: 'Einstellungen öffnen',
	};

	// Pluralization methods
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
}

