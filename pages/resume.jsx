import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn, FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import ResumeImg from '../public/Vikas_Resume.jpg';
import Alert from '../components/Alert';

const Resume = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setShowAlert(true);
  }, []);

  const closeAlert = () => {
    setShowAlert(false);
  };

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
      {showAlert && <Alert onClose={closeAlert} />}
      <div>
      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Vikas Yadav</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/imvikasyadav"
              title='LinkedIn'
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href="https://github.com/VikasYadav14"
              title='GitHub'
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a href='Vikas_Resume.pdf' download title='Download Resume'>
              <FaDownload size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <Image src={ResumeImg} className="rounded-xl" alt="Vikas_Resume" title='Vikas_Resume' />
        </div>
      </div>
      </div>
    </>
  );
};

export default Resume;
