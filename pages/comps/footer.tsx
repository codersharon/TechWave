/* eslint-disable */
import Link from "next/link"

const Footer = () => {
	return <>
	<footer className="sm:w-full text-gray-400 bg-gray-900 body-font sticky bottom-0 w-full">
  <div className="container px-5 py-2 mx-auto flex items-center justify-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <span className="ml-3 text-xl sm:text-lg cursor-default">TechWave</span>
    </a>
    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
      <a href="https://github.com/codersharon" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@codersharon</a>
    </p>
    <p className="cursor-pointer text-sm text-gray-400 sm:ml-4 sm:px-4 sm:border-x-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
      <Link href={'/about'}>About me</Link>
    </p>
    <span className="sm:mx-2 inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href="https://www.instagram.com/sh.xr.on/" target="_blank" rel="noreferrer" className="ml-3 text-gray-400">
        <svg fill="none" stroke="currentColor" strokelincap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
    </span>
  </div>
</footer>
	</>
}

export default Footer