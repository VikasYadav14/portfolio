import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn, FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import ResumeImg from '../public/resume.jpg';

const resume = () => {
  return (
    <>
      <Head>
        <title>Vikas | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Vikas Yadav</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/imvikasyadav"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href="https://github.com/VikasYadav14"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a href='Vikas_Resume.pdf' download>
              <FaDownload size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <Image src={ResumeImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </>
  );
};

export default resume;
