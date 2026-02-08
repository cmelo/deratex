/** @type {import("prettier").Config} */

module.exports = {
	overrides: [
		{
			files: '*.html',
			options: {
				parser: 'angular',
			},
		},
	],

	plugins: ['prettier-plugin-css-order', '@trivago/prettier-plugin-sort-imports'],

	// basic
	useTabs: true,
	tabWidth: 4,
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: 'always',
	printWidth: 80,

	overrides: [
		{
			files: '*.json',
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
	],

	// css order
	cssDeclarationSorterOrder: 'smacss',
	cssDeclarationSorterKeepOverrides: true,

	// ts/js import order

	importOrderParserPlugins: ['typescript', 'decorators'],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderGroupNamespaceSpecifiers: true,
	importOrder: ['^@angular/(.*)$', '<THIRD_PARTY_MODULES>', '^[../]', '^[./]'],
};
