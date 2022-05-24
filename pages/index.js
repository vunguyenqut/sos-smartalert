import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Smart Alert by S.O.S team" />
        <p className="description">
          Demo project by S.O.S team via Krystal's Hackamoon 
        </p>
      </main>

      <Footer />
    </div>
  )
}
