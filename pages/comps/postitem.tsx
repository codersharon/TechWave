/* eslint-disable */
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const PostItem = (props) => {
	const [ image, setImage ] = useState(props.image);
  const [ date, setDate ] = useState(props.date);
	const [ title, setTitle ] = useState(props.title);
	const [ id, setId ] = useState(props.id);
	
	return <>
			<div className='m-2 cursor-pointer hover:bg-gray-100 flex item-center justify-start border-2 p-5 rounded-lg'>
				<Image src={image? image: "/no.webp"} height={'120px'} width={'320px'} className='rounded-xl mx-2'/>
				<h2 className='font-bold text-3xl mx-2 mt-5'>{title}</h2>
				<p className='mt font-semibold mx-[32px]'>{date}</p>
			</div>
	</>
}

export default PostItem;