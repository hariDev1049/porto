import React from 'react';
import ImageCaraousel from '../ImageCaraousel/ImageCaraousel';

const About = () => {
  return (
    <>
      <div className="max-sm:flex flex-col items-center">
        <h3 className="font-bold md:mt-20">About Me</h3>
        <p className="text-balance w-5/6 pt-6 mb-3 max-sm:text-center sm:items-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem rerum porro quod amet iure esse quis voluptas voluptate
          aspernatur nostrum eligendi eaque necessitatibus doloribus.
        </p>
      </div>
      <ImageCaraousel />
    </>
  );
};

export default About;
