
const withOffline = require('next-offline')
module.exports = withOffline(
  {
    images: {
      domains: ['localhost','cellunatic.com','cloudinary.com'],
      deviceSizes:[320,640]
    },
    env:{
      API:process.env.API,
      DOMAIN:process.env.DOMAIN
    }
  }
)
