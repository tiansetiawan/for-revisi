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
      },
  };
  
  module.exports = nextConfig;
  