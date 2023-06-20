import React from 'react';

export const LandingPage = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen text-4xl font-bold text-blue-600'>
        Welcome to Note-It
        <iframe
          className='mt-5'
          width='560'
          height='315'
          src='https://www.youtube.com/embed/QlPe_rT1WYI?start=38'
          title='YouTube video player'
          frameborder='0'
          muted='true'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          // allowfullscreen
        ></iframe>
      </div>
      <div className='flex flex-row items-center space-x-3 justify-center'>
        <button
          className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transfor  bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700'
          onClick={() => {
            window.location.href = '/login';
          }}
        >
          Login
        </button>
        <button
          className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transfor  bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700'
          onClick={() => {
            window.location.href = '/signup';
          }}
        >
          Signup
        </button>
      </div>
    </>
  );
};
