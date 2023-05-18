import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Nav from "./comps/nav";
import HowToItem from "./comps/howtoitem1";

const HowTo = (props) => {
	const router = useRouter();
	const [ image, setImage ] = useState("");
	const [ title, setTitle ] = useState("");
	const [ content, setContent ] = useState("");
	const [ date, setDate ] = useState("");
	const [ tags, setTags ] = useState([]);
	const [ adminID, setAdminID ] = useState(props.b[0].adid);
	const [ adminPass, setAdminPass ] = useState(props.b[0].pass);
	const [ all, setAll ] = useState(props.data.howto)

	useEffect(()=>{
		if (localStorage.getItem('adminID') == null) {
			router.push('/admin/login');
		} else if (localStorage.getItem('adminID') == adminID) {
			router.push('/admin/how-to');
		}
	}, [0]);
	
	const SubmitPost = async () => {		
		const url = '/api/how-to';
		
		const response = await fetch(url, {
		    method: 'POST',
		    headers: {
		        'Content-Type': 'application/json',
		    },
		    body: JSON.stringify({
					title: title,
					content: content,
					image: image,
					date: date,
					tags: tags,
				}),
		});
		
		const text = await response.json();
		alert('Post maded in succesfully!');
	};
	
  return (
    <>
			<Nav />
			<div className='mt-5 flex flex-col'>
				<input type='file' onChange={(e)=>{ const reader = new FileReader(); reader.addEventListener('load', () => { setImage(reader.result); }); reader.readAsDataURL(e.target.files[0])}} id='Image' className='m-2 w-fit hidden' />
				<input type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}} id='PostHeading' className='m-2 w-fit bg-black text-white mx-5 rounded-lg p-2' placeholder='Title' />
				<textarea type='text' value={content} onChange={(e)=>{setContent(e.target.value)}} id='postdate' className='m-2 w-fit bg-black text-white mx-5 rounded-lg p-2' placeholder='Content'></textarea>
				<input type='text' value={date} onChange={(e)=>{setDate(e.target.value)}} id='postdate' className='m-2 w-fit bg-black text-white mx-5 rounded-lg p-2' placeholder='Date'  />
				<input type='text' value={tags} onChange={(e)=>{setTags(e.target.value)}} id='posttags' className='m-2 w-fit bg-black text-white mx-5 rounded-lg p-2' placeholder='Tags'  />
				<label htmlFor='Image' className='bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-xl m-4 w-fit'>Upload Image</label>
				<hr />
				<button onClick={SubmitPost} id='postSubmitButton' className='m-4 w-fit bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-xl' >Post</button>
			</div>

			<div className='flex flex-col items-center justify-center'>
			<h1 className='mx-2 my-2 text-3xl border-b-2 border-black w-fit'>Posts</h1>
				<div id='latestPosts' >{
					all.map((post)=>{
						return (
							<HowToItem key={post._id} id={post._id} likes={post.likes} image={post.image} title={post.title} content={post.content} date={post.date} />
						)
					})
				}</div>
				</div>
		</>
  )
}

export async function getServerSideProps(context) {
	const a = await fetch('https://tech-vave.vercel.app/api/admin', { method: "GET" })
	const b = await a.json();
	const c = await fetch('https://tech-vave.vercel.app/api/how-to', { method: "GET" })
	const data = await c.json();

	return {
	  props: {b, data}
	}
}
export default HowTo
