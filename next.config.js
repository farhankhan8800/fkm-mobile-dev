/** @type {import('next').NextConfig} */

  module.exports =  nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  async rewrites() {
    return [

      // common pages routing //
      {
        source: '/contact-us',
        destination: '/common/contact-us/', 
      },
      {
        source: '/about-us',
        destination: '/common/about-us/', 
      },
      {
        source: '/advertise-with-us',
        destination: '/common/advertise-with-us/', 
      },
      {
        source: '/faq',
        destination: '/common/faq/', 
      },
      {
        source: '/fkm-testimonial',
        destination: '/common/fkm-testimonial/', 
      },
      // cutsom - Dynamic Routing //
      {
        source: '/coupon-code/:id',
        destination: '/coupon/:id', 
      }, 
      {
        source: '/all-article',
        destination: '/articles/', 
      },
      {
        source: '/deals/:id',
        destination: '/deals/:id',
      },
     
      {
        source: '/:id',
        destination: '/store/:id', 
      },
      {
        source: '/:id',
        destination: '/category/:id', 
      },
      {
        source: '/:id/:id',
        destination: '/articles/:id',
      },
    ]
  },

  async redirects() {
    return [
     
    ];
  },

  images: {
    domains: ['images.freekaamaal.com','m.freekaamaal.com']
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



 
