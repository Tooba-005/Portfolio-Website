import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase font-bold text-[#324c8a]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <p className='py-4 text-gray-600 font-semibold'>
        Here&apos;s a few of the projects I&apos;ve worked on. You can see the full list on my <Link href='https://github.com/Tooba-005'>
        <span className='py-2 text-gray-600 underline cursor-pointer font-bold'>
         Github
        </span>
      </Link> profile, but these are the ones I am most proud of. Even if some of these were eventually left unfinished (like most my repos, oops!), I still learned a lot from them!
        </p>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
