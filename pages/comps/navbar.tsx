/* eslint-disable */
import Link from 'next/link'
import {useState, useEffect} from "react"

const Navbar = () => {
	const [admin, setAdmin] = useState(false);

	useEffect(()=>{
		if (localStorage.getItem('adminID') !== null) {
			setAdmin(true);
		}
	}, [0])
	return <>
		<nav className='bg-black text-white flex items-center justify-between sticky top-0 z-10'>
			<ul className='flex items-center justify-start p-5'>
				<Link href={'/'}><span className='font-bolder text-3xl cursor-default mr-5'>TechWave</span></Link>
				<Link href={'/tech-news/'}><li className='mx-2 cursor-pointer'>Tech News</li></Link>
				<Link href={'/how-to/'}><li className='mx-2 cursor-pointer'>How to </li></Link>
				<Link href={'/usefull-websites/'}><li className='mx-2 cursor-pointer'>Usefull Websites</li></Link>
				<Link href={'/usefull-apps/'}><li className='mx-2 cursor-pointer'>Usefull Apps</li></Link>
			</ul>
			<ul>{
				admin == true ? <div><Link href={'/admin/admin'}><button className='cursor-pointer bg-red-600 hover:bg-red-700 text-white p-2 mx-5 rounded-xl'>Admin</button></Link> <button onClick={(e)=>{ localStorage.removeItem('adminID'); location.reload()}} className='cursor-pointer bg-red-600 hover:bg-red-700 text-white p-2 mx-5 rounded-xl'>Logout</button></div>: <Link href={'/admin/admin'}><button className='cursor-pointer bg-red-600 hover:bg-red-700 text-white p-2 mx-5 rounded-xl'>Admin</button></Link>}</ul>
		</nav>
	</>
}

export default Navbar