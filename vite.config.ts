import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';
import Icons from 'unplugin-icons/vite';


const config: UserConfig = {
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte'
		})
	],
	server: {
		fs: {
			allow: [path.resolve(process.cwd(), '.netlify')] // required for local stripe webhook handler testing to work.
		}
	},
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib'),
			$components: path.resolve('./src/components'),
			$stores: path.resolve('./src/lib/stores'),
			$assets: path.resolve('./src/assets'),
			$functions: path.resolve('./netlify/functions')
		}
	}
};

export default config;
