import React from 'react';
import Dhaya from '../assets/Dhaya.png'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fdf8f6] text-[#333]">
      <div className="relative bg-white p-10 rounded-2xl shadow-lg max-w-lg text-center">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img 
            src={Dhaya}     
            alt="Dhayanithi" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="mt-16 text-3xl font-bold">Hi, I'm Dhayanithi</h1>
        <h3 className="text-lg text-gray-600 mt-2">Email: 545nithi@gmail.com</h3>
        <h4 className="text-lg text-gray-600">Contact: 9XX6XX12X1</h4>
      </div>
    </div>
  );
};

export default Home;