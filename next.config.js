/** @type {import('next').NextConfig} */

  module.exports =  nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  async rewrites() {
    return [
      {
        source: '/:id',
        destination: '/store/:id', 
      },
      // {
      //   source: '/:id',
      //   destination: '/category/:id',
      // },
      {
        source: '/:id/:id',
        destination: '/articles/:id',
      },
      
    ]
  },

  async redirects() {
    return [
      // {
      //   source: '/:id',
      //   destination: '/category/:id',
      //   permanent: true, // optional, sets the redirect status code to 301
      // },
    ];
  },

  images: {
    domains: ['images.freekaamaal.com']
   },
   env:{
      API_AUTH : "u636a0295845eb68x"
   },
   eslint: {
     // Warning: This allows production builds to successfully complete even if
     // your project has ESLint errors.
     ignoreDuringBuilds: true,
   },
  
  }



 
