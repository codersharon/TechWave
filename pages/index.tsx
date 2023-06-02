const mySecret = process.env['api'];
const mySecret2 = process.env['api2']
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import PostItem from './comps/postitem'
import axios from 'axios';
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { useRouter } from "next/router"

const Home: NextPage = (props) => {
	const [posts, setPosts] = useState(props.data.posts);
	const [news, setNews] = useState(props.news.articles)
	const router = useRouter();
	
	return <div className='w-full min-h-[100vh] bg-black'>
		<NextSeo
			title={"TechWave"}
			description="Online Tech guid, news, tech tricks and tips"
			canonical="https://tech-vave.vercel.app/"
		/>

		<Head>
			<title>TechWave</title>
			<meta name="description" content="Online Tech guid, news, tech tricks and tips" />
			<meta property="og:image" content="https://tech-vave.vercel.app/favicon.ico" />
			<meta property="og:url" content="https://tech-vave.vercel.app/" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className='flex lg:flex-row sm:flex-col items-center justify-center bg-black'>{
			news.map((newsitem) => {
				return <div key={newsitem.title} className='lg:hover:blur cursor-pointer bg-black text-white text-xl font-bold'>
					<div className='sm:flex items-center justify-start lg:hidden mx-5 border-b-2 border-gray-600'><h3 className=' my-2 text-sm'>{newsitem.author} .</h3> <p className='text-lg text-blue-500 underline'>{newsitem.source.id?newsitem.source.id : newsitem.source.name}</p></div>
					<img src={newsitem.urlToImage ? newsitem.urlToImage : "/no.webp"} className='lg:w-[720px] lg:h-[480px] sm:px-5 lg:px-0' />
					<a href={newsitem.url} target="_blank" rel="noreferrer" className='sm:mx-5 p-2 md:border-r-2 border-white flex items-center justify-start'>{newsitem.title ? newsitem.title : "not title available"}</a>
				</div>
			})
		}</div>

		<div className='w-full flex item-center justify-center min-h-[100vh]'>
			<div className='text-center'>
				<div className='mx-2 border-b-blue-600 border-b-4'>
					<h1 className='font-bold text-2xl cursor-default'>Posts</h1>
				</div>

				<div className='' id='latestPosts' >{
					posts.map((post) => {
						return (
							<PostItem key={post._id} id={post._id} image={post.image} likes={post.likes} title={post.title} content={post.content ? post.content : ""} date={post.date} />
						)
					})
				}</div>

			</div>
		</div>
	</div>
}

export async function getServerSideProps(context) {
	const a = await fetch('https://tech-vave.vercel.app/api/post', { method: "GET" })
	const data = await a.json();
	let r = await axios('https://newsapi.org/v2/top-headlines?country=in&category=technology&language=en&apiKey=' + mySecret2 + `&page=1&pageSize=3`);
	let news = await r.data;
	return {
		props: { data, news }
	}
}

export default Home


// let r = await axios('https://newsapi.org/v2/top-headlines?country=in&category=technology&language=en&apiKey=' + mySecret2 +`&page=1&pageSize=3`);