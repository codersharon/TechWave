import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import Head from 'next/head';
import Nav from "./comps/nav";
import PostItem from "./comps/postitem1";

const Admin = (props: any) => {
	const router = useRouter();
	const [ all, setAll ] = useState(props.data.posts)
	const [ postDate, setPostDate ] = useState("");
	const [ postTags, setPostTags ] = useState("");
	const [ postImage, setPostImage ] = useState("");
	const [ postTitle, setPostTitle ] = useState("");
	const [ postContent, setPostContent ] = useState("");
	const [ adminID, setAdminID ] = useState(props.b[0].adid);
	const [ adminPass, setAdminPass ] = useState(props.b[0].pass);
	
	useEffect(()=>{
		if (localStorage.getItem('adminID') == null) {
			router.push('/admin/login');
		} else if (localStorage.getItem('adminID') == adminID) {
			router.push('/admin/admin');
		} 
	}, [0]);
	
	const SubmitPost = async () => {		
		const url = '/api/post';
		
		const response = await fetch(url, {
		    method: 'POST',
		    headers: {
		        'Content-Type': 'application/json',
		    },
		    body: JSON.stringify({
				  title: postTitle,
				  image: postImage,
					content: postContent,
				  date: postDate,
				  tags: postTags,
				}),
		});		
		const text = await response.json();
		alert('Post maded in succesfully!');
	};

  return (
    <>
			<Nav />
			<div className='mt-5 flex flex-col'>
				<input type='file' onChange={(e)=>{ const reader = new FileReader(); reader.addEventListener('load', () => { if (reader.result !== null) { setPostImage(`${reader.result}`) } }); reader.readAsDataURL(e.target.files[0])}} id='postImage' className='m-2 w-fit hidden' />
				<input type='text' value={postTitle} onChange={(e)=>{setPostTitle(e.target.value)}} id='PostHeading' className='m-2 w-fit bg-black text-white mx-5 rounded-lg p-2' placeholder='PostHeading' /> 
				<textarea type='text' value={postContent} onChange={(e)=>{setPostContent(e.target.value)}} id='postcontent' className='m-2 w-fit bg-black text-white mx-5 rounded-lg p-2' placeholder='PostContent'  />
				<input type='text' value={postDate} onChange={(e)=>{setPostDate(e.target.value)}} id='postdate' className='m-2 w-fit bg-black text-white mx-5 rounded-lg p-2' placeholder='PostDate'  />
				<input type='text' value={postTags} onChange={(e)=>{setPostTags(e.target.value)}} id='posttags' className='m-2 w-fit bg-black text-white mx-5 rounded-lg p-2' placeholder='posttags'  />
				<label htmlFor='postImage' className='bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-xl m-4 w-fit '>Upload Image</label>
				<hr />
				<button onClick={SubmitPost} id='postSubmitButton' className='m-4 w-fit bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-xl' >Post</button>
			</div>
			<hr />
			<div className='flex flex-col items-center justify-center'>
			<h1 className='mx-2 my-2 text-3xl border-b-2 border-black w-fit'>Posts</h1>
				<div id='latestPosts' >{
					all.map((post)=>{
						return <>
							<PostItem key={post._id} id={post._id} likes={post.likes} image={post.image? post.image : "/no.webp"} title={post.title} content={post.content} date={post.date} />
						</>
					})
				}</div>
				</div>
		</>
  )
}

export async function getServerSideProps(context) {
	const a = await fetch('https://tech-vave.vercel.app/api/admin', { method: "GET" })
	const b = await a.json();
	const c = await fetch('https://tech-vave.vercel.app/api/post', { method: "GET" })
	const data = await c.json()
	return {
	  props: {b, data}
	}
}
export default Admin
