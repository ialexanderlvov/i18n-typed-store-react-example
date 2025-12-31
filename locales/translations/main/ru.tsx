import { mainReactComponent } from '@locales/components/react-component';
import { plur } from '../../plural/ru';
import MainTranslationsEn from './en';

export default class MainTranslationsRu implements MainTranslationsEn {
	title = 'Главная страница';
	subtitle = (
		<>
			Добро пожаловать на <strong>главную страницу</strong> нашего приложения
		</>
	);
	description = (
		<>
			Это <em>демонстрационное приложение</em> для интернационализации
		</>
	);
	demoComponent = mainReactComponent('Демонстрация реакт компонента', 'ЭТО КОМПОНЕНТ РЕАКТА');

	features = {
		title: 'Возможности',
		multiLanguage: {
			title: 'Поддержка нескольких языков',
			description: (
				<>
					Переключайтесь между разными языками <strong>без проблем</strong>
				</>
			),
		},
		typedTranslations: {
			title: 'Типизированные переводы',
			description: (
				<>
					Полная поддержка <strong>TypeScript</strong> с типобезопасностью
				</>
			),
		},
		lazyLoading: {
			title: 'Ленивая загрузка',
			description: (
				<>
					Переводы загружаются <em>по требованию</em> для лучшей производительности
				</>
			),
		},
		namespaceSupport: {
			title: 'Поддержка пространств имен',
			description: (
				<>
					Организуйте переводы по <strong>функциям</strong> или <strong>модулям</strong>
				</>
			),
		},
	};
	statistics = {
		title: 'Статистика',
	};
	recentActivity = {
		title: 'Недавняя активность',
		noActivity: (
			<>
				Нет <em>недавней активности</em>
			</>
		),
	};
	quickActions = {
		title: 'Быстрые действия',
		createArticle: 'Создать статью',
		viewNews: 'Просмотреть новости',
		openSettings: 'Открыть настройки',
	};

	// Pluralization methods
	users = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'пользователь',
			few: 'пользователя',
			many: 'пользователей',
			other: 'пользователей',
		});

	articles = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'статья',
			few: 'статьи',
			many: 'статей',
			other: 'статей',
		});

	views = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'просмотр',
			few: 'просмотра',
			many: 'просмотров',
			other: 'просмотров',
		});

	likes = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'лайк',
			few: 'лайка',
			many: 'лайков',
			other: 'лайков',
		});
}
