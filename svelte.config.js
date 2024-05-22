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
		adapter: adapter()
		// No need to set the paths.base for Vercel unless you're doing something unusual
		// paths: {
		//   base: process.env.NODE_ENV === 'production' ? '/yourbasepath' : ''
		// },
	}
};

export default config;
