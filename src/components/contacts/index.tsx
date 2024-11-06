import Image from 'next/image';
import React from 'react';

const Contacts = () => {
  const links = {
    linkedin: 'https://www.linkedin.com/in/your-profile',
    instagram: 'https://www.instagram.com/your-profile', 
    twitter: 'https://twitter.com/your-profile',         
    dribble: 'https://dribbble.com/your-profile',        
    github: 'https://github.com/your-profile'            
  };

  return (
    <div className='flex flex-col absolute bottom-1/2 right-0 p-4 space-y-4'>
      {Object.entries(links).map(([icon, url]) => (
        <a
          key={icon}
          href={url}
          target="_blank"   
          rel="noopener noreferrer" // Security measure for links opening in new tabs
          className='transition-transform duration-300 transform hover:-translate-x-4 hover:scale-125'
        >
          <Image 
            src={`/images/${icon}.svg`}
            alt={icon}
            width={25}
            height={25}
          />
        </a>
      ))}
    </div>
  );
};

export default Contacts;
