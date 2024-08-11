import { NextAuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getDictionary } from '@/locales/dictionary'

export const authOptions: NextAuthOptions = {
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        return { ...token, user: { ...user as User } }
      }
      return token
    },
    async session({ session, token }) {
      return { ...session, user: token.user }
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null

        try {
          const response = await fetch('http://localhost:8000/login/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
              username: credentials.username,
              password: credentials.password,
            }),
          })
          const user = await response.json()

          if (response.ok) {
            return user
          }
          const dict = await getDictionary()
          throw new Error(dict.login.message.auth_failed)
        } catch (error) {
          console.error('Authentication log error:', error)
          throw new Error('Authentication failed')
        }
      },
    }),
  ],
}
