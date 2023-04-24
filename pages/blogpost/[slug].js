import { useState } from 'react'
import Head from "next/head"
import { NextSeo } from 'next-seo';
import Image from "next/image"

const Slug = (props) => {
	const [title, setTitle] = useState(props.data.title);
	const [date, setDate] = useState(props.data.date);
	const [content, setContent] = useState(props.data.content);
	const [image, setImage] = useState(props.data.image);
	
	return <>
		<NextSeo
      title={title? title + " " + "|| TechWave" : "title || TechWave"}
      description={content.slice(0, 60)}
      canonical={`https://techwave.sharonsandeep.repl.co/blogpost/${props.i}`}
			      openGraph={{
        url: `https://techwave.sharonsandeep.repl.co/blogpost/${props.i}`,
				title: title,
      	description: content.slice(0, 60),
        images: [
          { url: image },]}}
    />
		<Head>
			<title>{title + " " + "|| TechWave"}</title>
			<meta name="description" content={content} />
		</Head>
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
	const a = await fetch(`https://techwave.sharonsandeep.repl.co/api/gethow?id=${slug}`, { method: "GET" })
	 const data = await a.json();


  return {
    props: {data, i: slug}
  }
}

export default Slug