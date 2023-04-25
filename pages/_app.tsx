import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './comps/navbar'
import LoadingBar from 'react-top-loading-bar'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Footer from "./comps/footer"

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

  return <>
		  <LoadingBar
        color='red'
        progress={progress}
				waitingTime={1000}
        onLoaderFinished={() => setProgress(0)}
      />
		<Navbar />
		<Component {...pageProps} />
		<Footer />
	</>
		
}

export default MyApp
