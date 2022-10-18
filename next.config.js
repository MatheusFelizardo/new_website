/** @type {import('next').NextConfig} */
const withReactSvg = require('next-react-svg')
const path = require('path')

const nextConfig = {
  include: path.resolve(__dirname, 'public/images'),
  reactStrictMode: true,
  // This is the property you need to add
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  webpack(config, options) {
    return config
  }
};


module.exports = withReactSvg(nextConfig);