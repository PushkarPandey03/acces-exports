/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['plyr', 'plyr-react', 'swiper'], // Transpile problematic packages
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Prevent server-side issues with Node.js-specific modules
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;