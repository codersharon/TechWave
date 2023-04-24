/* eslint-disable */
import React from 'react'
import { useState } from 'react'

const WebsiteItem = (props) => {
	const [ title, setTitle ] = useState(props.title);
	const [ content, setContent ] = useState(props.content);
	const [ link, setLink ] = useState(props.link)
	const [ id, setId ] = useState(props.id);
	
	return <>
		<a href={link} target="_blank" rel="noreferrer">
			<div className='w-full m-2 cursor-pointer hover:bg-gray-100 flex flex-col item-center justify-start border-2 p-5 rounded-lg'>
				<h2 className='font-bold text-3xl mx-2 mt-5'>{title}</h2>
				<p className='font-bold text-xl mx-2 mt-5'>{content}</p>
			</div>
		</a>
	</>
}

export default WebsiteItem;