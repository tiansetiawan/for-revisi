module.exports = {
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
  

  /** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: false, // Nonaktifkan optimisasi gambar
        domains: ['img.youtube.com'],
      },
  };
  
  module.exports = nextConfig;
  