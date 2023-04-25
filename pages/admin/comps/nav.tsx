/* eslint-disable */
import Link from "next/link"

const Nav = () => {
	return <>
		<nav className='bg-black text-white flex items-center justify-between sticky top-0 z-5'>
			<ul className='flex items-center justify-start p-5'>
				<Link href={'/admin/admin'}><li className='mx-2 cursor-pointer'>Post</li></Link>
				<Link href={'/admin/how-to'}><li className='mx-2 cursor-pointer'>How-To</li></Link>
				<Link href={'/admin/websites'}><li className='mx-2 cursor-pointer'>Websites</li></Link>
				<Link href={'/admin/apps'}><li className='mx-2 cursor-pointer'>Apps</li></Link>
			</ul>
			<ul className='sm:hidden lg:flex items-center justify-center'><button onClick={(e)=>{ localStorage.removeItem('adminID'); location.reload()}} className='cursor-pointer bg-red-600 hover:bg-red-700 text-white p-2 mx-5 rounded-xl'>Logout</button></ul>
		</nav>
	</>
}

export default Nav