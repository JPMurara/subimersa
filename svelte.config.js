import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
import tailwindcss from 'tailwindcss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true // This ensures PostCSS (which Tailwind is a plugin of) is enabled
		}),
		vitePreprocess({
			style: {
				postcss: {
					plugins: [
						tailwindcss() // Adding Tailwind CSS as a PostCSS plugin
					]
				}
			}
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		// Setup base path for GitHub Pages
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/subimersa' : ''
		}
		// Additional configurations might be required depending on your setup
	}
};

export default config;
