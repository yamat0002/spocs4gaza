import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      strict: false,
      fallback: 'index.html' // No fallback needed for a single-page app
    }),
    paths: {
      base: '/spocs4gaza',  // Base path matches your GitHub Pages repo name
    }
  }
};
