import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import PostItem from './comps/postitem'
import Head from 'next/head'
import { NextSeo } from 'next-seo';

const Home: NextPage = (props) => {
	const [posts, setPosts] = useState(props.data.posts);

  return <>
		<NextSeo
      title="TechWave"
      description="Online Tech guid, news, tech tricks and tips"
      canonical="https://techwave.sharonsandeep.repl.co"
    />
		<Head>
			<title>TechWave</title>
			<meta name="description" content="Online Tech guid, news, tech tricks and tips" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<div className='flex items-center justify-center'>{/*/
				<div className='cursor-pointer bg-black text-white text-xl font-bold'>
					<img src={news[0].urlToImage?news[0].urlToImage: "/no.webp"} className='w-[720px] h-[480px]' />
					<h1 className='p-2 border-r-2 border-r-white flex items-center justify-start'>{news[0].title?news[0].title:"not title available"} <p className='text-xl ml-2 text-black hover:text-white'>&rarr;</p></h1>
				</div>
		/*/}</div>
		
		<div className='w-full flex item-center justify-center min-h-[100vh] bg-gray-100'>
			<div className='text-center bg-white'>
				<div className='mx-2 border-b-blue-600 border-b-4'>
					<h1 className='font-bold text-2xl cursor-default'>Posts</h1>
				</div>
				
				<div className='' id='latestPosts' >{
					posts.map((post)=>{
						return (
							<PostItem key={post._id} id={post._id} image={post.image} title={post.title} content={post.content? post.content: ""} date={post.date} />
						)
					})
				}</div>
				
			</div>
		</div>
	</>
}

export async function getServerSideProps(context) {
	const a = await fetch('https://techwave.sharonsandeep.repl.co/api/post', { method: "GET" })
	const data = await a.json();

	return {
	  props: {data}
	}
}

export default Home
