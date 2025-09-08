/** @type {import('next').NextConfig} */
const nextConfig = {
    // Other configurations...
    allowedDevOrigins: [
        'http://localhost:3002',
        'http://192.168.1.163:3002',
    ],
    images: {
        qualities: [50, 75, 80, 85, 90, 95, 100],
    },
};

module.exports = nextConfig;