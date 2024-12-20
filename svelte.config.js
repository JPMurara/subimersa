import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true // This assumes you have a postcss.config.js for Tailwind setup
		}),
		vitePreprocess()
	],

	kit: {
		adapter: adapter({
			edge: false,
			split: false
		})
	}
};

export default config;
