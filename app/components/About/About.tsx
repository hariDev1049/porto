import React from 'react';
import ImageCaraousel from '../ImageCaraousel/ImageCaraousel';

const About = () => {
  return (
    <div className="flex items-start flex-col">
      <div className="max-sm:flex flex-col items-center">
        <h3 className="font-bold md:mt-20">About Me</h3>
        <p className="text-balance w-5/6 pt-6 mb-3 max-sm:text-center sm:items-center">
          Outside of coding, you'll find me indulging in hobbies like painting,
          gymming, trekking, and cooking, where I find inspiration and balance
          to fuel my creativity.
        </p>
      </div>
      <ImageCaraousel />
    </div>
  );
};

export default About;
