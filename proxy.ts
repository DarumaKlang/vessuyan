import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function proxy(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  const pathname = request.nextUrl.pathname

  // Routes that require authentication
  const protectedRoutes = ['/dashboard', '/api/user']

  // Routes for unauthenticated users only
  const authRoutes = ['/auth/signin', '/auth/signup']

  // Check if user is authenticated
  const isAuthenticated = !!token

  // Check if accessing protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  )

  // Check if accessing auth route
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route))

  // Redirect logic
  if (isProtectedRoute && !isAuthenticated) {
    // Not logged in, redirect to signin
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  if (isAuthRoute && isAuthenticated) {
    // Already logged in, redirect to dashboard
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}
