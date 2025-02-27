import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		typescript: true,
		postcss: true
	}),

	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: "index.html"
		}),
		trailingSlash: "always"
	}
};

export default config;
