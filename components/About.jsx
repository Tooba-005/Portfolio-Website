import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 mb-14'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest font-bold text-[#324c8a]'>
            About
          </p>
          <h2 className='py-4'> 👋 Hello there!</h2>
          <p className='py-2 text-gray-600 font-semibold'>
          As a MERN Stack and Full Stack Web Developer, I specialize in creating seamless and efficient web applications that integrate robust backend systems with modern, responsive front-end interfaces. My expertise spans across MongoDB, Express, React, and Node.js, allowing me to build scalable full-stack applications that handle both the user experience and the server-side logic effectively.
          </p>
          <p className='py-2 text-gray-600 font-semibold'>
          Starting my web development journey in 2013, I&apos;ve worked on diverse projects, from managing e-commerce platforms to building custom web applications. I bring proficiency in HTML, CSS, JavaScript, React, and backend technologies, alongside experience working directly with clients to deliver high-quality solutions based on their requirements. My focus is on using the best tools for each task, whether it&apos;s front-end or back-end, to create optimized and user-friendly applications.
          </p>
          <p className='py-2 text-gray-600 font-semibold'>
          In addition, I&apos;m currently pursuing Generative AI course from PIAIC, where I learn advance Python and more technical skills like Docker Desktop, particularly focusing on front-end and full-stack technologies. I&apos;m passionate about staying up-to-date with the latest trends and continuously expanding my skill set to deliver modern, efficient, and scalable solutions.
        </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer font-bold'>
             Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
