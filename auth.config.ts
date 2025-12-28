import type { NextAuthConfig } from 'next-auth';
// import { signIn } from 'next-auth/react';
// import { usePathname } from 'next/navigation';

export const authConfig = {
  pages: {
    signIn: 'signIn',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isSignedIn = !!auth?.user;
      const isOnBlog = nextUrl.pathname.startsWith('/blogs');
      if (isOnBlog) {
        if (isSignedIn) return true;
        return false;
      } else if (isSignedIn) {
        return Response.redirect(new URL('/blogs', nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
