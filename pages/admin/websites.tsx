/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Nav from "./comps/nav";
import WebsiteItem from "./comps/websiteitem1";
import { NextSeo } from 'next-seo'
import Head from 'next/head'

const Websites = (props) => {
	const router = useRouter();
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [link, setLink] = useState("");
	const [tags, setTags] = useState([]);
	const [adminID, setAdminID] = useState(props.b[0].adid);
	const [adminPass, setAdminPass] = useState(props.b[0].pass);
	const [all, setAll] = useState(props.data.websites)

	useEffect(() => {
		if (localStorage.getItem('adminID') == null) {
			router.push('/admin/login');
		} else if (localStorage.getItem('adminID') == adminID) {
			router.push('/admin/websites');
		}
	}, [0]);

	const SubmitPost = async () => {
		const url = '/api/website';

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: title,
				content: content,
				link: link,
				tags: tags,
			}),
		});

		const text = await response.json();
		alert('Post maded in succesfully!');
	};

	return (
		<>

			<NextSeo
				title={"TechWave"}
				description="Online Tech guid, news, tech tricks and tips"
				canonical="https://tech-vave.vercel.app/"
			/>

			<Head>
				<title>TechWave</title>
				<meta name="description" content="Online Tech guid, news, tech tricks and tips" />
				<meta property="og:image" content="https://tech-vave.vercel.app/favicon.ico" />
				<meta property="og:url" content="https://tech-vave.vercel.appadmin/websites" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Nav />
			<div className='mt-5 flex flex-col'>
				<input type='text' value={title} onChange={(e) => { setTitle(e.target.value) }} id='PostHeading' className='m-2 w-fit bg-black text-white mx-5 rounded-lg p-2' placeholder='Title' />
				<textarea type='text' value={content} onChange={(e) => { setContent(e.target.value) }} id='postdate' className='m-2 w-fit bg-black text-white mx-5 rounded-lg p-2' placeholder='Content'></textarea>
				<input type='text' value={link} onChange={(e) => { setLink(e.target.value) }} id='postdate' className='m-2 w-fit bg-black text-white mx-5 rounded-lg p-2' placeholder='Link' />
				<input type='text' value={tags} onChange={(e) => { setTags(e.target.value) }} id='posttags' className='m-2 w-fit bg-black text-white mx-5 rounded-lg p-2' placeholder='Tags' />
				<hr />
				<button onClick={SubmitPost} id='postSubmitButton' className='m-4 w-fit bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-xl' >Post</button>
			</div>

			<div className='flex flex-col items-center justify-center'>
				<h1 className='mx-2 my-2 text-3xl border-b-2 border-black w-fit'>Posts</h1>
				<div id='latestPosts' >{
					all.map((post) => {
						return (
							<WebsiteItem key={post._id} id={post._id} image={post.image} title={post.title} content={post.content} date={post.date} />
						)
					})
				}</div>
			</div>
		</>
	)
}

export async function getServerSideProps(context) {
	const a = await fetch('https://tech-vave.vercel.app/api/admin', { method: "POST" })
	const b = await a.json();
	const c = await fetch('https://tech-vave.vercel.app/api/website', { method: "GET" })
	const data = await c.json();
	return {
		props: { b, data }
	}
}
export default Websites
