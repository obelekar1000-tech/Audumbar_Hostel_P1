/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static export
  // basePath: '/Audumbar_Hostel_P1',
  // assetPrefix: '/Audumbar_Hostel_P1/',
  trailingSlash: true,   // ✅ important for GitHub Pages
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
export default nextConfig;
