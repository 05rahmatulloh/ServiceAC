/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Abaikan pemeriksaan ESLint selama proses build
  },
};

export default nextConfig;
