import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className='w-ful md:h-screen flex item-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#0B0633]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>I am not your normal developer</p>
          <p classname='py-2 text-gray-600'>
            I have spent the last 12 years in the fire serrvice working as a professional
            firefighter & paramedic. I have always had a knack for technology and working with
            computers. In 2019 I started working with HTML & CSS to make some minor edits on a small
            business website that i was operating. What i thought was just a few small edits turned
            into a love for programming
          </p>
          <p className='py-2 text-gray-600'>
            Facinated with how intricate programming can be i was quickly drawn to learn more. I
            started learning javascript and was even more ethused with making websites interactive.
            I then started freelancing for e-commerce companies on the shopify platform. I am now
            spending my time building projects with React JS, Next JS, and learning new
            technologies.
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Check out some of my latest projects.
          </p>
        </div>
        <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center  hover:scale-105 ease-in duration-300'>
          <Image
            className='rounded-xl'
            src='/../public/assets/JFLBG.jpg'
            alt='/'
            width='350'
            height='300'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
