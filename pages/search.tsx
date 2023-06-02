import {useState} from "react"
import Link from 'next/link'

const Search = (props) => {
	const [allposts, setAllposts] = useState(props.data.allposts);
	const [topics, setTopics] = useState("");
	const [results, setResults] = useState([]);
	// const [showresult, setShowresult] = useState(false);
	// const [showpost, setShowpost] = useState({});
	const getResults = async () => {
		const url = 'https://techwave.sharonsandeep.repl.co/api/search/';
		const data = {
			query: topics.toLowerCase().replace("", "#").replace(/ /g, '#'),
		};
		
		const response = await fetch(url, {
		    method: 'POST',
		    headers: {
		        'Content-Type': 'application/json',
		    },
		    body: JSON.stringify(data),
		});
		
		const res = await response.json();
		setResults(res.results)
	}
	
	return <>
		<div className='mb-4 border-b-2 border-gray-600 flex items-center justify-center' >
			<input value={topics} onChange={(e)=>{setTopics(e.target.value); if (topics == "") {
				setResults([]);
			}}} onKeyDown={
				(e) => {
					if (e.keyCode == 13) {
						getResults()
					}
				}
			} type='text' className='outline-none bg-gray-600 rounded-lg text-white p-2 w-full my-2 mx-5' placeholder='Search about topics' />
		</div>
		
		<div className={!topics == "" ? "hidden" : "flex flex-col items-start justify-start"}>{
			allposts[0].map((post)=>{
					return <Link key={post._id} href={`/blogpost/posts/${post._id}`}><img className='w-full h-fit' src={post.image} /></Link>
				})}{
			allposts[1].map((post)=>{
					return <Link key={post._id} href={`/blogpost/howtos/${post._id}`}><img className='w-full h-fit' src={post.image} /></Link>
				})
		}</div>

		<div className={topics == "" ? "hidden" : "flex flex-col items-start justify-start"}>{
			results.map((post)=>{
					// let likes = post.likes;
					// let liked = false;
					// const handleLike = async () => {
					// 	if (liked == false) {
					// 		const request = await fetch(`/api/post/liked?id=${post._id}`, { method: 'PUT' });
					// 		const response = await request.text();
					// 		console.log(response);
					// 		let liked = true;
					// 		let likes = likes+1
					// 	} else if (liked == true) {
					// 		const request = await fetch(`/api/post/unliked?id=${post._id}`, { method: 'PUT' });
					// 		const response = await request.text();
					// 		console.log(response);
					// 		let liked = false
					// 		let likes = likes-1
					// 	}
					// 	liked = true;
					// }
				
				return <div key={post._id} className='w-fit bg-black rounded-xl p-2' style={{ margin: "0% 12px" }}>
					<h1 className='lg:text-[50px] lg:font-[900] sm:text-[25px] '>{post.title? post.title : "title"}</h1>
					<img src={post.image? post.image : "/no.webp"} alt="image" className='lag:w-[720px] alg:h-[720px] w-fit sm:w-[420px] rounded-xl mx-2 my-2'/>
					<hr></hr>
					<p className='lg:text-2xl sm:text-[15px] my-2 w-fit' >{post.content? post.content : "no content"}</p>
					<p styles={{ fontSize: "large" }}>{post.date? post.date : "date"}</p>
					<span className='border-t-2 border-white flex flex-col justify-center items-start'>{
						post.links? post.links.split(" ").map((link)=>{
							return <a key={link} target='_blank' rel="noreferrer" className='text-blue-500 hover:underline' href={link}>{link}</a>
						}) : ""
					}</span>
					<span className='border-t-2 border-white flex flex-col justify-center items-start'>{
						post.tags? post.tags.split("#").slice(1, post.tags.split("#").length).map((tag)=>{
							return <a key={tag} target='_blank' rel="noreferrer" className='text-blue-500 hover:underline' href={"https://www.google.com/search?q=" + tag}>#{tag}</a>
						}) : ""
					}</span>
					{/* <p className='font-semibold mr-[32px] flex items-center justify-start'><img className='cursor-pointer w-10 mr-2 bg-gray-600 rounded-lg' onClick={handleLike} src={!liked == true? '/like.svg': '/liked.svg'} /> {likes}</p> */}
				</div>
				})
		}</div>
		
	</>
}

export async function getServerSideProps(context) {
	const req = await fetch('https://techwave.sharonsandeep.repl.co/api/getall', {method: "GET"});
	const data = await req.json();
	return {
		props: { data }
	}
}

export default Search