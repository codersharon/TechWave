// import Image from 'next/image'
import { useEffect, useState } from 'react'
import HowToItem from './comps/howtoitem'
import Head from 'next/head'
import { NextSeo } from 'next-seo';

const HowTo = (props) => {
	const [howto, setHowto] = useState(props.data.howto);
	
	return <>
		<NextSeo
      title="TechWave || How-To"
      canonical="https://tec-vave.vercel.app/how-to"
    />
		<Head><title>TechWave || How-To</title></Head>
		<div className='flex item-center justify-center w-full min-h-[100vh] bg-gray-100'>
			<div className='w-full text-center bg-white'>
				<div className='mx-2 border-b-blue-600 border-b-4'>
					<h1 className='font-bold text-2xl cursor-default'>Latest How To</h1>
				</div>

				<div>{
					howto.map((item)=>{
						return(
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
    props: {data}
  }
}

export default HowTo