// import Image from 'next/image'
import { useEffect, useState } from 'react'
import HowToItem from './comps/howtoitem'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

const HowTo = (props) => {
	const [howto, setHowto] = useState(props.data.howto);

	return <>

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

		<div className='text-white bg-black flex item-center justify-center w-full min-h-[100vh] bg-gray-100'>
			<div className='w-full text-center bg-black'>
				<div className='mx-2 border-b-blue-600 border-b-4'>
					<h1 className='font-bold text-2xl cursor-default'>Latest How To</h1>
				</div>

				<div>{
					howto.map((item) => {
						return (
							<HowToItem key={item._id} id={item._id} content={item.content} likes={item.likes} title={item.title} image={item.image} date={item.date} />
						)
					})
				}</div>
			</div>
		</div>
	</>
}

export async function getServerSideProps(context) {
	const a = await fetch('https://tech-vave.vercel.app/api/how-to', { method: "GET" })
	const data = await a.json();
	return {
		props: { data }
	}
}

export default HowTo