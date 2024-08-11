import NextAuth, { User } from 'next-auth'
import { authOptions } from '@/app/api/auth/option'

declare module 'next-auth' {
  interface User {
    email: string;
    first_name: string;
    last_name: string;
    bio: string;
    profile_picture_url: string;
    linkedin_profile_url: string;
    github_profile_url: string;
  }

  interface Session {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: User;
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
