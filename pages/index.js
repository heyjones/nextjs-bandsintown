import Head from 'next/head'
import Auth from '../components/auth'

export async function getServerSideProps(context) {
  // TODO: Get this to work? { error: { status: 401, message: 'No token provided' } }
  const res = await fetch('https://api.spotify.com/v1/me')
  const data = await res.json()
  return {
    props: { data },
  }
}

export default function Home({ data }) {
  console.log(data)
  return (
    <>
      <Head>
        <title>Bandsintown</title>
        <meta name="description" content="Connect your Apple Music or Spotify account to see which bands are in your town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          Bandsintown
        </h1>
        <Auth />
      </main>
    </>
  )
}
