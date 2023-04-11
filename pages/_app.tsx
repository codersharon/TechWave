import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from './comps/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
		<Navbar />
		<Component {...pageProps} />
		<Head>
			<title>SharonsTech</title>
			<meta name="description" content="Tech guid, news, android tricks and tips" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	</>
		
}

export default MyApp
