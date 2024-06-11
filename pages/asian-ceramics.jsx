import Image from 'next/image';
import React from 'react';
import AsianImg from '../public/assets/projects/Asian.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Blogging = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={AsianImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Asian Ceramics</h2>
          <h3>TypeScript / NextJS / MYSQL</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='mb-2'>
            The project was built using Next.js for both frontend and backend, with features like role-based
            pricing listings and NextAuth for secure access. It has separate panels for clients and admins,
            allowing admins to update listings and perform tasks while clients access the platform for their needs.
            Email integration and AWS S3 were used for communication and storage, while TypeScript, MySQL, Node.js,
            and middleware ensured efficient performance and security.
          </p>
          <p className='mb-2'>
            Through strategic use of technologies like TypeScript and Node.js, the project maintained security and efficiency.
            NextAuth provided secure access, while separate panels catered to admins and clients. Email and AWS S3 enhanced
            communication and storage capabilities, ensuring a seamless user experience.
          </p>
          <p>
            For more info about the project checkout the Github link given below
          </p>
          <a
            href='https://asian-ceramics.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>View</button>
          </a>
        </div>

        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Tools & Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NextJS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TypeScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> AWS S3
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Mysql
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NextAuth
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SMTP
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Blogging;