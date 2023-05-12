import React from 'react'
// import Image from 'next/image'
import { useState } from 'react'

const AppsItem = (props: any) => {
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
			<div className='sm:w-full m-2 cursor-pointer flex lg:flex-row sm:flex-col item-center justify-start border-b-2 border-white p-5 rounded-lg'>
				<img src={image? image : '/no.webp'} height={'240px'} width={'320px'} className='rounded-xl mx-2'/>
				<div className='lg:border-l-2 border-white lg:ml-2 flex flex-col items-start justify-center'>
					<h2 className='font-bold text-3xl mx-2 mt-5'>{title}</h2>
					<p className='font-bold text-xl mx-2 mt-5'>{content}</p>
					<button onClick={(e)=>{deletePost(id)}} className='mt-2 bg-blue-600 hover:bg-blue-700 p-2 h-fit rounded-xl mx-2 text-white'>Delete</button>
				</div>
			</div>
		</a>
	</>
}

export default AppsItem;