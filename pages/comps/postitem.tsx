import React from 'react'
// import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const PostItem = (props: any) => {
	const [ image, setImage ] = useState(props.image? props.image : "/no.webp");
	const [ title, setTitle ] = useState(props.title);
	const [ content, setContent ] = useState(props.content? props.content : "");
  const [ date, setDate ] = useState(props.date);
	const [ id, setId ] = useState(props.id);
	const [ likes, setLikes ] = useState(props.likes);
	const [ liked, setLiked ] = useState(false)
	const handleLike = async () => {
		if (liked == false) {
			const request = await fetch(`/api/posts/liked?id=${id}`, { method: 'PUT' });
			const response = await request.json();
			setLiked(true);
			setLikes(likes+1)
		} else if (liked == true) {
			const request = await fetch(`/api/posts/unliked?id=${id}`, { method: 'PUT' });
			const response = await request.json();
			setLiked(false);
			setLikes(likes-1)
		}
	}
	return <>
		{content? 
			<div className='bg-black sm:w-full m-2 cursor-pointer flex lg:flex-row sm:flex-col item-center justify-start border-b-2 border-white p-5 rounded-lg'>
				<img src={image? image: "/no.webp"} height={'240px'} width={'320px'} className='rounded-xl mx-2'/>
				<div className='flex flex-col items-start justify-center'>
					<Link href={`/blogpost/posts/${id}`}> 
						<div className='lg:border-l-2 border-white lg:ml-2 flex flex-col items-start justify-center'>
							<h2 className='font-bold text-3xl mx-2 mt-5'>{title}</h2>
							<p className='font-bold text-xl mx-2 mt-5'>{content? content.slice(0, 45)+"...." : ""}</p>
							<p className='mt-2 font-semibold mx-[32px]'>{date}</p>
						</div>
					</Link>
					<p className='font-semibold mx-[32px] flex items-center justify-start'><img className='mr-2 bg-gray-600 rounded-lg' onClick={handleLike} src={!liked? '/like.svg': '/liked.svg'} /> {likes}</p>
				</div>
			</div> : 			
			<div className='bg-black sm:w-full m-2 cursor-pointer flex lg:flex-row sm:flex-col item-center justify-start border-b-2 border-white p-5 rounded-lg'>
				<img src={image? image: "/no.webp"} height={'240px'} width={'320px'} className='rounded-xl mx-2'/>
				<div className='flex flex-col items-start justify-center'>
					<div className='lg:border-l-2 border-white lg:ml-2 flex flex-col items-start justify-center'>
						<h2 className='font-bold text-xl mx-2 mt-5'>{title}</h2>
						<p className='mt font-semibold mx-[32px]'>{date}</p>
					</div>
					<p className='font-semibold mx-[32px] flex items-center justify-start'><img className='mr-2 bg-gray-600 rounded-lg' onClick={handleLike} src={!liked? '/like.svg': '/liked.svg'} /> {likes}</p>
				</div>
			</div>}
	</>
}

export default PostItem;