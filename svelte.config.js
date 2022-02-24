import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess({
        postcss: {
            plugins: [autoprefixer(), cssnano()]
        }
    }),

    kit: {
        files: {
            assets: 'static',
            lib: 'src',
        },
        package: {
            dir: 'dist',
            emitTypes: true,
            // excludes all .d.ts and files starting with _ as the name
            exports: (filepath) => !/^_|\/_|\.d\.ts$/.test(filepath),
            files: () => true
        },
    }
};

export default config;