/* eslint-disable */
import Link from "next/link"

const Nav = () => {
	return <>
		<nav className='bg-black text-white flex items-center justify-between sticky top-0 z-10'>
			<ul className='flex items-center justify-start p-5'>
				<Link href={'/admin/admin'}><li className='mx-2 cursor-pointer'>Post</li></Link>
				<Link href={'/admin/how-to'}><li className='mx-2 cursor-pointer'>How-To</li></Link>
				<Link href={'/admin/websites'}><li className='mx-2 cursor-pointer'>Websites</li></Link>
				<Link href={'/admin/apps'}><li className='mx-2 cursor-pointer'>Apps</li></Link>
			</ul>
		</nav>
	</>
}

export default Nav