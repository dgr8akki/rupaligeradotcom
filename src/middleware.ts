import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /work routes
  if (pathname.startsWith("/work")) {
    const isAuthenticated = request.cookies.get("work_access")?.value === "granted";

    if (!isAuthenticated) {
      // Redirect to unlock page
      const url = request.nextUrl.clone();
      url.pathname = "/unlock";
      url.searchParams.set("redirect", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/work/:path*",
};
