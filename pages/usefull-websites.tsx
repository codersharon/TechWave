// import Image from 'next/image'
import { useState, useEffect } from 'react'
import WebsiteItem from './comps/websiteitem'
import Head from 'next/head'
import { NextSeo } from 'next-seo';

const Websites = (props) => {
	const [websites, setWebsites] = useState(props.data.websites);
	
	return <>
		<NextSeo
      title="TechWave || Usefull Websites"
      canonical="https://tech-vave.vercel.app/usefull-websites"
    />
		<Head><title>TechWave || Usefull Websites</title></Head>
		<div className='text-white flex item-center justify-center w-full w-fit min-h-[100vh]'>
			<div className='sm:w-fit md:w-full text-center'>
				<div className='w-full mx-2 border-b-blue-600 border-b-4'>
					<h1 className='font-bold text-2xl cursor-default'>Usefull Websites</h1>
				</div>
				
				<div>{
					websites.map((item)=>{
						return(
							<WebsiteItem key={item._id} id={item._id} link={item.link} content={item.content} title={item.title} />
							)
					})
				}</div>
				
			</div>
		</div>
	</>
}

export async function getServerSideProps(context) {
	const r = await fetch(`https://tech-vave.vercel.app/api/website`, { method: "GET" });
	const data = await r.json();
  return {
    props: {data}
  }
}

export default Websites