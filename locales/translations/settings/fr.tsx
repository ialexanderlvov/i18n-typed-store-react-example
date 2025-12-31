import SettingsTranslationsEn from './en';

export default class SettingsTranslationsFr implements SettingsTranslationsEn {
	title = 'Paramètres';
	subtitle = (
		<>
			Gérez vos <strong>paramètres d'application</strong>
		</>
	);
	sections = {
		general: {
			title: 'Général',
			language: {
				label: 'Langue',
				description: (
					<>
						Sélectionnez votre <em>langue préférée</em>
					</>
				),
			},
			theme: {
				label: 'Thème',
				description: (
					<>
						Choisissez votre <strong>thème préféré</strong>
					</>
				),
				options: {
					light: 'Clair',
					dark: 'Sombre',
					system: 'Système',
				},
			},
			timezone: {
				label: 'Fuseau horaire',
				description: 'Sélectionnez votre fuseau horaire',
			},
		},
		account: {
			title: 'Compte',
			profile: {
				label: 'Paramètres du profil',
				description: (
					<>
						Gérez vos <em>informations de profil</em>
					</>
				),
			},
			security: {
				label: 'Sécurité',
				description: (
					<>
						Modifiez le <strong>mot de passe</strong> et les paramètres de sécurité
					</>
				),
			},
			notifications: {
				label: 'Notifications',
				description: (
					<>
						Gérez les <em>préférences de notification</em>
					</>
				),
			},
		},
		privacy: {
			title: 'Confidentialité',
			dataCollection: {
				label: 'Collecte de données',
				description: (
					<>
						Contrôlez quelles <strong>données</strong> sont collectées
					</>
				),
			},
			cookies: {
				label: 'Cookies',
				description: (
					<>
						Gérez les <em>préférences de cookies</em>
					</>
				),
			},
			sharing: {
				label: 'Partage de données',
				description: (
					<>
						Contrôlez comment vos <strong>données</strong> sont partagées
					</>
				),
			},
		},
		advanced: {
			title: 'Avancé',
			developer: {
				label: 'Mode développeur',
				description: (
					<>
						Activez les <strong>fonctionnalités développeur</strong>
					</>
				),
			},
			experimental: {
				label: 'Fonctionnalités expérimentales',
				description: (
					<>
						Essayez de <em>nouvelles fonctionnalités</em> avant leur publication
					</>
				),
			},
			reset: {
				label: 'Réinitialiser les paramètres',
				description: (
					<>
						Réinitialisez tous les paramètres aux <strong>valeurs par défaut</strong>
					</>
				),
			},
		},
	};
	actions = {
		save: 'Enregistrer les modifications',
		reset: 'Réinitialiser par défaut',
		cancel: 'Annuler',
		apply: 'Appliquer',
	};
	messages = {
		saveSuccess: (
			<>
				Paramètres enregistrés avec <strong>succès</strong>
			</>
		),
		saveError: (
			<>
				Échec de l'enregistrement des <em>paramètres</em>
			</>
		),
		resetConfirm: (
			<>
				Êtes-vous sûr de vouloir réinitialiser <strong>tous les paramètres</strong> ?
			</>
		),
		resetSuccess: (
			<>
				Paramètres réinitialisés avec <em>succès</em>
			</>
		),
	};
}

