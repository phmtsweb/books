/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'github.com',
      'avatars.githubusercontent.com',
      'images-na.ssl-images-amazon.com',
      'm.media-amazon.com',
      'images.unsplash.com',
      'localhost',
    ],
  },
}

module.exports = nextConfig
