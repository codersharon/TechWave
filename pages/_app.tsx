import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './comps/navbar'
import LoadingBar from 'react-top-loading-bar'
import React, { useState, useEffect } from 'react'
import Footer from "./comps/footer"
import LoadingLogo from './comps/loadinglogo'
import { useRouter } from "next/router"
import NavigationBar from "./comps/navigationbar"


function MyApp({ Component, pageProps }: AppProps) {
	const [progress, setProgress] = useState(0)
	const router = useRouter();
	
	useEffect(() => {
		router.events.on('routeChangeStart', () => {
			setProgress(40);
		});

		router.events.on('routeChangeComplete', () => {
			setProgress(400);
		});
	});

	return <div className='bg-black text-white'>
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
		<NavigationBar />
	</div>

}

export default MyApp
