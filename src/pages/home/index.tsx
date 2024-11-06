import Image from 'next/image';
import React from 'react';



const HomePage = () => {
  return (
    <div className='h-screen flex justify-center items-center '>
      <Image
        src='/images/avatar.svg'
        alt='Picture of the author'
        className='absolute left-0 bottom-36 hidden sm:block' // Position the avatar on the left
        width={400}
        height={400}
      />
      <div className='flex flex-col justify-center items-center text-white text-center'>
        <h1 className='text-4xl sm:text-6xl font-bold border-b-2 border-white'>HEY, I’m ISSAM BENMAINA</h1>
        <p className='text-lg sm:text-2xl'>
          I am a FRONT-END DEVELOPER and currently a student at 1337 coding school.
        </p>
      </div>
    </div>
  );
};

export default HomePage;


