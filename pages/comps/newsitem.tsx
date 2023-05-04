import { useState } from 'react'

const NewsItem = (props: any) => {
	const [img, setImg] = useState(props.img);
	const [desc, setDesc] = useState(props.desc);
	const [title, setTitle] = useState(props.title);
	const [url, setUrl] = useState(props.url);
	const [date, setDate] = useState(props.date);
	const [auth, setAuth] = useState(props.auth);
	const [source, setSource] = useState(props.source);
	
	return <>
		<div className='m-2 bg-slate-900 text-white border-2 border-black lg:w-[724px] p-2 rounded-lg'>
			<img src={img?.search(/https:/)==0? img : `/no.webp`}  className='lg:w-[724px] lg:h-[362px] blur-none rounded' />
			<h1 className='blur-none font-bolder text-2xl border-b-2 border-blue-600'>{title? title.slice(0, 45) + "...": "not available"}</h1>
			<p className='blur-none text-lg border-b-2 border-blue-500'>{desc? desc.slice(0, 85) + "...": "not available"}</p>
			<p>publised at: {date}</p>
			<p>author: {auth}</p>
			<p>source: {source}</p>
			<p className='font-bold text-lg'>News by <a className='hover:underline' target='_blank' rel="noreferrer" href='https://newsapi.org'>NewsAPI</a></p>
			<button className='ml-[66%]'><a href={url} target='_blank' rel="noreferrer" className='bg-white text-black hover:text-white border-2 hover:border-white hover:bg-black p-2 mx-2 mt-5 rounded-lg'>Read More</a></button>
		</div>
	</>
}

export default NewsItem