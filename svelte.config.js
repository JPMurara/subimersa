import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import tailwindcss from 'tailwindcss';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		}),
		vitePreprocess({
			style: {
				postcss: {
					plugins: [tailwindcss()]
				}
			}
		})
	],

	kit: {
		adapter: adapter({
			edge: false,
			split: false
		})
	}
};

export default config;
