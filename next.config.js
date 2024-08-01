/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["cloud.appwrite.io", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
