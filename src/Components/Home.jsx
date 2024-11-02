import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '../assets/LIVING.jpg';
import Sliders from './Sliders';
import Testimonial from './Testimonial';
import img1 from '../assets/img2.jpg'
import { Link } from 'react-router-dom';
import { LuSofa } from "react-icons/lu";
import vedio from '../assets/vedio.mp4'
import vdimg from '../assets/vdimg.jpg'
import { FaRegLightbulb } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { IoMdCube } from "react-icons/io";
import { FaBuildingColumns } from "react-icons/fa6";
import Table from './Table';
 

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides1 = [
    {
      title: 'Clients Challenge',
      description: 'I would love to design my apartment so that it looks more unique and customized, and not so cookie-cutter',
      img: 'https://images.ctfassets.net/5de70he6op10/5pZNUn004WBxKKAeE1fp14/382ea97b8515a717b28419001e12c335/655582913-furniture_gateway_ls_06.jpg?w=2648&q=80&fm=webp',
    },
    {
      title: 'Clients Challenge',
      description: 'I would love to design my apartment so that it looks more unique and customized, and not so cookie-cutter',
      img: 'https://images.ctfassets.net/5de70he6op10/5suH4iOs1z6eUxrgaL0nlp/d9757980c0f02d383b9581ec5fa7510f/655582837-furniture_gateway_ls_07.jpg?w=2648&q=80&fm=webp',
    },
    {
      title: 'Clients Challenge',
      description: 'I would love to design my apartment so that it looks more unique and customized, and not so cookie-cutter',
      img: 'https://images.ctfassets.net/5de70he6op10/5wMFv3VNUhRfKQqj4IGtNx/1d6615d8d60d4631508b1e9ba97ca3f9/655582826-furniture_gateway_ls_09.jpg?w=2648&q=80&fm=webp',
    },
  ];

  const updateSlider = (index) => {
    setCurrentIndex((index + slides1.length) % slides1.length); 
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateSlider(currentIndex + 1);
    }, 2000);
    return () => clearInterval(interval); 
  }, [currentIndex]);

  return (
    <div className='bg-black'>
      {/* Background Section */}
      <div
  className="relative bg-cover bg-center h-screen"
  style={{
    backgroundImage: `url(${img})`, // Changed to lowercase 'url' for CSS compatibility
  }}>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-8 lg:px-10">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4 font-serif leading-tight">
      Home is the starting place of love, <br />
      hope, and dreams.
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-white mb-8">
      The details are not the details. They make the design.
    </p>
    <a
  href="/contact"
  className="text-white font-bold py-3 px-6 rounded-2xl transition duration-300 transform hover:scale-105"
  style={{ backgroundColor: '#A239CA' }} // Inline style for the button color 
  >
  START MY TRANSFORMATION
</a>
  </div>
</div>
      {/* How It Works Section */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-black p-6">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#A239CA] to-[#4717F6]">
  How it Works: Our Easy Process
</h1>

  <p className="text-lg sm:text-2xl text-white max-w-2xl mb-10 mt-6 md:mt-8 lg:mt-10 font-serif">
    Choose from unique design concepts from multiple accomplished online interior designers.
  </p>
  <div className="relative w-full max-w-4xl mt-8 mx-auto">
  <video
    className="w-full h-auto rounded-lg shadow-xl border-4 border-gray-300 hover:shadow-2xl transition-shadow duration-300"
    controls
    src={vedio}
    poster={vdimg} >
    Your browser does not support the video tag.
  </video>
</div>
</div>
     {/* hello section  */}
     <div className="text-center py-10 bg-black">
  <h1 className="text-3xl font-bold mb-4 text-white">Work Online With The Finest Interior Designers</h1>
  <p className="text-lg text-white mb-8">Get award-winning personalized online interior design help</p>
  <div className="flex justify-center space-x-4 sm:space-x-10 flex-wrap">
    {[
      { icon: <LuSofa />, text: 'Up to 45% off at +350 furniture stores' },
      { icon: <FaRegLightbulb />, text: 'Concepts from multiple top designers' },
      { icon: <TbPhoneCall />, text: 'One-on-one interior design consultation' },
      { icon: <IoMdCube />, text: '3D model of your space' },
      { icon: <FaBuildingColumns />, text: 'Color palette & floor plan' },
    ].map(({ icon, text }, index) => (
      <div key={index} className="flex flex-col items-center max-w-xs">
        <div className="text-white text-5xl">{icon}</div> {/* Adjust the size with 'text-5xl' */}
        <p className="text-white mt-4 text-center">{text}</p>
      </div>
    ))}
  </div>
</div>
<Table/>
      {/* Other Sections */}
      <Sliders />
      <Testimonial />
      <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#A239CA] to-[#4717F6] text-center">
  Our Services
</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
    {/* Card 1 */}
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">Save Time</h3>
      <p className="text-gray-700">
        Realistic 3D model & top professional help to take the guesswork out of the designing process.
      </p>
    </div>
    {/* Card 2 */}
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">Save Money</h3>
      <p className="text-gray-700">
        Top talent for up to 80% less than traditional interior design & trade discounts of 5% to 45% at the top vendors.
      </p>
    </div>
    {/* Card 3 */}
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">Convenient & Stress Free</h3>
      <p className="text-gray-700">
        A fun and easy white-glove service including everything from design to convenient ordering.
      </p>
    </div>
  </div>
</div>
<div className="container mx-auto py-12 px-4 flex flex-col lg:flex-row items-center bg-black text-white">
  {/* Content Section */}
  <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#A239CA] to-[#4717F6] sm:ml-8 md:ml-12 lg:ml-16">
      Think you can't afford beautiful interior design? 
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A239CA] to-[#4717F6]">Think again.</span>
    </h2>
    <div className="flex justify-center">
      <Link to='/contact'>
        <button className="mt-4 px-20 py-4 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
      </Link>
    </div>
  </div>
  {/* Image Section */}
  <div className="lg:w-1/2">
    <img
      src={img1} // Replace with your image URL
      alt="Descriptive Alt Text"
      className="w-full h-auto rounded-lg shadow-lg"/>
  </div>
</div>
<div className="container mx-auto py-12 px-4 text-center">
  <h1 className="text-4xl mb-6 font-serif text-blue-900 underline">Featured & Trusted By</h1>
  <div className="flex flex-wrap justify-center space-x-4 bg-gray-50">
    {/* Advertisement Logos */}
    {[
      "https://cdn.decorilla.com/s3cdn/static/img/asseen/AD_Architectural_Digest_Logo-2.png",
      "https://cdn.decorilla.com/s3cdn/static/img/asseen/nyt-logo-379x64.png",
      "https://cdn.decorilla.com/s3cdn/static/img/asseen/dwell-logo.png",
      "https://cdn.decorilla.com/s3cdn/static/img/asseen/new-york-magazine-logo.png",
      "https://cdn.decorilla.com/s3cdn/static/img/asseen/hgtv-logo.png",
    ].map((src, index) => (
      <div key={index} className="flex items-center justify-center my-4">
        <img
          src={src}
          alt={`Advertisement ${index + 1}`}
          className="w-36 h-auto object-contain max-h-20" // Maintain aspect ratio and set max height
        />
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default Home;
