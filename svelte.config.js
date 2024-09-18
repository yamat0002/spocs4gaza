import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const dev = process.argv.includes('dev');

const config = {
  kit: {
    adapter: adapter({
      pages: 'build', // The folder where the static files are generated
      assets: 'build',
      fallback: null // You can change this to '200.html' if you need a fallback for client-side routing
    }),
    paths: {
      base: dev ? '' : '/spoc_website', // Replace with your GitHub repository name
    },
    prerender: {
      default: true
    }
  }
};

export default config;
