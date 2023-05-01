import Head from 'next/head'

const About = () => {
	return <>
		<Head>
			<title>TechWave || About Me</title>
		</Head>
<section className="sm:w-full text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <p className="leading-relaxed text-lg">Welcome to my website! I'm a passionate and experienced full-stack web developer specialising in the MERN stack and Next.js. With a deep understanding of both front-end and back-end technologies, I strive to create innovative and efficient web solutions.
My Journey: My journey in the world of web development began several years ago, when I discovered my love for coding. Since then, I have honed my skills and expanded my knowledge to become a versatile full-stack developer. I have worked on a wide range of projects, from small personal websites to large-scale web applications, each presenting its own unique challenges and opportunities for growth.
Expertise in MERN Stack and Next.js: As a full-stack developer, I have a strong command over the MERN (MongoDB, Express.js, React and Node.js) stack, which empowers me to build robust and scalable web applications. With MongoDB as the database, Express.js as the back-end framework, React as the front-end library, and Node.js as the runtime environment, I can create end-to-end solutions that cater to specific business requirements.
Furthermore, I have extensive experience with Next.js, a powerful React framework that enables server-side rendering and provides enhanced performance and SEO capabilities. Leveraging Next.js, I can deliver fast-loading, dynamic web applications that offer a seamless user experience.
Passion for Innovation: I am constantly seeking new challenges and opportunities to push the boundaries of what is possible in web development. I enjoy keeping up with the latest industry trends and technologies, which allow me to implement cutting-edge features and functionalities in my projects. Whether it's integrating third-party APIs, optimising performance, or implementing responsive designs, I always strive to provide elegant and user-friendly solutions.
Collaboration and Problem-Solving: In addition to my technical skills, I am a strong advocate for collaboration and effective communication. I believe that a successful project is built on a foundation of teamwork and clear communication between all stakeholders. I value feedback and take an iterative approach to development, ensuring that the final product aligns with the client's vision and exceeds their expectations.
Thank you for visiting my website, and I look forward to the opportunity to work with you!</p>
      <span className="inline-block h-1 w-10 rounded bg-red-500 mt-8 mb-6"></span>
      <h2 className="text-white font-medium title-font tracking-wider text-sm">Sharon</h2>
      <p className="text-gray-500">Full Stack Web developer</p>
    </div>
  </div>
</section>
	</>
}

export default About