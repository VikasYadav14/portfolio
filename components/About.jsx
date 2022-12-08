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
            I am a Backend Developer trainee at functionUp. During my training, 
            I have completed 5+ projects using Backend technologies. Talking about 
            my Technical skills - I am skilled in JavaScript, NodeJs, Expressjs, 
            MongoDB, AWS S3, Redis, Mysql, Python, Java and some tools - VS Code, Postman.
            I specialize in building responsive back-end API&apos;s that connect with front end applications.
          </p>
          <p className='py-2 text-gray-600'>
            I’m passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building back-end applications using NodeJS, MongoDb, Javascript, and
            Mysql, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
            
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
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
