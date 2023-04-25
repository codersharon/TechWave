import { useState } from 'react'
import { NextSeo } from 'next-seo';
import Image from "next/image"

const Slug = (props) => {
	const [title, setTitle] = useState(props.data.title);
	const [date, setDate] = useState(props.data.date);
	const [content, setContent] = useState(props.data.content? props.data.content : "");
	const [image, setImage] = useState(props.data.image);
	
	return <>
		<NextSeo
      title={title? title: "title || TechWave"}
      description={content.slice(0, 60)}
      canonical={`https://techwave.sharonsandeep.repl.co/blogpost/posts/${props.i}`}
			      openGraph={{
        url: `https://techwave.sharonsandeep.repl.co/blogpost/posts/${props.i}`,
				title: title,
      	description: content.slice(0, 60),
				images: [{
					url: "/favicon.ico",
					width: 800,
			    height: 600
				}]}
			}
    />
		<div style={{ margin: "0% 12px" }}>
			<Image src={image? image : "/no.webp"} width={'320px'} height={'240px'} alt="image" className='rounded-xl mx-2'/>
			<h1 style={{ fontSize: "xx-large", font: "bolder" }}>{title? title : "title"}</h1>
			<hr></hr>
			<p styles={{ fontSize: "x-large" }}>{content? content : "content"}</p>
			<p styles={{ fontSize: "large" }}>{date? date : "date"}</p>
		</div>
	</>
	
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
	const a = await fetch(`https://techwave.sharonsandeep.repl.co/api/getpost?id=${slug}`, { method: "GET" })
	 const data = await a.json();


  return {
    props: {data, i: slug}
  }
}

export default Slug