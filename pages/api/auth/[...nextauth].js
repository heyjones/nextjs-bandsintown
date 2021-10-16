import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import SpotifyProvider from 'next-auth/providers/spotify'

export default NextAuth({
    providers: [
        AppleProvider({
            clientId: process.env.APPLE_ID,
            clientSecret: process.env.APPLE_KEY_SECRET
        }),
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
            authorization: {
                params: {
                    scope: 'user-read-email user-follow-read'
                }
            }
        })
    ],
    callbacks: {
        async session({ session, token, user }) {
          // Send properties to the client, like an access_token from a provider.
          session.accessToken = token.accessToken
          return session
        },
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        }
    },
    debug: false
})