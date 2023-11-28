/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [
      ["@swc-jotai/debug-label", {}],
      ["@swc-jotai/react-refresh", {}],
    ],
  },
};

module.exports = nextConfig;
