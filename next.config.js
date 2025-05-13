module.exports = {
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
  

  /** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true // Nonaktifkan optimisasi gambar
      },
  };
  
  module.exports = nextConfig;
  