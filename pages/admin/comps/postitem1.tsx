/* eslint-disable */
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const PostItem = (props) => {
	const [ image, setImage ] = useState(props.image);
  const [ date, setDate ] = useState(props.date);
  const [ likes, setLikes ] = useState(props.likes);
	const [ title, setTitle ] = useState(props.title);
	const [ content, setContent ] = useState(props.content)
	const [ id, setId ] = useState(props.id);
	const [ liked, setLiked ] = useState(false)
	const deletePost = async () => {
		const url = `/api/post?id=${id}`;
		const response = await fetch(url, { method: 'DELETE' });		
		const text = await response.json();
		alert("Successfully deleted post.");
	}
	const handleLike = async () => {
		if (liked == false) {
			const request = await fetch(`/api/posts/liked?id=${id}`, { method: 'PUT' });
			const response = await request.json();
			setLiked(true);
			setLikes(likes+1)
		} else if (liked == true) {
			const request = await fetch(`/api/post/unliked?id=${id}`, { method: 'PUT' });
			const response = await request.json();
			setLiked(false);
			setLikes(likes-1)
		}
		setLiked(true);
	}
	return <>
			{content? 
			<div key={id} className='sm:w-full m-2 cursor-pointer hover:bg-gray-100 flex lg:flex-row sm:flex-col item-center justify-start border-b-2 border-black p-5 rounded-lg'>
				<Image src={image? image: "/no.webp"} height={'240px'} width={'320px'} className='rounded-xl mx-2'/>
				<div className='lg:border-l-2 border-black lg:ml-2 flex flex-col items-start justify-center'>
				<Link href={`/blogpost/posts/${id}`}>
					<div>
						<h2 className='font-bold text-3xl mx-2 mt-5'>{title}</h2>
						<p className='font-bold text-xl mx-2 mt-5'>{content? content.slice(0, 45)+"...." : ""}</p>
						<p className='font-semibold mx-[32px]'>{date}</p>
					</div>
				</Link>
					<p className='font-semibold mx-[32px] flex items-center justify-start'><img className='mr-2' onClick={(e)=>{handleLike(id)}} src={!liked? '/like.svg': '/liked.svg'} /> {likes}</p>
					<button onClick={(e)=>{deletePost(id)}} className='bg-blue-600 hover:bg-blue-700 p-2 h-fit rounded-xl mx-2 text-white'>Delete</button>
				</div>
			</div> :
			<div key={id} className='sm:w-full m-2 cursor-pointer hover:bg-gray-100 flex lg:flex-row sm:flex-col item-center justify-start border-b-2 border-black p-5 rounded-lg'>
				<Image src={image? image: "/no.webp"} height={'240px'} width={'320px'} className='rounded-xl mx-2'/>
				<div className='lg:border-l-2 border-black lg:ml-2 flex flex-col items-start justify-center'>
					<h2 className='font-bold text-xl mx-2 mt-5'>{title}</h2>
					<p className='font-semibold mx-[32px]'>{date}</p>
					<p className='font-semibold mx-[32px] flex items-center justify-start'><img className='mr-2' onClick={(e)=>{handleLike}} src={!liked? '/like.svg': '/liked.svg'} /> {likes}</p>
					<button onClick={(e)=>{deletePost()}} className='bg-blue-600 hover:bg-blue-700 p-2 h-fit rounded-xl mx-2 text-white'>Delete</button>
				</div>
			</div>}
	</>
}

export default PostItem;