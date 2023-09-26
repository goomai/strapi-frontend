/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["goom-strapi-images.s3.ap-south-1.amazonaws.com"],
//   },
//   async redirects() {
//     return [
//       {
//         source: "/",
//         destination: "/homepage",
//         permanent: false,
//       },
//     ];
//   },
// };

// module.exports = nextConfig;
