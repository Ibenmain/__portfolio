import Image from 'next/image';
import React from 'react';
import Marquee from '../ui/marquee';



const ReviewCard = ({
  img,
  alt,
  index
}: {
  img: string;
  alt: string;
  index: number;
}) => {
  return (
    <figure>
      <Image
        src={img}
        alt={alt}
        width={0}
        height={0}
        className={`opacity-0 animate-fadeIn w-[75%]`}
        style={{ animationDelay: `${index * 0.2}s` }}
      />
    </figure>
  );
};

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
        <Marquee pauseOnHover className="[--duration:20s] border  space-x-48">
          {techLogos.map((logo, index) => (
            <div key={index} className="transition-transform duration-300 border transform hover:-translate-y-4 hover:scale-125">
              <ReviewCard img={logo.src} alt={logo.alt} index={index} />
            </div>
          ))}
        </Marquee>
      </div>
      <p className="absolute right-0 bottom-0 text-sm p-2 opacity-10">
        © 2024 - Built with Next.js by ibenmain
      </p>
    </footer>
  );
};

export default Footer;
