/* eslint-disable */
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

const AppsItem = (props: any) => {
	const [ image, setImage ] = useState(props.image);
	const [ content, setContent ] = useState(props.content);
  const [ link, setLink ] = useState(props.link);
	const [ title, setTitle ] = useState(props.title);
	const [ id, setId ] = useState(props.id);
	
	return <>
		<a href={link} target="_blank" rel="noreferrer">
			<div className='sm:w-full m-2 cursor-pointer hover:bg-gray-100 flex lg:flex-row sm:flex-col item-center justify-start border-b-2 border-black p-5 rounded-lg'>
				<Image src={image? image: "/no.webp"} height={'240px'} width={'340px'} className='rounded-xl mx-2'/>
				<div className='lg:border-l-2 border-black lg:ml-2 flex flex-col items-start justify-center'>
					<h2 className='font-bold text-3xl mx-2 mt-5'>{title}</h2>
					<p className='font-bold text-xl mx-2 mt-5'>{content}</p>
				</div>
			</div>
		</a>
	</>
}

export default AppsItem;