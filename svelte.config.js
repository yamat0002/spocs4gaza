import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html'

    
    }),
    paths: {
      base: '/spocs4gaza',  // Make sure this matches your GitHub Pages repo name
    }
  }
};
