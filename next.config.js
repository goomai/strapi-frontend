/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["goom-strapi-images.s3.ap-south-1.amazonaws.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/python-compiler-playground",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
