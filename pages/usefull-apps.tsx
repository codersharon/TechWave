import { useEffect, useState } from 'react';
import AppsItem from './comps/appsitem';
import Head from 'next/head'
import { NextSeo } from 'next-seo';

const Apps = (props) => {
	const [apps, setApps] = useState(props.data.apps);
	
  return <>
		<NextSeo
      title="TechWave || Usefull Apps"
      canonical="https://tech-vave.vercel.app/usefull-apps"
    />
		<Head>
			<title>TechWave || Usefull Apps</title>
		</Head>
		<div className='text-white  bg-black flex item-center justify-center lg:w-full sm:w-fit min-h-[100vh] bg-gray-100'>
			<div className='sm:w-fit lg:w-full text-center bg-black'>
				<div className='mx-2 border-b-blue-600 border-b-4'>
					<h1 className='font-bold text-2xl cursor-default'>Usefull Apss</h1>
				</div>

				<div className="sm:w-fit lg:w-full sm:px-14">{
					apps.map((item)=>{
						return(
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
    props: {data}
  }
}

export default Apps