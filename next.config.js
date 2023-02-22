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
      
      // category routing 
      {
        source: '/automotive-offers',
        destination: '/category/automotive-offers', 
      },
      {
        source: '/buying-guide',
        destination: '/category/buying-guide', 
      },
      {
        source: '/camera-accessories-offers',
        destination: '/category/camera-accessories-offers', 
      },
      {
        source: '/credit-cards-offers',
        destination: '/category/credit-cards-offers', 
      },
      {
        source: '/electronics-offers',
        destination: '/category/electronics-offers', 
      },
      {
        source: '/entertainment-offers',
        destination: '/category/entertainment-offers', 
      },
      {
        source: '/fashion',
        destination: '/category/fashion', 
      },
      {
        source: '/fashion-accessories-offers',
        destination: '/category/fashion-accessories-offers', 
      },
      {
        source: '/food-drink-offers',
        destination: '/category/food-drink-offers', 
      },
      {
        source: '/footwear-offers',
        destination: '/category/footwear-offers', 
      },
      {
        source: '/free-cashback-deals',
        destination: '/category/free-cashback-deals', 
      },
      {
        source: '/freebie',
        destination: '/category/freebie', 
      },
      {
        source :'/free-survey-earn-money',
        destination: '/category/free-survey-earn-money',
      },
      {
        source :'/free-survey-earn-money',
        destination: '/category/free-survey-earn-money',
      },
      {
        source :'/gifts-offers',
        destination: '/category/gifts-offers',
      },
      {
        source :'/grocery-offers',
        destination: '/category/gifts-offers',
      },
      {
        source :'/health-beauty-personal-care-offers',
        destination: '/category/health-beauty-personal-care-offers',
      },
      {
        source :'/home-kitchen-appliance-offers',
        destination: '/category/home-kitchen-appliance-offerss',
      },
      {
        source :'/home-decor-offers',
        destination: '/category/home-decor-offers',
      },
      {
        source :'/hosting-domains-offers',
        destination: '/category/hosting-domains-offers',
      },
      {
        source :'/kids',
        destination: '/category/kids',
      },
      {
        source :'/kitchen-dinning-offers',
        destination: '/category/kitchen-dinning-offers',
      },
      {
        source :'/laptops-computers-offers',
        destination: '/category/laptops-computers-offers',
      },
      {
        source :'/luggage-bags-offers',
        destination: '/category/luggage-bags-offers',
      },
      {
        source :'/medicine-offer',
        destination: '/category/medicine-offer',
      },
      {
        source :'/miscellaneous',
        destination: '/category/miscellaneous',
      },
      {
        source :'/mobile-offers',
        destination: '/category/mobile-offers',
      },
      {
        source :'/mobile-recharge-offers',
        destination: '/category/mobile-recharge-offers',
      },
      {
        source :'/pet-care-offers',
        destination: '/category/pet-care-offers',
      },
      {
        source :'/sports-fitness-offers',
        destination: '/category/sports-fitness-offers',
      },
      {
        source :'/stationery-offers',
        destination: '/category/stationery-offers',
      },
      {
        source :'/eyewear-offers',
        destination: '/category/eyewear-offers',
      },
      {
        source :'/travel',
        destination: '/category/travel',
      },
      // category routing ends---
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



 
