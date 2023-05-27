import React from 'react'
// import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const PostItem = (props: any) => {
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
	return <>
			{content? 
			<div key={id} className='sm:w-full m-2 cursor-pointe flex lg:flex-row sm:flex-col item-center justify-start border-b-2 border-black p-5 rounded-lg'>
				<img src={image? image: "/no.webp"} height={'240px'} width={'320px'} className='rounded-xl mx-2'/>
				<div className='lg:border-l-2 border-white lg:ml-2 flex flex-col items-start justify-center'>
				<div className='flex flex-col items-start justify-center'>
					<div className='flex flex-col items-start justify-center'>
						<Link href={`/blogpost/posts/${id}`}>
							<div>
								<h2 className='font-bold text-3xl mx-2 mt-5'>{title}</h2>
								<p className='font-bold text-xl mx-2 mt-5'>{content? content.slice(0, 45)+"...." : ""}</p>
								<p className='font-semibold mx-[32px]'>{date}</p>
							</div>
						</Link>
						<p className='font-semibold mx-[32px] flex items-center justify-start'><img className='mr-2 bg-gray-600 rounded-lg' src={'/like.svg'} /> {likes}</p>
						<button onClick={(e)=>{deletePost(id)}} className='mt-2 bg-blue-600 hover:bg-blue-700 p-2 h-fit rounded-xl mx-2 text-white'>Delete</button>
					</div>
					</div>
				</div>
			</div> :
			<div key={id} className='sm:w-full m-2 cursor-pointer flex lg:flex-row sm:flex-col item-center justify-start border-b-2 border-black p-5 rounded-lg'>
				<img src={image? image: "/no.webp"} height={'240px'} width={'320px'} className='rounded-xl mx-2'/>
				<div className='flex flex-col items-start justify-center'>
					<div className='lg:border-l-2 border-white lg:ml-2 flex flex-col items-start justify-center'>
						<h2 className='font-bold text-xl mx-2 mt-5'>{title}</h2>
						<p className='font-semibold mx-[32px]'>{date}</p>
					</div>
					<p className='font-semibold mx-[32px] flex items-center justify-start'><img className='mr-2 bg-gray-600 rounded-lg' src={'like.svg'} /> {likes}</p>
					<button onClick={(e)=>{deletePost()}} className='mt-2 bg-blue-600 hover:bg-blue-700 p-2 h-fit rounded-xl mx-2 text-white'>Delete</button>
				</div>
			</div>}
	</>
}

export default PostItem;