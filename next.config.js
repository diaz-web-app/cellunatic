
const withOffline = require('next-offline')
const nextConfig = {
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: '/',
        handler: 'CacheFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 400
            }
          }
      },
      {
        urlPattern: /\.js$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 400
            }
          }
      },
      {
        urlPattern: /\.css$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 400
            }
          }
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 400
            }
          }
      },
      {
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'offlineCache',
        expiration: {
          maxEntries: 400
          }
        }
      }
    ]
  }
  }
  
  module.exports = withOffline(
    {
      images: {
        domains: ['localhost','cellunatic.com','cloudinary.com','res.cloudinary.com'],
        deviceSizes:[320,640]
      },
      env:{
        API:process.env.API,
        DOMAIN:process.env.DOMAIN
      }
    }
  )