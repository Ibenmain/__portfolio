import Image from 'next/image';
import React from 'react';

const Footer = () => {
  const techLogos = [
    { src: '/images/react.svg', alt: 'React logo' },
    { src: '/images/next.svg', alt: 'Next.js logo' },
    { src: '/images/javaScript.svg', alt: 'JavaScript logo' },
    { src: '/images/css.svg', alt: 'CSS logo' },
    { src: '/images/html.svg', alt: 'HTML logo' },
    { src: '/images/redux.svg', alt: 'Redux logo' },
    { src: '/images/tailwind.svg', alt: 'Tailwind CSS logo' },
    { src: '/images/django.svg', alt: 'Django logo' },
  ];

  return (
    <footer className="flex justify-center items-center text-white absolute bottom-0 w-full h-24 sm:h-36 bg-[#26212B] font-sans">
      <div className="flex justify-around items-center w-full px-8 sm:px-32">
        {techLogos.map((logo, index) => (
          <div key={index} className="transition-transform duration-300 transform hover:-translate-y-4 hover:scale-125">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={0}
              height={0}
              className={`opacity-0 animate-fadeIn w-[75%]`}
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          </div>
        ))}
      </div>
      <p className="absolute right-0 bottom-0 text-sm p-2 opacity-10">
        © 2024 - Built with Next.js by ibenmain
      </p>
    </footer>
  );
};

export default Footer;
