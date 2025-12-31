import { plur } from '../../plural/en';

export default class NewsTranslationsEn {

	title = 'News';
	subtitle = (
		<>
			Stay updated with the <strong>latest news</strong>
		</>
	);
	empty = {
		title: 'No news available',
		description: (
			<>
				There are <em>no news articles</em> at the moment
			</>
		),
	};
	filters = {
		all: 'All',
		latest: 'Latest',
		popular: 'Popular',
		trending: 'Trending',
		category: 'Category',
		date: 'Date',
	};
	article = {
		readMore: 'Read more',
		readLess: 'Read less',
		author: 'Author',
		publishedAt: 'Published at',
		share: 'Share',
		bookmark: 'Bookmark',
		tags: 'Tags',
	};
	categories = {
		technology: 'Technology',
		science: 'Science',
		business: 'Business',
		sports: 'Sports',
		entertainment: 'Entertainment',
		health: 'Health',
		politics: 'Politics',
		world: 'World',
	};
	actions = {
		loadMore: 'Load more',
		refresh: 'Refresh',
		search: 'Search news...',
	};
	messages = {
		loading: (
			<>
				Loading <em>news</em>...
			</>
		),
		error: (
			<>
				Failed to load <strong>news</strong>
			</>
		),
		noResults: (
			<>
				No news found matching your <em>criteria</em>
			</>
		),
	};

	// Pluralization methods
	views = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'view',
			other: 'views',
		});

	comments = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'comment',
			other: 'comments',
		});

	articles = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'article',
			other: 'articles',
		});

	newsItems = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'news item',
			other: 'news items',
		});
}
