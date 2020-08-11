import Head from 'next/head'
import Navigation from "../components/navigation";


export default function About() {
  return (
    <div className='container'>
      <Head>
        <title>Hi, this is about.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      
      <main className='main'>
        <h1 className='title'>
          Welcome to <a href="https://nextjs.org">About.!</a>
        </h1>
      </main>

      <footer className='footer'>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/vercel.svg" alt="Vercel Logo" className='logo' />
        </a>
      </footer>
    </div>
  )
}
