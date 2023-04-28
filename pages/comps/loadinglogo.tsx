import {useEffect} from "react"

const LoadingLogo = () => {
	useEffect(()=>{
		setTimeout(()=>{
			document.getElementById('loadlogo').style.display = 'none';			
		}, 1500)
	}, [])
	
	return <img src={'/Tech.gif'} id='loadlogo' className='w-[100vw] h-[100vh]' />
}

export default LoadingLogo