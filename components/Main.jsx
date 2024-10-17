import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-gray-700'>
          <span className='text-[#253b6e]'>Tooba Yousaf</span>
          </h1>
          <p className='py-4 text-gray-600 m-auto'>
            B. Artificial Intelligence & Web Developer. MERN Stack
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/itxtooba/'
              target='_blank'
              rel='noreferrer'
              className='hover:text-white'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer ease-in duration-300 hover:bg-[#253b6e]'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/Tooba-005'
              target='_blank'
              rel='noreferrer'
              className='hover:text-white'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#253b6e]'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
            <a className='hover:text-white'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#253b6e]'>
                <AiOutlineMail />
              </div>
              </a>
            </Link>
            <Link href='/resume'>
            <a className='hover:text-white'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#253b6e]'>
                <BsFillPersonLinesFill />
              </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
