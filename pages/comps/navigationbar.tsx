import Link from "next/link"
import { useRouter } from 'next/router'

const NavigationBar = () => {
	const router = useRouter();
	
	return <>
		<nav className='w-full mx-1 lg:hidden p-2 bg-white sticky bottom-0 flex items-center justify-center z-10'>
			<Link href={'/'} ><img src='/home.svg' alt='home' className={router.pathname == '/' ? `mx-3 w-8 border-4 border-black rounded-lg` : 'mx-3 w-8'} /></Link>
			<Link href={'/how-to'} ><img src='/help.svg' alt='how to' className={router.pathname == '/how-to' ? `mx-3 w-8 border-4 border-black rounded-lg` : 'mx-3 w-8'} /></Link>
			<Link href={'/tech-news'} ><img src='/feed.svg' alt='feed' className={router.pathname == '/tech-news' ? `mx-3 w-8 border-4 border-black rounded-lg` : 'mx-3 w-8'} /></Link>
			<Link href={'/usefull-websites'} ><img src='/websites.svg' alt='website' className={router.pathname == '/usefull-websites' ? `mx-5 w-8 border-4 border-black rounded-lg` : 'mx-3 w-8'} /></Link>
			<Link href={'/usefull-apps'} ><img src='/apps.svg' alt='apps' className={router.pathname == '/usefull-apps' ? `mx-3 w-8 border-4 border-black rounded-lg` : 'mx-3 w-8'} /></Link>
			<Link href={'/about'} ><img src='/about.svg' alt='about' className={router.pathname == '/about' ? `mx-3 w-8 border-4 border-black rounded-lg` : 'mx-3 w-8'} /></Link>
		</nav>
	</>
}

export default NavigationBar;