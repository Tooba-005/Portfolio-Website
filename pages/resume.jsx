import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Tooba | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Tooba Yousaf</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/itxtooba/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Tooba-005'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              MERN Development <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
I&apos;m a dedicated website developer 💻  with expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js). I create user-friendly 🤝 and responsive layouts ✨  using Bootstrap 5.3, Tailwind CSS 3.4.3, and modern development tools like TypeScript, React Vite, CRA template, Redux Toolkit and Next.js for efficient and robust web applications. 👩‍💻 My skills extend to CRUD operations mostly integrated with Firebase ( Authentication and Fire store Database ) integration and also Cloudinary for image management 💾 .
Building Scalable Web Applications with a Creative Flair 🚀. Tech Enthusiast and Problem Solver ☕ Bringing Innovative Solutions to the Digital World 💡. Effective and proven track record of critical thinking, idea
generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux Toolkit
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>Firebase
            <span className='px-2'>|</span>RESTAPI
            <span className='px-2'>|</span>Node JS
            <span className='px-2'>|</span>Express JS
            <span className='px-2'>|</span>Github
            <span className='px-2'>|</span>Docker Desktop
            <span className='px-2'>|</span>Python
            <span className='px-2'>|</span>Cloudinary
            <span className='px-2'>|</span>Stripe
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>
      </div>
    </>
  );
};

export default resume;
  //  <h5 className='text-center underline text-[18px] py-4'>
  //         Professional Experience
  //       </h5>
  //       {/* Experience */}
  //       <div className='py-6'>
  //         <p className='italic'>
  //           <span className='font-bold italic'>
  //           INFINITE TECH
  //           </span>
  //           <span className='px-2'>|</span>Dallas, TX
  //         </p>
  //         <p className='py-1 italic'>Front End Web Developer & Web Master (2013 - Current)</p>
  //         <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
  //           <li>
  //             Ensured comprehensive mobile responsive UI layouts with
  //             understanding of HTML, CSS, and JavaScript.
  //           </li>
  //           <li>
  //             Troubleshoot issues and concerns, configure operation and analytic
  //             plugins, and design changes as needed.
  //           </li>
  //           <li>
  //             Worked directly with a diverse client base to understand and
  //             implement multiple technologies and programs.
  //           </li>
  //           <li>
  //             Platform migration managing DNS servers as well as MX records and
  //             ensuring a smooth migration process.
  //           </li>
  //         </ul>
  //       </div>
  //       {/* Personal Experience */}
  //       <div className='py-6'>
  //         <p className='italic'>
  //           <span className='font-bold italic'>
  //             Teaching & Mentoring Web Development
  //           </span>
  //           <span className='px-2'>|</span>Dallas, TX
  //         </p>
  //         <p className='py-1 italic'>Code Commerce - Youtube Channel (2021 - Current)</p>
  //         <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
  //           <li>
  //             In 2021 I started “Code Commerce”, a YouTube channel focused on
  //             sharing what I’m learning in web development, specifically
  //             front-end development.
  //           </li>
  //           <li>
  //             Private 1 on 1 Zoom coaching calls related to web development.
  //             More specifically debugging, teaching basic web development
  //             concepts and code reviews.
  //           </li>
  //         </ul>
  //       </div>
  //       {/*  */}
  //       <h5 className='text-center underline text-[18px] py-4'>
  //         Other Professional Experience
  //       </h5>    
  //       {/* Experience */}
  //       <div className='py-6'>
  //         <p className='italic'>
  //           <span className='font-bold'>CITY OF SHERMAN, TX</span>
  //           <span className='px-2'>|</span>Sherman, TX
  //         </p>
  //         <p className='py-1 italic'>Paramedic / Firefighter (2010 – 2019)</p>
  //         <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
  //           <li>
  //             Ensured proper implementation of firefighting techniques and
  //             practices including controlling and extinguishing fires, operating
  //             hose lines, and fire ground operations, ventilation, and search
  //             and rescue.
  //           </li>
  //           <li>
  //             Oversaw comprehensive understanding, operation, and maintenance of
  //             fire engines, ladder trucks, technical rescue apparatus, and
  //             response trailers.
  //           </li>
  //           <li>
  //             Performed ALS techniques as needed within emergency situations
  //             including the use of an esophageal or dual lumen airway device and
  //             oral intubation using laryngoscopy.
  //           </li>
  //           <li>
  //             Collaborated with a talented and high performing team of
  //             firefighters in high pressure and stressful situations as needed.
  //           </li>
  //           <li>
  //             Utilized proven and demonstrated knowledge of multiple
  //             certifications including Pediatric Advanced Life Support,
  //             Prehospital Trauma Life Support, and Advanced Cardiac Life
  //             Support, among others.
  //           </li>
  //         </ul>
  //       </div>