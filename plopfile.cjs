const path = require('path');

const fs = require('fs-extra');
const _ = require('lodash');

_.mixin({ pascalCase: _.flow(_.camelCase, _.upperFirst) });

const VARS = {
	COMPONENT_NAME: '$$COMPONENT_NAME',
	PATH: '$$PATH',
	LAYER: '$$LAYER',
	SLICE: '$$SLICE',
	USE_CSS_MODULES: '$$USE_CSS_MODULES',
	USE_DIV_PROPS: '$$USE_DIV_PROPS',
	USE_PUBLIC_API: '$$USE_PUBLIC_API',
	USE_PUBLIC_API_IN_PATH: '$$USE_PUBLIC_API_IN_PATH',
};

module.exports = function (
	/** @type {import('plop').NodePlopAPI} */
	plop
) {
	plop.setGenerator('FSD', {
		description: 'Создаёт новый React-компонент',
		// Вопросы для пользователя
		prompts: [
			{
				type: 'list',
				choices: ['app', 'pages', 'widgets', 'features', 'entities', 'shared'].reverse(),
				message: 'Выберите слой:',
				name: VARS.LAYER,
			},
			{
				type: 'input',
				name: VARS.SLICE,
				message: 'Введите название slice:',
				when: (answers) => answers[VARS.LAYER] !== 'shared',
				validate: (input) => {
					if (input.trim() === '') {
						return 'Название slice не может быть пустым';
					}
					if (input && !input[0].match(/^[a-zA-Z]$/)) {
						return 'Название slice не может начинаться не с латинской буквы';
					}
					if (input && input.match(/^[^a-zA-Z0-9$_]/)) {
						return 'Название slice может содержать только цифры и латинские буквы';
					}
					return true;
				},
				filter: (input) => {
					if (typeof input === 'string' && input.length > 0) {
						return _.kebabCase(input);
					}
					return input;
				},
			},
			{
				type: 'input',
				name: VARS.COMPONENT_NAME,
				message: 'Введите название компонента:',
				default: (answers) => (answers[VARS.SLICE] ? _.pascalCase(answers[VARS.SLICE]) : undefined),
				validate: (input) => {
					if (input.trim() === '') {
						return 'Название компонента не может быть пустым';
					}
					if (input && !input[0].match(/^[a-zA-Z$_]$/)) {
						return 'Название компонента не может начинаться не с латинской буквы';
					}
					if (input && input.match(/^[^a-zA-Z0-9$_]/)) {
						return 'Название компонента может содержать только цифры и латинские буквы';
					}
					return true;
				},
				filter: (input) => {
					if (typeof input === 'string' && input.length > 0) {
						return _.pascalCase(input);
					}
					return input;
				},
			},
			{
				type: 'confirm',
				name: VARS.USE_PUBLIC_API,
				default: true,
				message: 'Использовать Public API',
			},
			{
				type: 'confirm',
				name: VARS.USE_CSS_MODULES,
				default: false,
				message: 'Использовать css модуль:',
			},
			{
				type: 'confirm',
				name: VARS.USE_DIV_PROPS,
				default: false,
				message: "Использовать ComponentProps<'div'>:",
			},
			{
				type: 'input',
				name: VARS.PATH,
				default: '',
				message: 'Введите дополнительный путь (необязательно):',
			},
			{
				type: 'confirm',
				name: VARS.USE_PUBLIC_API_IN_PATH,
				default: false,
				message: 'Дотянуть Public API до указанного пути',
				when: (answers) => {
					return !!answers[VARS.PATH];
				},
			},
		],

		actions: (answer) => {
			const isShared = answer[VARS.LAYER] === 'shared';
			const basePath = path.join(
				'src',
				answer[VARS.LAYER],
				isShared ? 'ui' : '',
				answer[VARS.PATH] ?? '',
				answer[VARS.SLICE] ?? '',
				isShared ? '' : 'ui',
				answer[VARS.COMPONENT_NAME]
			);
			return [
				{
					type: 'add',
					path: path.join(basePath, answer[VARS.COMPONENT_NAME] + '.tsx'),
					templateFile: '.plop/fsd/component.hbs',
				},
				{
					type: 'add',
					path: path.join(basePath, 'index.ts'),
					templateFile: '.plop/fsd/index.hbs',
				},
				{
					type: 'add',
					path: path.join(basePath, answer[VARS.COMPONENT_NAME] + '.props.ts'),
					templateFile: '.plop/fsd/interface.hbs',
				},
				...(answer[VARS.USE_CSS_MODULES]
					? [
							{
								type: 'add',
								path: path.join(basePath, answer[VARS.COMPONENT_NAME] + '.module.css'),
								templateFile: '.plop/fsd/css.hbs',
							},
					  ]
					: []),
				{
					type: 'publicApi',
					// path: 'src/components/{{pascalCase name}}/index.js',
					templateFile: 'plop-templates/index.hbs',
				},
			];
		},
	});

	plop.setHelper('ternary', function (condition, valTrue, valFalse) {
		return condition ? valTrue : valFalse;
	});

	// TODO: исправить этот костыль
	plop.setHelper('ternaryImportCssModule', function (condition, valTrue, valFalse, options) {
		return condition ? valTrue.replace(`{{${VARS.COMPONENT_NAME}}}`, options.data.root[VARS.COMPONENT_NAME]) : valFalse;
	});

	plop.setActionType('publicApi', (answer) => {
		if (!answer[VARS.USE_PUBLIC_API]) {
			return '-';
		}
		const isShared = answer[VARS.LAYER] === 'shared';
		const startPath = path.join(
			'src',
			answer[VARS.LAYER],
			isShared ? 'ui' : '',
			answer[VARS.PATH] ?? '',
			answer[VARS.SLICE] ?? '',
			isShared ? '' : 'ui',
			answer[VARS.COMPONENT_NAME]
		);

		const endPath = path.join(
			'src',
			answer[VARS.LAYER],
			isShared ? 'ui' : '',
			answer[VARS.PATH] ?? '',
			!answer[VARS.USE_PUBLIC_API_IN_PATH] ? answer[VARS.SLICE] ?? '' : '',
			isShared && !answer[VARS.USE_PUBLIC_API_IN_PATH] ? answer[VARS.COMPONENT_NAME] : ''
		);

		const result = generatePublicApi(startPath, endPath);
		if (result === false) {
			return '-';
		}
		return '✔ publicApi сгенерирован';
	});
};

