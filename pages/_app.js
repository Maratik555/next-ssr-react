import '../styles/global.css'
import NextNprogress from 'nextjs-progressbar'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
    </Head>
    <NextNprogress
        color="yellow"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
    />
    <Component {...pageProps} />
  </> 
}