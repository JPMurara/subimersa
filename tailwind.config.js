/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			fontFamily: {
				'poetsen-one': ['Poetsen One', 'sans-serif']
			},
			colors: {
				blue: {
					1: '#026891',
					2: '#afd6e6',
					3: '#19a9d1',
					4: '#afd6e6',
					5: '#bad9e9',
					6: '#cfe5f3'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')]
};
