const mySecret = process.env['api'];
const mySecret2 = process.env['api2']
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import PostItem from './comps/postitem'
import Head from 'next/head'
import { NextSeo } from 'next-seo';
import axios from 'axios';

const Home: NextPage = (props) => {
	const [posts, setPosts] = useState(props.data.posts);
	const [news, setNews] = useState(props.news.articles)
  return <>
		<NextSeo
      title={"TechWave"}
      description="Online Tech guid, news, tech tricks and tips"
      canonical="https://techwave.sharonsandeep.repl.co"
    />
		<Head>
			<title>TechWave</title>
			<meta name="description" content="Online Tech guid, news, tech tricks and tips" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<div className='flex lg:flex-row sm:flex-col items-center justify-center'>{
			news.map((newsitem) => {
				return	<div key={newsitem.title} className='cursor-pointer bg-black text-white text-xl font-bold'>
				<img src={newsitem.urlToImage? newsitem.urlToImage: "/no.webp"} className='w-[720px] h-[480px]' />
				<a href={newsitem.url} target="_black" className='p-2 border-r-2 border-r-white flex items-center justify-start'>{newsitem.title? newsitem.title:"not title available"}</a>
			</div>
			})
		}</div>
		
		<div className='w-full flex item-center justify-center min-h-[100vh] bg-gray-100'>
			<div className='text-center bg-white'>
				<div className='mx-2 border-b-blue-600 border-b-4'>
					<h1 className='font-bold text-2xl cursor-default'>Posts</h1>
				</div>
				
				<div className='' id='latestPosts' >{
					posts.map((post)=>{
						return (
							<PostItem key={post._id} id={post._id} image={post.image} likes={post.likes} title={post.title} content={post.content? post.content: ""} date={post.date} />
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
	let r = await axios('https://newsapi.org/v2/top-headlines?country=in&category=technology&language=en&apiKey=' + mySecret2 +`&page=1&pageSize=3`);
	let news = await r.data;
	return {
	  props: {data, news}
	}
}

export default Home
