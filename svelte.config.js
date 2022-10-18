import preprocess from 'svelte-preprocess'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import adapter from '@sveltejs/adapter-auto';

const filePath = dirname(fileURLToPath(import.meta.url));
const sassPath = `${filePath}/src/lib/style/`;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: `@import '${sassPath}main.scss';`
		}
	}),

	kit: {
		adapter: adapter()
	}
};

export default config;
