import Link from "next/link"
import { useRouter } from 'next/router'

const NavigationBar = () => {
	const router = useRouter();
	
	return <>
		<nav className='lg:hidden p-2 bg-white sticky bottom-0 flex items-center justify-center'>
			<ul className='flex items-center justify-center'>
				<Link href={'/'} ><img src='/home.svg' alt='home' className={router.pathname == '/' ? `mx-3 w-10 border-4 border-black rounded-lg` : 'mx-3 w-10'} /></Link>
				<Link href={'/search'} ><img src='/search.svg' alt='search' className={router.pathname == '/search' ? `mx-4 w-10 border-4 border-black rounded-lg` : 'mx-4 w-10'} /></Link>
				<Link href={'/tech-news'} ><img src='/feed.svg' alt='feed' className={router.pathname == '/tech-news' ? `mx-3 w-10 border-4 border-black rounded-lg` : 'mx-3 w-10'} /></Link>
				<Link href={'/usefull-websites'} ><img src='/websites.svg' alt='website' className={router.pathname == '/usefull-websites' ? `mx-3 w-10 border-4 border-black rounded-lg` : 'mx-3 w-10'} /></Link>
				<Link href={'/usefull-apps'} ><img src='/apps.svg' alt='apps' className={router.pathname == '/usefull-apps' ? `mx-3 w-10 border-4 border-black rounded-lg` : 'mx-3 w-10'} /></Link>
				<Link href={'/about'} ><img src='/about.svg' alt='about' className={router.pathname == '/about' ? `mx-3 w-10 border-4 border-black rounded-lg` : 'mx-3 w-10'} /></Link>
			 ?</ul>
		</nav>
	</>
}

export default NavigationBar;