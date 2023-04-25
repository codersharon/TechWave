/* eslint-disable */
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const PostItem = (props) => {
	const [ image, setImage ] = useState(props.image? props.image : "/no.webp");
	const [ title, setTitle ] = useState(props.title);
	const [ content, setContent ] = useState(props.content? props.content : "");
  const [ date, setDate ] = useState(props.date);
	const [ id, setId ] = useState(props.id);
	
	return <>
		{content? <Link href={`/blogpost/posts/${id}`}> 
			<div className='sm:w-full m-2 cursor-pointer hover:bg-gray-100 flex lg:flex-row sm:flex-col item-center justify-start border-b-2 border-black p-5 rounded-lg'>
				<Image src={image? image: "/no.webp"} height={'240px'} width={'320px'} className='rounded-xl mx-2'/>
				<div className='lg:border-l-2 border-black lg:ml-2 flex flex-col items-start justify-center'>
					<h2 className='font-bold text-3xl mx-2 mt-5'>{title}</h2>
					<p className='font-bold text-xl mx-2 mt-5'>{content? content.slice(0, 45)+"...." : ""}</p>
					<p className='mt-2 font-semibold mx-[32px]'>{date}</p>
				</div>
			</div>
		</Link> : 			
			<div className='sm:w-full m-2 cursor-pointer hover:bg-gray-100 flex lg:flex-row sm:flex-col item-center justify-start border-b-2 border-black p-5 rounded-lg'>
				<Image src={image? image: "/no.webp"} height={'240px'} width={'320px'} className='rounded-xl mx-2'/>
				<div className='lg:border-l-2 border-black lg:ml-2 flex flex-col items-start justify-center'>
					<h2 className='font-bold text-xl mx-2 mt-5'>{title}</h2>
					<p className='mt font-semibold mx-[32px]'>{date}</p>
				</div>
			</div>}
	</>
}

export default PostItem;