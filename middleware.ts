import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken");
  const requestPath = request.nextUrl.pathname;
  const isLoginPage = requestPath === "/login";

  if (accessToken) {
    // Avoid redirect loop: Only redirect to `/` if user is on `/login`.
    if (isLoginPage) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  } else if (!isLoginPage) {
    // Redirect unauthenticated users only if they aren't already on `/login`
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|interview-confirmation).*)",
  ],
};
