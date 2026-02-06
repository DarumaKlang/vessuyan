/** @type {import('next').NextConfig} */
const nextConfig = {
    // Image optimization
    images: {
        qualities: [50, 75, 80, 85, 90, 95, 100],
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },

    // SEO Headers
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'geolocation=(), microphone=(), camera=()',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
                    },
                ],
            },
        ];
    },

    // Rewrites for clean URLs
    async rewrites() {
        return {
            beforeFiles: [
                // Rewrite sitemap.xml
                {
                    source: '/sitemap.xml',
                    destination: '/api/sitemap',
                },
            ],
        };
    },

    // Performance optimization
    compress: true,
    poweredByHeader: false,
    productionBrowserSourceMaps: false,

    // Allow dev origins for development
    allowedDevOrigins: [
        'http://localhost:3002',
        'http://192.168.1.163:3002',
    ],
};

module.exports = nextConfig;