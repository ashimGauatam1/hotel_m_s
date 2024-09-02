import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;
  if (
    token &&
    (url.pathname.startsWith("/sign-in") ||
     url.pathname.startsWith("/sign-up") ||
     url.pathname.startsWith("/verify")
    
    )
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  if(!token && url.pathname.startsWith("/dashboard")||
  url.pathname.startsWith("/staffpage")
) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  if (token && token.role !== "staff" && url.pathname.startsWith("/staffpage")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (token && token.role === "staff" && url.pathname.startsWith("/staffpage")) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/sign-in", "/sign-up", "/verify", "/"],
};