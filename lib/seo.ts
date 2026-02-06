// lib/seo.ts
import { Metadata } from 'next';

export const baseUrl = 'https://vessuyan.com';

export const defaultMetadata: Metadata = {
    title: 'Vessuyan - โหราศาสตร์ไทย ไพ่ยิปซี และศาสตร์ตัวเลข | ดูดวงออนไลน์',
    description: 'Vessuyan เว็บไซต์ดูดวงออนไลน์ ดูดวงรายวัน โหราศาสตร์ไทย ไพ่ยิปซี ศาสตร์ตัวเลข ทำนายความดี ความร้าย ของการใช้ชีวิต',
    keywords: ['ดูดวง', 'โหราศาสตร์', 'ไพ่ยิปซี', 'ศาสตร์ตัวเลข', 'ทำนายดวง', 'ราศี', 'ดวงชะตา'],
    metadataBase: new URL(baseUrl),
    openGraph: {
        type: 'website',
        locale: 'th_TH',
        url: baseUrl,
        siteName: 'Vessuyan',
        title: 'Vessuyan - โหราศาสตร์ไทยและไพ่ยิปซี',
        description: 'ดูดวงออนไลน์ โหราศาสตร์ไทย ไพ่ยิปซี ศาสตร์ตัวเลข',
        images: [
            {
                url: `${baseUrl}/og-image.png`,
                width: 1200,
                height: 630,
                alt: 'Vessuyan',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Vessuyan',
        description: 'ดูดวงออนไลน์ โหราศาสตร์ไทย',
        images: [`${baseUrl}/og-image.png`],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export function createPageMetadata(
    title: string,
    description: string,
    path: string,
    image?: string
): Metadata {
    const url = `${baseUrl}${path}`;

    return {
        title: `${title} | Vessuyan`,
        description,
        openGraph: {
            title: `${title} | Vessuyan`,
            description,
            url,
            type: 'website',
            images: image
                ? [
                      {
                          url: image,
                          width: 1200,
                          height: 630,
                          alt: title,
                      },
                  ]
                : undefined,
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | Vessuyan`,
            description,
        },
        alternates: {
            canonical: url,
        },
    };
}

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vessuyan',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'เว็บไซต์ดูดวงออนไลน์ โหราศาสตร์ไทย ไพ่ยิปซี ศาสตร์ตัวเลข',
    sameAs: [
        'https://www.facebook.com/vessuyan',
        'https://line.me/R/ti/p/vessuyan',
    ],
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
    },
};

export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Vessuyan',
    url: baseUrl,
    potentialAction: {
        '@type': 'SearchAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: `${baseUrl}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
    },
};

export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

export function createArticleSchema(
    title: string,
    description: string,
    author: string,
    datePublished: string,
    image?: string
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        author: {
            '@type': 'Person',
            name: author,
        },
        datePublished,
        image: image,
    };
}
