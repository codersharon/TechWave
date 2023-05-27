import { useState } from 'react'
import { NextSeo } from 'next-seo';
// import Image from "next/image"
import Head from "next/head"

const Slug = (props) => {
	console.log(props.data.links)
	const [title, setTitle] = useState(props.data.title);
	const [date, setDate] = useState(props.data.date);
	const [content, setContent] = useState(props.data.content? props.data.content : "");
	const [image, setImage] = useState(props.data.image);
	const [links, setLinks] = useState(props.data.links? props.data.links : []);
	const [ likes, setLikes ] = useState(props.data.likes);
	const [ liked, setLiked ] = useState(false);
	const handleLike = async () => {
		if (liked == false) {
			const request = await fetch(`/api/post/liked?id=${props.i}`, { method: 'PUT' });
			const response = await request.json();
			setLiked(true);
			setLikes(likes+1)
		} else if (liked == true) {
			const request = await fetch(`/api/post/unliked?id=${props.i}`, { method: 'PUT' });
			const response = await request.json();
			setLiked(false);
			setLikes(likes-1)
		}
		setLiked(true);
	}
	return <>
		<NextSeo
      title={title? title: "title || TechWave"}
      description={content.slice(0, 60)}
      canonical={`https://tech-vave.vercel.app/`}
			openGraph={{
        url: `https://tech-vave.vercel.app/blogpost/posts/${props.i}`,
				title: title,
      	description: content.slice(0, 60),}
			}
    />

		<Head>
			<meta property="og:image" content={image? image : "/no.webp"} />
		</Head>
		
		<div className='bg-black min-h-[100vh]' style={{ margin: "0% 12px" }}>
			<h1 style={{ fontSize: "50px", fontWeight: "900" }}>{title? title : "title"}</h1>
			<img src={image? image : "/no.webp"} width={'720px'} height={'720px'} alt="image" className='rounded-xl mx-2 my-2'/>
			<hr></hr>
			<p className='text-2xl my-2' >{content? content : "content"}</p>
			<p styles={{ fontSize: "large" }}>{date? date : "date"}</p>
			<span className='flex flex-col justify-center items-start'>{
				links.map((link)=>{
					return <a key={link} target='_blank' className='text-blue-500 hover:underline' href={link}>{link}</a>
				})
			}</span>
			<p className='font-semibold mr-[32px] flex items-center justify-start'><img className='cursor-pointer w-10 mr-2 bg-gray-600 rounded-lg' onClick={handleLike} src={!liked? '/like.svg': '/liked.svg'} /> {likes}</p>
		</div>
	</>
	
}


// export async function getStaticPaths() {
// 	const ab = await fetch('https://tech-vave.vercel.app/api/post')
// 	const posts = await ab.json();
//   const paths = posts.posts.map((post) => {
// 		return { params: { slug: post._id } }
// 	})

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

export async function getServerSideProps(context) {
  const { slug } = context.params;
	const a = await fetch(`https://tech-vave.vercel.app/api/getpost?id=${slug}`, { method: "GET" })
  const data = await a.json();
	
  return {
    props: {data, i: slug}
  }
}

export default Slug