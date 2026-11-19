/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // `next dev` rewrites this folder while it runs. Sharing it with
  // `next build` makes the build lose the `/` page module.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
   sassOptions: {
    includePaths: ["styles"],
  }
}

module.exports = nextConfig
