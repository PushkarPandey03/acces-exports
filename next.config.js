/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['plyr'], // Transpile plyr if needed
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Ensure plyr is only loaded on the client side
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