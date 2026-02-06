import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api', '/_next', '/*.json$'],
                crawlDelay: 1,
            },
            {
                userAgent: 'AdsBot-Google',
                allow: '/',
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                crawlDelay: 0,
            },
        ],
        sitemap: 'https://vessuyan.com/sitemap.xml',
    };
}
