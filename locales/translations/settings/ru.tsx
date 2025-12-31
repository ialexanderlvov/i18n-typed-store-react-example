import SettingsTranslationsEn from './en';

export default class SettingsTranslationsRu implements SettingsTranslationsEn {
	title = 'Настройки';
	subtitle = (
		<>
			Управляйте <strong>настройками приложения</strong>
		</>
	);
	sections = {
		general: {
			title: 'Общие',
			language: {
				label: 'Язык',
				description: (
					<>
						Выберите <em>предпочитаемый язык</em>
					</>
				),
			},
			theme: {
				label: 'Тема',
				description: (
					<>
						Выберите <strong>предпочитаемую тему</strong>
					</>
				),
				options: {
					light: 'Светлая',
					dark: 'Темная',
					system: 'Системная',
				},
			},
			timezone: {
				label: 'Часовой пояс',
				description: 'Выберите часовой пояс',
			},
		},
		account: {
			title: 'Аккаунт',
			profile: {
				label: 'Настройки профиля',
				description: (
					<>
						Управляйте <em>информацией профиля</em>
					</>
				),
			},
			security: {
				label: 'Безопасность',
				description: (
					<>
						Измените <strong>пароль</strong> и настройки безопасности
					</>
				),
			},
			notifications: {
				label: 'Уведомления',
				description: (
					<>
						Управляйте <em>настройками уведомлений</em>
					</>
				),
			},
		},
		privacy: {
			title: 'Конфиденциальность',
			dataCollection: {
				label: 'Сбор данных',
				description: (
					<>
						Контролируйте, какие <strong>данные</strong> собираются
					</>
				),
			},
			cookies: {
				label: 'Cookies',
				description: (
					<>
						Управляйте <em>настройками cookies</em>
					</>
				),
			},
			sharing: {
				label: 'Обмен данными',
				description: (
					<>
						Контролируйте, как ваши <strong>данные</strong> используются
					</>
				),
			},
		},
		advanced: {
			title: 'Дополнительно',
			developer: {
				label: 'Режим разработчика',
				description: (
					<>
						Включить <strong>функции разработчика</strong>
					</>
				),
			},
			experimental: {
				label: 'Экспериментальные функции',
				description: (
					<>
						Попробуйте <em>новые функции</em> до их официального выпуска
					</>
				),
			},
			reset: {
				label: 'Сбросить настройки',
				description: (
					<>
						Сбросить все настройки к <strong>значениям по умолчанию</strong>
					</>
				),
			},
		},
	};
	actions = {
		save: 'Сохранить изменения',
		reset: 'Сбросить по умолчанию',
		cancel: 'Отмена',
		apply: 'Применить',
	};
	messages = {
		saveSuccess: (
			<>
				Настройки сохранены <strong>успешно</strong>
			</>
		),
		saveError: (
			<>
				Не удалось сохранить <em>настройки</em>
			</>
		),
		resetConfirm: (
			<>
				Вы уверены, что хотите сбросить <strong>все настройки</strong>?
			</>
		),
		resetSuccess: (
			<>
				Настройки сброшены <em>успешно</em>
			</>
		),
	};
}
