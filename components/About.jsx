import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            As a full-stack developer specializing in responsive web applications, I thrive on exploring new
            technologies and methodologies. Since starting my journey in 2022, I&apos;ve mastered diverse tech stacks,
            including HTML, CSS, JavaScript, and both MERN and MEAN stacks. However, I believe being a great
            developer means choosing the most suitable tool for each project rather than mastering a single language or framework..
          </p>
          <p className='py-2 text-gray-600'>
            My development approach is rooted in adaptability and versatility. I embrace multiple pathways
            to achieve outcomes and eagerly explore new technologies to enhance my skills. This mindset allows me to
            quickly learn new tech stacks, ensuring I&apos;m prepared for any challenge.
          </p>
          <p className='py-2 text-gray-600'>
            Beyond technical proficiency, I have a proven track record of working directly with clients,
            guiding projects from mock wireframes to fully deployed applications. This hands-on experience has
            honed my ability to understand client needs, communicate effectively, and deliver solutions that exceed expectations.
          </p>
          <p className='py-2 text-gray-600'>
            As a full-stack developer, I combine technical expertise, adaptability, and a client-centric approach to deliver standout
            responsive web applications in today&apos;s competitive digital landscape.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' title='About Image' />
        </div>
      </div>
    </div>
  );
};

export default About;
