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
            scope: 'user-read-email user-follow-read'
        })
    ],
    debug: false
})