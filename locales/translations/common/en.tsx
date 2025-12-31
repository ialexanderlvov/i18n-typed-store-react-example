import { plur } from '../../plural/en';

export default class CommonTranslationsEn {
	greeting = (
		<>
			Hello, <strong>World</strong>!
		</>
	);
	welcome = (
		<>
			Welcome to our <em>application</em>
		</>
	);
	loading = 'Loading...';
	error = 'An error occurred';
	success = 'Operation completed successfully';
	buttons = {
		save: 'Save',
		cancel: 'Cancel',
		delete: 'Delete',
		edit: 'Edit',
		create: 'Create',
		submit: 'Submit',
		close: 'Close',
		back: 'Back',
		next: 'Next',
		previous: 'Previous',
		confirm: 'Confirm',
		search: 'Search',
		filter: 'Filter',
		reset: 'Reset',
	};
	labels = {
		name: 'Name',
		email: 'Email',
		password: 'Password',
		description: 'Description',
		title: 'Title',
		date: 'Date',
		time: 'Time',
		status: 'Status',
		category: 'Category',
		language: 'Language',
		theme: 'Theme',
	};
	pages = {
		main: 'Main',
		news: 'News',
		settings: 'Settings',
	};
	messages = {
		noData: 'No data available',
		notFound: 'Not found',
		unauthorized: (
			<>
				You are <strong>not authorized</strong> to perform this action
			</>
		),
		validationError: 'Please check the entered data',
		networkError: (
			<>
				Network error. Please <em>try again later</em>
			</>
		),
		saveSuccess: 'Data saved successfully',
		deleteSuccess: 'Item deleted successfully',
		confirmDelete: 'Are you sure you want to delete this item?',
	};
	time = {
		now: 'Now',
		today: 'Today',
		yesterday: 'Yesterday',
		tomorrow: 'Tomorrow',
		lastWeek: 'Last week',
		nextWeek: 'Next week',
	};

	// Pluralization methods
	items = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'item',
			other: 'items',
		});

	users = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'user',
			other: 'users',
		});

	articles = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'article',
			other: 'articles',
		});

	comments = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'comment',
			other: 'comments',
		});

	views = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'view',
			other: 'views',
		});

	likes = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'like',
			other: 'likes',
		});

	minutes = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'minute',
			other: 'minutes',
		});

	hours = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'hour',
			other: 'hours',
		});

	days = (count: number) =>
		count +
		' ' +
		plur(count, {
			one: 'day',
			other: 'days',
		});
}
