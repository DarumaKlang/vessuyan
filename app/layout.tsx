import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import LineOAWidget from '@/components/LineOAWidget';
import SessionProvider from '@/components/SessionProvider';

export const metadata: Metadata = {
    title: 'Vessuyan - โหราศาสตร์ไทย ไพ่ยิปซี และศาสตร์ตัวเลข | ดูดวงออนไลน์',
    description: 'Vessuyan เว็บไซต์ดูดวงออนไลน์ ดูดวงรายวัน โหราศาสตร์ไทย ไพ่ยิปซี ศาสตร์ตัวเลข และอื่นๆ ปรึกษาวิธีการทำนายความดี ความร้าย ของการใช้ชีวิต',
    keywords: ['ดูดวง', 'โหราศาสตร์', 'ไพ่ยิปซี', 'ศาสตร์ตัวเลข', 'ทำนายดวง', 'ราศี'],
    metadataBase: new URL('https://vessuyan.com'),
    openGraph: {
        type: 'website',
        locale: 'th_TH',
        url: 'https://vessuyan.com',
        siteName: 'Vessuyan',
        title: 'Vessuyan - โหราศาสตร์ไทยและไพ่ยิปซี',
        description: 'ดูดวงออนไลน์ โหราศาสตร์ไทย ไพ่ยิปซี ศาสตร์ตัวเลข และอื่นๆ',
        images: [
            {
                url: 'https://vessuyan.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Vessuyan - โหราศาสตร์ไทยและไพ่ยิปซี',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Vessuyan - โหราศาสตร์ไทยและไพ่ยิปซี',
        description: 'ดูดวงออนไลน์ โหราศาสตร์ไทย ไพ่ยิปซี ศาสตร์ตัวเลข',
        images: ['https://vessuyan.com/og-image.png'],
    },
    alternates: {
        canonical: 'https://vessuyan.com',
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // JSON-LD Schema.org Structured Data
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Vessuyan',
        url: 'https://vessuyan.com',
        logo: 'https://vessuyan.com/logo.png',
        description: 'เว็บไซต์ดูดวงออนไลน์ โหราศาสตร์ไทย ไพ่ยิปซี และศาสตร์ตัวเลข',
        sameAs: [
            'https://www.facebook.com/vessuyan',
            'https://line.me/R/ti/p/@014rfhez',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
        },
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Vessuyan',
        url: 'https://vessuyan.com',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://vessuyan.com/search?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
        },
    };

    return (
        <html lang="th" suppressHydrationWarning>
            <head>
                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                />
                {/* Viewport for mobile */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
                {/* Apple Mobile Web App */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="theme-color" content="#0f0a1c" />
                {/* Google Analytics & Verification */}
                <link rel="canonical" href="https://vessuyan.com" />
            </head>
            <body className="antialiased">
                <SessionProvider>
                    {children}
                    <Footer />
                    <LineOAWidget lineOAId="@014rfhez" position="bottom-right" showText={true} />
                </SessionProvider>
            </body>
        </html>
    );
}