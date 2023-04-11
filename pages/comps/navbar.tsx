import Link from 'next/link'

const Navbar = () => {
	return <>
		<nav className='bg-black text-white flex items-center justify-start sticky top-0 z-10'>
			<ul className='flex items-center justify-start p-5'>
				<Link href={'/'}><span className='font-bolder text-3xl cursor-default'>SharonsTech</span></Link>
			</ul>
			<ul className='flex items-center justify-center p-5'>
				<Link href={'/tech-news/'}><li className='mx-2 cursor-pointer'>Tech News</li></Link>
				<Link href={'/phone-tips/'}><li className='mx-2 cursor-pointer'>Phone-tricks-&-tips</li></Link>
				<Link href={'/how-to/'}><li className='mx-2 cursor-pointer'>How to </li></Link>
				<Link href={'/usefull-websites/'}><li className='mx-2 cursor-pointer'>Usefull Websites</li></Link>
				<Link href={'/usefull-apps/'}><li className='mx-2 cursor-pointer'>Usefull Apps</li></Link>
			</ul>
		</nav>
	</>
}

export default Navbar