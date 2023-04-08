import Image from 'next/image';
import React, { useState } from 'react';
import Node from '../public/assets/skills/node.png';
import MongoDB from '../public/assets/skills/mongo.png';
import Javascript from '../public/assets/skills/javascript.png';
import Express from '../public/assets/skills/express.png';
import Mysql from '../public/assets/skills/mysql.png';
import Git from '../public/assets/skills/git.png';
import Github from '../public/assets/skills/github.png';
import Postman from '../public/assets/skills/postman.png';
import Reddis from '../public/assets/skills/redis.png';
import AWS from '../public/assets/skills/aws.png';
import HTML from '../public/assets/skills/html.png';
import CSS from '../public/assets/skills/css.png'
import Tailwind from '../public/assets/skills/tailwind.png';
import ReactImg from '../public/assets/skills/react.png';
import Next from '../public/assets/skills/nextjs.png';
import AllImg from '../public/assets/web-developer.png'
import FrontImg from '../public/assets/frontend.png'
import BackImg from '../public/assets/backend.png'

const Skills = () => {
  const [all, setAll] = useState(true);
  const [frontend, setFrontend] = useState(false);
  const [backend, setBackend] = useState(false);

  function ShowAll() {
    setAll(true);
    setFrontend(false);
    setBackend(false);
  }
  function ShowFrontend() {
    setAll(false);
    setFrontend(true);
    setBackend(false);
  }
  function ShowBackend() {
    setAll(false);
    setFrontend(false);
    setBackend(true);
  }

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className=''>
        <div className="flex justify-center rounded-md py-2 cursor-pointer">
          <div
            className={`flex px-4 py-2 hover:bg-indigo-400 hover:text-white rounded-l-md shadow-lg shadow-gray-400 ${all && `bg-indigo-400 text-white`}`}
            onClick={ShowAll}
          >
            <Image src={AllImg} alt='/' height={24} width={24} ></Image>
            <h3>All</h3>
          </div>
          <div
            className={`flex px-4 py-2 hover:bg-indigo-400 hover:text-white shadow-lg shadow-gray-400 ${frontend && `bg-indigo-400 text-white`}`}
            onClick={ShowFrontend}
          >
            <Image src={FrontImg} alt='/' height={24} width={24} ></Image>
            <h3>Frontend</h3>
          </div>
          <div
            className={`flex px-4 py-2 hover:bg-indigo-400 hover:text-white rounded-r-md shadow-lg shadow-gray-400 ${backend && `bg-indigo-400 text-white`}`}
            onClick={ShowBackend}
          >
            <Image src={BackImg} alt='/' height={24} width={24}></Image>
            <h3>Backend</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Javascript} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>
          {!frontend && (
            <>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={Node} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>NodeJS</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={MongoDB} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>MongoDb</h3>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* frontend techstacks */}
          {!backend && (
            <>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={HTML} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>HTML</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={CSS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={Tailwind} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Tailwind CSS</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={ReactImg} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>ReactJS</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={Next} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>NextJS</h3>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* backend techstacks */}
          {!frontend && (
            <>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={Express} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>ExpressJs</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={Mysql} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>MySql</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={Postman} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Postman</h3>
                  </div>
                </div>
              </div>
            </>
          )}
          {all && (
            <>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={Git} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Git</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={Github} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Github</h3>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* backend techstacks */}
          {!frontend && (
            <>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={AWS} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>AWS</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={Reddis} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Redis</h3>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
