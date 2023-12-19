import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.html'],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [ vitePreprocess() ],
	
	kit: {
		adapter: adapter(),
		prerender: {
			entries: [
				"*",
				"/",
				"/imprint",
				"/terms",
			]
		},
		paths: {
			relative: false,
		},
	}
};

export default config;
