import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Set the paths that don't require the user to be signed in
const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
]);

export default clerkMiddleware(
  (auth, request) => {
    if (isPublicRoute(request)) return; // if it's a public route, do nothing
    auth().protect(); // for any other route, require auth
  },
  { debug: true },
);

export const config = {
  // Stop Middleware running on static files
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static (static files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!.*\\..*|_next).*)",
    // Match on homepage /
    "/",
    "/(api|trpc)(.*)",
  ],
};
