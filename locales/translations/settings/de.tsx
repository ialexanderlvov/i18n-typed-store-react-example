import SettingsTranslationsEn from './en';

export default class SettingsTranslationsDe implements SettingsTranslationsEn {
	title = 'Einstellungen';
	subtitle = (
		<>
			Verwalten Sie Ihre <strong>Anwendungseinstellungen</strong>
		</>
	);
	sections = {
		general: {
			title: 'Allgemein',
			language: {
				label: 'Sprache',
				description: (
					<>
						Wählen Sie Ihre <em>bevorzugte Sprache</em>
					</>
				),
			},
			theme: {
				label: 'Design',
				description: (
					<>
						Wählen Sie Ihr <strong>bevorzugtes Design</strong>
					</>
				),
				options: {
					light: 'Hell',
					dark: 'Dunkel',
					system: 'System',
				},
			},
			timezone: {
				label: 'Zeitzone',
				description: 'Wählen Sie Ihre Zeitzone',
			},
		},
		account: {
			title: 'Konto',
			profile: {
				label: 'Profileinstellungen',
				description: (
					<>
						Verwalten Sie Ihre <em>Profilinformationen</em>
					</>
				),
			},
			security: {
				label: 'Sicherheit',
				description: (
					<>
						Ändern Sie <strong>Passwort</strong> und Sicherheitseinstellungen
					</>
				),
			},
			notifications: {
				label: 'Benachrichtigungen',
				description: (
					<>
						Verwalten Sie <em>Benachrichtigungseinstellungen</em>
					</>
				),
			},
		},
		privacy: {
			title: 'Datenschutz',
			dataCollection: {
				label: 'Datensammlung',
				description: (
					<>
						Kontrollieren Sie, welche <strong>Daten</strong> gesammelt werden
					</>
				),
			},
			cookies: {
				label: 'Cookies',
				description: (
					<>
						Verwalten Sie <em>Cookie-Einstellungen</em>
					</>
				),
			},
			sharing: {
				label: 'Datenaustausch',
				description: (
					<>
						Kontrollieren Sie, wie Ihre <strong>Daten</strong> geteilt werden
					</>
				),
			},
		},
		advanced: {
			title: 'Erweitert',
			developer: {
				label: 'Entwicklermodus',
				description: (
					<>
						Aktivieren Sie <strong>Entwicklerfunktionen</strong>
					</>
				),
			},
			experimental: {
				label: 'Experimentelle Funktionen',
				description: (
					<>
						Testen Sie <em>neue Funktionen</em>, bevor sie veröffentlicht werden
					</>
				),
			},
			reset: {
				label: 'Einstellungen zurücksetzen',
				description: (
					<>
						Setzen Sie alle Einstellungen auf <strong>Standardwerte</strong> zurück
					</>
				),
			},
		},
	};
	actions = {
		save: 'Änderungen speichern',
		reset: 'Auf Standard zurücksetzen',
		cancel: 'Abbrechen',
		apply: 'Anwenden',
	};
	messages = {
		saveSuccess: (
			<>
				Einstellungen <strong>erfolgreich</strong> gespeichert
			</>
		),
		saveError: (
			<>
				Fehler beim Speichern der <em>Einstellungen</em>
			</>
		),
		resetConfirm: (
			<>
				Sind Sie sicher, dass Sie <strong>alle Einstellungen</strong> zurücksetzen möchten?
			</>
		),
		resetSuccess: (
			<>
				Einstellungen <em>erfolgreich</em> zurückgesetzt
			</>
		),
	};
}

