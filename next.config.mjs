/** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
// }
const nextConfig = {
  output: 'export',                    // static export
  basePath: '/Audumbar_Hostel_P1',     // repo name — EXACT match
  assetPrefix: '/Audumbar_Hostel_P1/', // ensures _next static and assets are requested under repo path
  trailingSlash: true,                 // helpful for GitHub Pages
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}
export default nextConfig
