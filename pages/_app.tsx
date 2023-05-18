import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './comps/navbar'
import LoadingBar from 'react-top-loading-bar'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Footer from "./comps/footer"
import LoadingLogo from './comps/loadinglogo'
import { NextSeo } from 'next-seo';
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState(0)
	const router = useRouter()

	useEffect(()=>{
		router.events.on('routeChangeStart', ()=>{
			setProgress(40);
		});

		router.events.on('routeChangeComplete', ()=>{
			setProgress(400);
		});
	});

  return <div className='bg-black text-white'>
		<NextSeo
      title={"TechWave"}
      description="Online Tech guid, news, tech tricks and tips"
      canonical="https://tech-vave.vercel.app/"
    />

		<Head>
			<title>TechWave</title>
			<meta name="description" content="Online Tech guid, news, tech tricks and tips" />
			<meta property="og:image" content="https://tech-vave.vercel.app/favicon.ico" />
			<meta property="og:url" content={`https://tech-vave.vercel.app${router.pathname}`} />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		  <LoadingBar
        color='red'
        progress={progress}
				waitingTime={1000}
        onLoaderFinished={() => setProgress(0)}
      />
			<LoadingLogo />
			<Navbar />
			<Component {...pageProps} />
      <Analytics />
			<Footer />
	</div>
		
}

export default MyApp
