/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      NEWS_API_KEY: '76050172983746038160371647c77be9',
      // NEWS_API_KEY: 'f290d06aa30a4e03bec0e48c72101164',
      YT_API_KEY: 'AIzaSyDiR5hfpbmNQStehjIQmRYHaRbwaTsn3sQ',
      // YT_API_KEY: 'AIzaSyAcEq0YQixA926mvljRRmakmCsN0qrkXJc',
      CHANNEL_ID: 'UCbu2SsF-Or3Rsn3NxqODImw',
    },
    experimental: {
      images: {
        unoptimized: true,
      },
    }
  }
  
  module.exports = nextConfig