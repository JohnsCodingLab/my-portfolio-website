import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import netflixImg from '../public/assets/projects/netflix.jpg';
import twitchImg from '../public/assets/projects/twitch.jpg';
import Projectitem from './Projectitem';

const Projects = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <Projectitem
            title='Property-Finder'
            technology='React Js'
            backgroundImg={propertyImg}
            projectUrl='/property'
          />
          <Projectitem
            title='Crypto Verse'
            technology='Next Js'
            backgroundImg={cryptoImg}
            projectUrl='/property'
          />
          <Projectitem
            title='Netflix UI'
            technology='React Js'
            backgroundImg={netflixImg}
            projectUrl='/property'
          />
          <Projectitem
            title='Twitch UI'
            technology='Next Js'
            backgroundImg={twitchImg}
            projectUrl='/property'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
