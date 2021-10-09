
const withPWA = require('next-pwa')

  module.exports = withPWA(
    {
      images: {
        domains: ['localhost','cellunatic.com','cloudinary.com','res.cloudinary.com'],
        deviceSizes:[320,640]
      },
      env:{
        API:process.env.API,
        DOMAIN:process.env.DOMAIN
      },
      pwa:{
	      dest:'public',
        disable: process.env.NODE_ENV === 'development'
      }
    }
  )
