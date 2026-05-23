const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */

const nextConfig = {
    productionBrowserSourceMaps: false,
    images: {
        domains: ["xzgweputyuhchqkbitmr.supabase.co"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.supabase.co',
            },
        ],
    },
    // experimental: {
    //     // ppr: true,
    //     // serverSourceMaps: false,
    // },
};


module.exports = withBundleAnalyzer(nextConfig)
