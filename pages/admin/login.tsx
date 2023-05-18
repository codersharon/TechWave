/* eslint-disable */
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Link from "next/link"
import { NextSeo } from 'next-seo'
import Head from 'next/head'

const Login = (props) => {
	const router = useRouter();
	const [id, setId] = useState("");
	const [pass, setPass] = useState("");
	const [adminID, setAdminID] = useState(props.data[0].adid);
	const [adminEmail, setAdminEmail] = useState(props.data[0].email);
	const [adminPass, setAdminPass] = useState(props.data[0].pass);
	const [saveLogin, setSaveLogin] = useState(false);

	const handleSubmit = () => {
		if (id == adminEmail && pass == adminPass) {
			localStorage.setItem('adminID', adminID);
			alert('Admin Logged in succesfully!');
			router.push('/admin/admin');
		}
	};

	useEffect(() => {
		if (localStorage.getItem('adminID')) {
			router.push('/admin/admin')
		}
	}, []);

	return <>

		<NextSeo
			title={"TechWave"}
			description="Online Tech guid, news, tech tricks and tips"
			canonical="https://tech-vave.vercel.app/"
		/>

		<Head>
			<title>TechWave</title>
			<meta name="description" content="Online Tech guid, news, tech tricks and tips" />
			<meta property="og:image" content="https://tech-vave.vercel.app/favicon.ico" />
			<meta property="og:url" content="https://tech-vave.vercel.app/admin/login" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className="text-white bg-gray-900 shadow-md h-[91.2vh] p-8 flex flex-col">
			<div className="relative mb-4">
				<label htmlFor="username" className="leading-7 text-sm text-gray-400 flex flex-col items-start">Username</label>
				<input vaule={id} onChange={(e) => { setId(e.target.value) }} type="username" id="username" name="username" className="w-fit bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
			</div>

			<div className="relative mb-4">
				<label htmlFor="password" className="leading-7 text-sm text-gray-400 flex flex-col items-start">Password</label>
				<input vaule={pass} onChange={(e) => { setPass(e.target.value) }} type="password" id="password" name="password" className="w-fit bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
			</div>

			<button onClick={handleSubmit} className="w-fit text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Login</button>
			<p className="text-xs text-gray-400 text-opacity-90 mt-3">This page is only for admins.</p>
		</div>
	</>
}

export async function getStaticProps(context) {
	const a = await fetch('https://techwave.sharonsandeep.repl.co/api/admin', { method: "GET" })
	const data = await a.json();

	return {
		props: { data }
	}
}

export default Login