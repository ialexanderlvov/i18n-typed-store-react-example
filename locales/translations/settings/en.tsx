export default class SettingsTranslationsEn {
	title = 'Settings';
	subtitle = (
		<>
			Manage your <strong>application settings</strong>
		</>
	);
	sections = {
		general: {
			title: 'General',
			language: {
				label: 'Language',
				description: (
					<>
						Select your <em>preferred language</em>
					</>
				),
			},
			theme: {
				label: 'Theme',
				description: (
					<>
						Choose your <strong>preferred theme</strong>
					</>
				),
				options: {
					light: 'Light',
					dark: 'Dark',
					system: 'System',
				},
			},
			timezone: {
				label: 'Timezone',
				description: 'Select your timezone',
			},
		},
		account: {
			title: 'Account',
			profile: {
				label: 'Profile Settings',
				description: (
					<>
						Manage your <em>profile information</em>
					</>
				),
			},
			security: {
				label: 'Security',
				description: (
					<>
						Change <strong>password</strong> and security settings
					</>
				),
			},
			notifications: {
				label: 'Notifications',
				description: (
					<>
						Manage <em>notification preferences</em>
					</>
				),
			},
		},
		privacy: {
			title: 'Privacy',
			dataCollection: {
				label: 'Data Collection',
				description: (
					<>
						Control what <strong>data</strong> is collected
					</>
				),
			},
			cookies: {
				label: 'Cookies',
				description: (
					<>
						Manage <em>cookie preferences</em>
					</>
				),
			},
			sharing: {
				label: 'Data Sharing',
				description: (
					<>
						Control how your <strong>data</strong> is shared
					</>
				),
			},
		},
		advanced: {
			title: 'Advanced',
			developer: {
				label: 'Developer Mode',
				description: (
					<>
						Enable <strong>developer features</strong>
					</>
				),
			},
			experimental: {
				label: 'Experimental Features',
				description: (
					<>
						Try out <em>new features</em> before they are released
					</>
				),
			},
			reset: {
				label: 'Reset Settings',
				description: (
					<>
						Reset all settings to <strong>default values</strong>
					</>
				),
			},
		},
	};
	actions = {
		save: 'Save Changes',
		reset: 'Reset to Default',
		cancel: 'Cancel',
		apply: 'Apply',
	};
	messages = {
		saveSuccess: (
			<>
				Settings saved <strong>successfully</strong>
			</>
		),
		saveError: (
			<>
				Failed to save <em>settings</em>
			</>
		),
		resetConfirm: (
			<>
				Are you sure you want to reset <strong>all settings</strong>?
			</>
		),
		resetSuccess: (
			<>
				Settings reset <em>successfully</em>
			</>
		),
	};
}
