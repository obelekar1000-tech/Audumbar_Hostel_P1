/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Audumbar_Hostel_P1',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  assetPrefix: '/Audumbar_Hostel_P1/',
};
export default nextConfig
