import React from 'react';
import BlogImg from '../public/assets/projects/Blog-Management.jpeg';
import BookImg from '../public/assets/projects/Book-Management.jpeg';
import UrlImg from '../public/assets/projects/Url-shortener.jpeg';
import ShopImg from '../public/assets/projects/shopping-cart.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Blogging Site"
            backgroundImg={BlogImg}
            projectUrl="/blogging"
            tech="Nodejs, MongoDb, Express"
          />
          <ProjectItem
            title="Book Management"
            backgroundImg={BookImg}
            projectUrl="/book-management"
            tech="Nodejs, MongoDb, Express"
          />
          <ProjectItem
            title="URL-Shortener"
            backgroundImg={UrlImg}
            projectUrl="/url-shortener"
            tech="NodeJs, MongoDB, Redis"
          />
          <ProjectItem
            title="Shopping-Cart"
            backgroundImg={ShopImg}
            projectUrl="/shopping"
            tech="NodeJs, MongoDB, Redis,Aws-S3"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
