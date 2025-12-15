/** @type {import('next').NextConfig} */
const nextConfig = {
  // 基础配置
  turbopack: {
    // 明确指定项目根目录
    root: process.cwd(),
  },
  reactStrictMode: true,
  
  // devIndicators 应该直接放在根配置中，而不是 experimental 里
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  
  // 如果需要启用 Turbopack
  experimental: {
    // 正确的位置 - 只在 experimental 中放实验性功能
    // turbopack: {
    //   // 如果需要配置 Turbopack，可以在这里添加
    // }
  },
  
  // 其他配置
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // 静态导出配置（如果需要）
  output: 'standalone',
  
  // 图片优化配置
  images: {
    domains: [], // 添加允许的图片域名
    unoptimized: false,
  },
};

module.exports = nextConfig;