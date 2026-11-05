/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  sassOptions: {
    includePaths: ["styles"],
  },
}

module.exports = nextConfig
