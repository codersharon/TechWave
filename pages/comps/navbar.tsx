/* eslint-disable */
import Link from 'next/link'
import {useState, useEffect} from "react"
import { useRouter } from 'next/router'

const Navbar = () => {
	const [admin, setAdmin] = useState(false);
	const router = useRouter();
	const [ hamburger, setHamburger ] = useState(false)
	useEffect(()=>{
		if (localStorage.getItem('adminID') !== null) {
			setAdmin(true);
		}
	}, [0])
	return <>
		<nav className='bg-black text-white flex items-center justify-between sticky top-0 z-10'>
			<img onClick={(e)=>{if (hamburger == false) {
				setHamburger(true)
			} else if(hamburger == true) {
				setHamburger(false)
			}}} className='bg-white rounded lg:hidden' src={'/menu.svg'} />
			<Link href={'/'}><div className='mx-2 lg:rounded-none sm:rounded-xl bg-white'><div className='lg:rounded-none sm:rounded-xl cursor-default border-2 border-white text-2xl font-bold flex items-center justify-center bg-black'><h1 className='lg:rounded-none sm:rounded-xl p-2 px-5 border-2 border-black bg-white text-black'>Tech</h1><h1 className='lg:rounded-none sm:rounded-xl p-2 text-white'>Wave</h1></div></div></Link>
			<ul className='sm:hidden lg:flex items-center justify-start p-5'>
				<Link href={'/tech-news/'}><li className={router.pathname == '/tech-news'?`bg-white text-black p-2 rounded hover:text-black mx-2 cursor-pointer`: `p-2 rounded hover:bg-white hover:text-black mx-2 cursor-pointer`}>Tech News</li></Link>
				<Link href={'/how-to/'}><li className={router.pathname == '/how-to'?`bg-white text-black p-2 rounded hover:text-black mx-2 cursor-pointer`: `p-2 rounded hover:bg-white hover:text-black mx-2 cursor-pointer`}>How to </li></Link>
				<Link href={'/usefull-websites/'}><li className={router.pathname == '/usefull-websites'?`bg-white text-black p-2 rounded hover:text-black mx-2 cursor-pointer`: `p-2 rounded hover:bg-white hover:text-black mx-2 cursor-pointer`}>Usefull Websites</li></Link>
				<Link href={'/usefull-apps/'}><li className={router.pathname == '/usefull-apps'?`bg-white text-black p-2 rounded hover:text-black mx-2 cursor-pointer`: `p-2 rounded hover:bg-white hover:text-black mx-2 cursor-pointer`}>Usefull Apps</li></Link>
			</ul>
			<ul className='flex items-center justify-center'><Link href={'/admin/admin'}><button className='cursor-pointer bg-red-600 hover:bg-red-700 text-white p-2 mx-5 rounded-xl'>Admin</button></Link></ul>
		</nav>
		<ul className={`bg-black text-white lg:hidden ${hamburger == false ? 'hidden' : 'flex flex-col'} items-center justify-start p-5`}>
			<Link href={'/tech-news/'}><li className={router.pathname == '/tech-news'?`bg-white text-black p-2 rounded hover:text-black mx-2 cursor-pointer`: `p-2 rounded hover:bg-white hover:text-black mx-2 cursor-pointer`}>Tech News</li></Link>
			<Link href={'/how-to/'}><li className={router.pathname == '/how-to'?`bg-white text-black p-2 rounded hover:text-black mx-2 cursor-pointer`: `p-2 rounded hover:bg-white hover:text-black mx-2 cursor-pointer`}>How to </li></Link>
			<Link href={'/usefull-websites/'}><li className={router.pathname == '/usefull-websites'?`bg-white text-black p-2 rounded hover:text-black mx-2 cursor-pointer`: `p-2 rounded hover:bg-white hover:text-black mx-2 cursor-pointer`}>Usefull Websites</li></Link>
			<Link href={'/usefull-apps/'}><li className={router.pathname == '/usefull-apps'?`bg-white text-black p-2 rounded hover:text-black mx-2 cursor-pointer`: `p-2 rounded hover:bg-white hover:text-black mx-2 cursor-pointer`}>Usefull Apps</li></Link>
		</ul>
	</>
}

export default Navbar