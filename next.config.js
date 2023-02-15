/** @type {import('next').NextConfig} */

  module.exports =  nextConfig = {
  reactStrictMode: true,
  }

 module.exports = {
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
 async rewrites() {
  return [
    {
      source: '/all-hot-deals',
      destination: '/hot-deals', // Matched parameters can be used in the destination
    },
  ]
},

 }


 
