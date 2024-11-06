import React from 'react';

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-white text-center">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="~text-[22px]/[48px] font-bold pb-2  whitespace-nowrap typing-animation">
          HEY, I’m ISSAM BENMAINA
        </h1>
        <p className="text-lg sm:text-2xl max-w-md">
          I am a FRONT-END DEVELOPER and currently a student at 1337 coding school.
        </p>
        <div className="flex items-center space-x-3 text-xl mt-8">
          <div className="w-4 h-4 bg-white rounded-full"></div>
          <span>About Me</span>
          <span className="text-2xl arrow-animation">&#8594;</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
