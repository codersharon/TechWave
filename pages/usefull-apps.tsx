import { useEffect, useState } from 'react';
import AppsItem from './comps/appsitem';
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { useRouter } from 'next/router'
const Apps = (props) => {
	const [apps, setApps] = useState(props.data.apps);
	const router = useRouter()
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
			<meta property="og:url" content={`https://tech-vave.vercel.app/usefull-apps`} />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className='text-white  bg-black flex item-center justify-center lg:w-full sm:w-fit min-h-[100vh] bg-gray-100'>
			<div className='sm:w-fit lg:w-full text-center bg-black'>
				<div className='mx-2 border-b-blue-600 border-b-4'>
					<h1 className='font-bold text-2xl cursor-default'>Usefull Apss</h1>
				</div>

				<div className="sm:w-fit lg:w-full sm:px-14">{
					apps.map((item) => {
						return (
							<AppsItem key={item._id} id={item._id} content={item.content} title={item.title} image={item.image} link={item.link} />
						)
					})
				}</div>

			</div>
		</div>
	</>
}

export async function getServerSideProps(context) {
	const r = await fetch(`https://tech-vave.vercel.app/api/apps`, { method: "GET" });
	const data = await r.json();
	return {
		props: { data }
	}
}

export default Apps