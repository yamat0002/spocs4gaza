import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
    
    }),
    paths: {
      base: '/spocs4gaza',  // Make sure this matches your GitHub Pages repo name
    },
    prerender: {
      crawl: true  // This will find links and prerender them
    }
  }
};
