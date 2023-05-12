/* eslint-disable */
import React from 'react'
import { useState } from 'react'

const WebsiteItem = (props: any) => {
	const [ title, setTitle ] = useState(props.title);
	const [ content, setContent ] = useState(props.content);
	const [ link, setLink ] = useState(props.link)
	const [ id, setId ] = useState(props.id);
	
	return <>
		<a href={link} target="_blank" rel="noreferrer">
			<div className='sm:flex-col lg:flex-row lg:w-full m-2 sm:w-fit cursor-pointer flex item-center justify-start lg:border-b-2 sm:border-2 border-white p-5 rounded-lg'>
				<h2 className='font-bold text-3xl mx-2 mt-5'>{title}</h2>
				<p className='font-bold text-xl mx-2 mt-5'>{content}</p>
			</div>
		</a>
	</>
}

export default WebsiteItem;