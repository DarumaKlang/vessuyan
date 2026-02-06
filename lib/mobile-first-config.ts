/**
 * Mobile-First Design Configuration
 * 
 * This file contains responsive design breakpoints and mobile-first utilities
 * for the Vessuyan application.
 */

export const BREAKPOINTS = {
    xs: '0px',      // Extra small (mobile)
    sm: '640px',    // Small (landscape mobile)
    md: '768px',    // Medium (tablet)
    lg: '1024px',   // Large (desktop)
    xl: '1280px',   // Extra large (wide desktop)
    '2xl': '1536px' // 2XL (ultra-wide)
} as const

export const MOBILE_FIRST_QUERIES = {
    // Mobile (xs)
    xs: '@media (min-width: 0px)',
    // Landscape mobile (sm)
    sm: '@media (min-width: 640px)',
    // Tablet (md)
    md: '@media (min-width: 768px)',
    // Desktop (lg)
    lg: '@media (min-width: 1024px)',
    // Large desktop (xl)
    xl: '@media (min-width: 1280px)',
    // Ultra-wide (2xl)
    '2xl': '@media (min-width: 1536px)',
} as const

/**
 * Responsive Typography Scales
 * Uses clamp() for fluid scaling between min and max sizes
 */
export const RESPONSIVE_FONT_SIZES = {
    h1: 'clamp(1.5rem, 5vw, 3.5rem)',    // Mobile 24px → Desktop 56px
    h2: 'clamp(1.25rem, 4vw, 2.5rem)',   // Mobile 20px → Desktop 40px
    h3: 'clamp(1.1rem, 3vw, 1.875rem)',  // Mobile 18px → Desktop 30px
    h4: 'clamp(1rem, 2vw, 1.5rem)',      // Mobile 16px → Desktop 24px
    body: 'clamp(0.875rem, 2vw, 1rem)',  // Mobile 14px → Desktop 16px
    small: 'clamp(0.75rem, 1.5vw, 0.875rem)', // Mobile 12px → Desktop 14px
} as const

/**
 * Touch Target Sizes
 * iOS recommends minimum 44x44px touch targets
 */
export const TOUCH_TARGET_MIN = '44px'

/**
 * Safe Area Insets for notched devices
 */
export const SAFE_AREA_INSETS = {
    top: 'env(safe-area-inset-top)',
    right: 'env(safe-area-inset-right)',
    bottom: 'env(safe-area-inset-bottom)',
    left: 'env(safe-area-inset-left)',
} as const

/**
 * Mobile-first spacing scale
 */
export const SPACING = {
    xs: '0.25rem',  // 4px
    sm: '0.5rem',   // 8px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '3rem',  // 48px
    '3xl': '4rem',  // 64px
} as const

/**
 * Container queries for component-level responsive design
 */
export const CONTAINER_QUERIES = {
    sm: '@container (min-width: 200px)',
    md: '@container (min-width: 400px)',
    lg: '@container (min-width: 600px)',
    xl: '@container (min-width: 800px)',
} as const

/**
 * Helper function for mobile-first responsive values
 * Usage: const fontSize = mobileFirst({ xs: '14px', md: '16px', lg: '18px' })
 */
export function mobileFirst<T extends Record<string, string | number>>(
    values: T
): string {
    const breakpointOrder = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

    return breakpointOrder
        .filter((bp) => bp in values)
        .map((bp) => {
            const value = values[bp as keyof T]
            const query = MOBILE_FIRST_QUERIES[bp as keyof typeof MOBILE_FIRST_QUERIES]
            return `${query} { font-size: ${value}; }`
        })
        .join('')
}

export default {
    BREAKPOINTS,
    MOBILE_FIRST_QUERIES,
    RESPONSIVE_FONT_SIZES,
    TOUCH_TARGET_MIN,
    SAFE_AREA_INSETS,
    SPACING,
    CONTAINER_QUERIES,
    mobileFirst,
}
