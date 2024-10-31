/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'cvs.duytan.edu.vn'
    ],
  },
};

export default nextConfig;
