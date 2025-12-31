import { plur } from '../../plural/ru';
import NewsTranslationsEn from './en';

export default class NewsTranslationsRu implements NewsTranslationsEn {

	title = 'Новости';
	subtitle = (
		<>
			Будьте в курсе <strong>последних новостей</strong>
		</>
	);
	empty = {
		title: 'Новости отсутствуют',
		description: (
			<>
				В данный момент <em>новостных статей</em> нет
			</>
		),
	};
	filters = {
		all: 'Все',
		latest: 'Последние',
		popular: 'Популярные',
		trending: 'В тренде',
		category: 'Категория',
		date: 'Дата',
	};
	article = {
		readMore: 'Читать далее',
		readLess: 'Свернуть',
		author: 'Автор',
		publishedAt: 'Опубликовано',
		share: 'Поделиться',
		bookmark: 'В закладки',
		tags: 'Теги',
	};
	categories = {
		technology: 'Технологии',
		science: 'Наука',
		business: 'Бизнес',
		sports: 'Спорт',
		entertainment: 'Развлечения',
		health: 'Здоровье',
		politics: 'Политика',
		world: 'Мир',
	};
	actions = {
		loadMore: 'Загрузить еще',
		refresh: 'Обновить',
		search: 'Поиск новостей...',
	};
	messages = {
		loading: (
			<>
				Загрузка <em>новостей</em>...
			</>
		),
		error: (
			<>
				Не удалось загрузить <strong>новости</strong>
			</>
		),
		noResults: (
			<>
				Новости по вашему <em>запросу</em> не найдены
			</>
		),
	};

	// Pluralization methods
	views = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'просмотр',
			few: 'просмотра',
			many: 'просмотров',
			other: 'просмотров',
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

	articles = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'статья',
			few: 'статьи',
			many: 'статей',
			other: 'статей',
		});

	newsItems = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'новость',
			few: 'новости',
			many: 'новостей',
			other: 'новостей',
		});
}
