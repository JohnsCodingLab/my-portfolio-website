import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen flex item-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#0B0633]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>I am not your normal developer</p>
          <p classname='py-2 text-gray-600'>
            I'm Levi John Favour, a versatile web developer with a deep toolkit of skills. From
            ReactJS and NextJS to Tailwind CSS, Material UI, and Bootstrap CSS, I've navigated them
            all during my 2.5+ years in the coding world.
          </p>
          <p className='py-2 text-gray-600'>
            {' '}
            With a National Diploma in Computer Sciences and a track record of success, I've honed
            my craft through meaningful experiences. I proudly contributed as a Front-End Developer
            for the USAF (United States of Africa) for 7 months, playing a role in remarkable
            projects. I also gained valuable insights during my Front-End Developer internship at
            Saultech Nigeria.
          </p>
          <p className='py-2 text-gray-600'>
            What sets me apart? My ability to swiftly grasp new concepts, coupled with my
            collaborative spirit. While I excel at individual work, I thrive in team settings,
            learning from fellow professionals. Versatility is my strength – throw any challenge my
            way, and I'll meet it head-on. Let's build something remarkable together.
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
