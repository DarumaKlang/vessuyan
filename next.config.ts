/** @type {import('next').NextConfig} */
const nextConfig = {
    // Other configurations...
    allowedDevOrigins: [
        'http://localhost:3002',
        'http://192.168.1.163:3002',
    ]
};

module.exports = nextConfig;