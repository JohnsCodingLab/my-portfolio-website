'use client';
import Navbar from '@/components/Navbar';
import Main from '@/components/Main';
import React from 'react';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contacts from '@/components/Contacts';

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <br />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}