function generatePublicApi(componentDir, publicApiPath) {
	const absComponentDir = path.resolve(componentDir);
	const absPublicApiPath = path.resolve(publicApiPath);

	// Если одинаковые — ничего не делаем
	if (absComponentDir === absPublicApiPath) {
		return false;
	}

	let currentDir = absComponentDir;
	let childName = path.basename(currentDir);

	while (true) {
		const parentDir = path.dirname(currentDir);
		const indexFilePath = path.join(parentDir, 'index.ts');
		const exportLine = `export * from './${childName}';`;

		// Гарантируем, что директория родителя существует
		fs.ensureDirSync(parentDir);

		if (fs.existsSync(indexFilePath)) {
			// Файл есть — проверяем и при необходимости дописываем
			const content = fs.readFileSync(indexFilePath, 'utf8');
			if (!content.includes(exportLine)) {
				fs.appendFileSync(indexFilePath, exportLine + '\n');
				console.log(`Обновлён: ${indexFilePath}`);
			}
		} else {
			// Файла нет — создаём его с нужным содержимым
			fs.ensureFileSync(indexFilePath);
			fs.writeFileSync(indexFilePath, exportLine + '\n');
			console.log(`Создан: ${indexFilePath}`);
		}

		if (path.resolve(parentDir) === absPublicApiPath) {
			break;
		}

		// Предохранитель от бесконечного цикла
		if (parentDir === currentDir || parentDir.length < absPublicApiPath.length) {
			console.warn('Достигнут корень проекта или структура путей неверная — остановка');
			break;
		}

		childName = path.basename(parentDir);
		currentDir = parentDir;
	}
}
