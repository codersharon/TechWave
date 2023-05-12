import { useState } from 'react'
import Head from "next/head"
import { NextSeo } from 'next-seo';
// import Image from "next/image"

const Slug = (props) => {
	const [title, setTitle] = useState(props.data.title);
	const [date, setDate] = useState(props.data.date);
	const [content, setContent] = useState(props.data.content);
	const [image, setImage] = useState(props.data.image);
	const [ likes, setLikes ] = useState(props.data.likes);
	const [ liked, setLiked ] = useState(false)
	const handleLike = async () => {
		if (liked == false) {
			const request = await fetch(`/api/how-to/liked?id=${props.i}`, { method: 'PUT' });
			const response = await request.json();
			setLiked(true);
			setLikes(likes+1)
		} else if (liked == true) {
			const request = await fetch(`/api/how-to/unliked?id=${props.i}`, { method: 'PUT' });
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
        url: `https://tech-vave.vercel.app/blogpost/${props.i}`,
				title: title,
      	description: content.slice(0, 60),
        images: [{
					url: "/favicon.ico",
					width: 800,
			    height: 600
				}]}
			}
    />
		<div className='bg-black min-h-[100vh]' style={{ margin: "0% 12px" }}>
			<img src={image? image : "/no.webp"} width={'320px'} height={'240px'} alt="image" className='rounded-xl mx-2'/>
			<h1 style={{ fontSize: "xx-large", font: "bolder" }}>{title? title : "title"}</h1>
			<hr></hr>
			<p styles={{ fontSize: "x-large" }}>{content? content : "content"}</p>
			<p styles={{ fontSize: "large" }}>{date? date : "date"}</p>
			<p className='font-semibold mx-[32px] flex items-center justify-start'><img className='mr-2 bg-gray-600 rounded-lg' onClick={handleLike} src={!liked? '/like.svg': '/liked.svg'} /> {likes}</p>
		</div>
	</>
	
}

// export async function getStaticPaths() {
// 	const ab = await fetch('https://techwave.sharonsandeep.repl.co/api/how-to')
// 	const howtos = await ab.json();
//   const paths = howtos.howto.map((item) => {
// 		return { params: { slug: item._id } }
// 	})

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

export async function getServerSideProps(context) {
  const { slug } = context.params;
	const a = await fetch(`https://tech-vave.vercel.app/api/gethow?id=${slug}`, { method: "GET" })
  const data = await a.json();
	
  return {
    props: {data, i: slug}
  }
}

export default Slug
