import path from 'path'
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter(),
		// vite: {
		// 	server: {
		// 		fs: {
		// 			allow: [path.resolve(process.cwd(), '.netlify')] // required for local stripe webhook handler testing to work.
		// 		}
		// 	},
		// 	resolve: {
		// 		alias: {
		// 			$lib: path.resolve('./src/lib'),
		// 			$components: path.resolve('./src/components'),
		// 			$stores: path.resolve('./src/lib/stores'),
		// 			$assets: path.resolve('./src/assets'),
		// 			$functions: path.resolve('./netlify/functions')
		// 		}
		// 	}
		// }
	}
};

export default config;
