import { plur } from '../../plural/ru';
import CommonTranslationsEn from './en';

export default class CommonTranslationsRu implements CommonTranslationsEn {

	greeting = (
		<>
			Привет, <strong>Мир</strong>!
		</>
	);
	welcome = (
		<>
			Добро пожаловать в наше <em>приложение</em>
		</>
	);
	loading = 'Загрузка...';
	error = 'Произошла ошибка';
	success = 'Операция выполнена успешно';
	buttons = {
		save: 'Сохранить',
		cancel: 'Отмена',
		delete: 'Удалить',
		edit: 'Редактировать',
		create: 'Создать',
		submit: 'Отправить',
		close: 'Закрыть',
		back: 'Назад',
		next: 'Далее',
		previous: 'Назад',
		confirm: 'Подтвердить',
		search: 'Поиск',
		filter: 'Фильтр',
		reset: 'Сбросить',
	};
	labels = {
		name: 'Имя',
		email: 'Электронная почта',
		password: 'Пароль',
		description: 'Описание',
		title: 'Заголовок',
		date: 'Дата',
		time: 'Время',
		status: 'Статус',
		category: 'Категория',
		language: 'Язык',
		theme: 'Тема',
	};
	pages = {
		main: 'Главная',
		news: 'Новости',
		settings: 'Настройки',
	};
	messages = {
		noData: 'Данные отсутствуют',
		notFound: 'Не найдено',
		unauthorized: (
			<>
				У вас <strong>нет прав</strong> для выполнения этого действия
			</>
		),
		validationError: 'Пожалуйста, проверьте введенные данные',
		networkError: (
			<>
				Ошибка сети. Пожалуйста, <em>попробуйте позже</em>
			</>
		),
		saveSuccess: 'Данные успешно сохранены',
		deleteSuccess: 'Элемент успешно удален',
		confirmDelete: 'Вы уверены, что хотите удалить этот элемент?',
	};
	time = {
		now: 'Сейчас',
		today: 'Сегодня',
		yesterday: 'Вчера',
		tomorrow: 'Завтра',
		lastWeek: 'На прошлой неделе',
		nextWeek: 'На следующей неделе',
	};

	// Pluralization methods
	items = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'элемент',
			few: 'элемента',
			many: 'элементов',
			other: 'элементов',
		});

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

	comments = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'комментарий',
			few: 'комментария',
			many: 'комментариев',
			other: 'комментариев',
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

	minutes = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'минута',
			few: 'минуты',
			many: 'минут',
			other: 'минут',
		});

	hours = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'час',
			few: 'часа',
			many: 'часов',
			other: 'часов',
		});

	days = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'день',
			few: 'дня',
			many: 'дней',
			other: 'дней',
		});
}
