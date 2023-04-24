/* eslint-disable */
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const AppsItem = (props) => {
	const [ image, setImage ] = useState(props.image);
	const [ content, setContent ] = useState(props.content)
  const [ link, setLink ] = useState(props.link);
	const [ title, setTitle ] = useState(props.title);
	const [ id, setId ] = useState(props.id);
	const deletePost = async (id) => {
		const url = `/api/apps?id=${id}`;
		const response = await fetch(url, { method: 'DELETE' });		
		const text = await response.json();
		alert("Successfully deleted post.");
	}
	return <>
		<a href={link} target="_blank" rel="noreferrer">
			<div className='m-2 w-full cursor-pointer hover:bg-gray-100 flex item-center justify-start border-2 p-5 rounded-lg'>
				<Image src={image} height={'120px'} width={'120px'} className='rounded-xl mx-2'/>
				<h2 className='font-bold text-3xl mx-2 mt-5'>{title}</h2>
				<p className='font-bold text-xl mx-2 mt-5'>{content}</p>
				<button onClick={(e)=>{deletePost(id)}} className='bg-blue-600 hover:bg-blue-700 p-2 h-fit rounded-xl mx-2 text-white'>Delete</button>
			</div>
		</a>
	</>
}

export default AppsItem;