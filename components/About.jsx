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
            As a full-stack developer specializing in building responsive web applications,
            I thrive on the perpetual pursuit of new technologies and methodologies. My journey,
            which began in 2022, has been marked by a dedication to mastering a diverse array of
            tech stacks, including HTML, CSS, JavaScript, and both MERN and MEAN stacks. While
            proficient in these technologies, I firmly believe that the essence of being a great
            developer lies not in mastering a single language or framework, but in choosing the
            most suitable tool for each unique project.
          </p>
          <p className='py-2 text-gray-600'>
            My approach to development is characterized by adaptability and versatility.
            I embrace the philosophy that there are multiple pathways to achieving a desired outcome,
            and I&apos;m always eager to explore new technologies to enhance my skill set. This mindset
            enables me to quickly pivot and pick up new tech stacks as required, ensuring that I am
            equipped to tackle any challenge that comes my way.
          </p>
          <p className='py-2 text-gray-600'>
            Moreover, my experience extends beyond technical proficiency. I have a proven track record
            of working directly with clients, guiding projects from initial mock wireframes to fully
            deployed applications. This hands-on experience has sharpened my ability to understand
            client requirements, communicate effectively, and deliver solutions that not only meet
            but exceed expectations.
          </p>
          <p className='py-2 text-gray-600'>
            In essence, as a full-stack developer, I bring a blend of technical expertise, adaptability,
            and a client-centric approach to every project I undertake. By leveraging the best tools and
            technologies available, I ensure that I am well-equipped to deliver responsive web applications
            that stand out in today&apos;s competitive digital landscape.
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
