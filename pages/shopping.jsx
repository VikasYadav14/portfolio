import Image from 'next/image';
import React from 'react';
import shoppingImg from '../public/assets/projects/shopping-cart.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const ShoppingCart = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={shoppingImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Shopping Cart</h2>
          <h3>NodeJS / JavaScript / AWS S3</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This backend code was built using NodeJS, JavaScript, express as framework, used MongoDb 
            as a DataBase and stored product image on AWS. Users are able to add, delete products in cart give reviews 
            of product after creating account and login. To find perfect product users can filtered 
            according to their interest. Admin has different access. he/she can add, delete  product and edit 
            product details . Both admin and local user has authentication and authorization. so admin can manipulate 
            on their added products and local user can see only their selected product in his/her cart.
          </p>
          <p>
            For more info about the project checkout the Github link given below
          </p>
          <a
            href='https://github.com/VikasYadav14/E-Commerce'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          </div>
          
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Tools & Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NodeJS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> ExpressJS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Postman
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> AWS s3
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

export default ShoppingCart;