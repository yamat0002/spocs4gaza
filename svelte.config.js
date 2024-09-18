import vercel from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: vercel({
      runtime: 'nodejs18.x' 
    }),  // Use Vercel adapter for serverless deployment
    paths: {
      base: '/spocs4gaza'  // Adjust as per your deployment path
    }
  }
};
