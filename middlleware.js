import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { decrypt } from "./app/lib/session";

const protectedRoutes = ["/Dashboard"];
const publicRoutes = ["/Login"];

export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookieStore = cookies();
  const sessionCookie = cookieStore.get("session")?.value;

  let session = null;
  if (sessionCookie) {
    session = await decrypt(sessionCookie);
  }

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/Login", req.nextUrl));
  }

  if (isPublicRoute && session?.userId) {
    return NextResponse.redirect(new URL("/Dashboard", req.nextUrl));
  }

  return NextResponse.next();
}
