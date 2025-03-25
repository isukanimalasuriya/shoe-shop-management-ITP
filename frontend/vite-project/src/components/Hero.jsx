import React from 'react'
import homeshoe from '../assets/shoe1.png'
const Hero = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-white">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold leading-tight">
            YOUR FEET <br /> DESERVE <br /> THE BEST
          </h1>
          <p className="text-gray-600 mt-4">
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. 
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          </p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-red-600">
              Shop Now
            </button>
            <button className="border px-6 py-2 rounded-lg shadow-lg hover:bg-gray-100">
              Category
            </button>
          </div>
          <p className="mt-4 text-gray-500">Also Available On</p>
          <div className="flex gap-4 mt-2">
            <img src="/images/flipkart.png" alt="Flipkart" className="h-6" />
            <img src="/images/amazon.png" alt="Amazon" className="h-6" />
          </div>
        </div>
        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img src={homeshoe} alt="Nike Shoe" className="w-120 drop-shadow-lg" />
        </div>
      </div>
    );
  };
  
  export default Hero;
  