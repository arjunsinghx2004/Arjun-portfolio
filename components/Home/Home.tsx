import React from 'react'
import Hero from './Hero/Hero';
import Services from './Service/Service';
import { RxResume } from 'react-icons/rx';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <RxResume />
    </div>
  )
};

export default Home
