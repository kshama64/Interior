import React from 'react';
import img from '../assets/L block.jpg';
import img1 from '../assets/block1.jpg';
import img2 from '../assets/archi.jpg';
import img3 from '../assets/archi2.jpg';
import img4 from '../assets/archi3.jpg';
import img5 from '../assets/archi6.jpg';
import img6 from '../assets/archi7.jpg';
import Faq from './Faq';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import img7 from '../assets/archi4.jpg';
import img8 from '../assets/archi5.jpg';
import img9 from '../assets/archi14.jpg';
import img10 from '../assets/archi15.jpg';
import img11 from '../assets/archi16.jpg';
import img12 from '../assets/archi17.jpg';
import img13 from '../assets/archi8.jpg'
import img14 from '../assets/archi9.jpg'
import img15 from '../assets/archi10.jpg'
import img16 from '../assets/archi11.jpg'
import img17 from '../assets/archi12.jpg'
import img18 from '../assets/archi13.jpg'

export default function Architecture() {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 images at a time
    slidesToScroll: 2, // Scroll 2 images at a time
    autoplay: true, // Automatically slide
    autoplaySpeed: 3000, // Time between slides in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='bg-black'>
      {/* Section 1: Background Image with Overlay */}
      <div className="relative w-full">
      <div
  className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
  <img
    src={img} // Replace with your image URL
    alt="Descriptive Alt Text"
    className="w-full h-full object-cover"/>
</div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-4 bg-black bg-opacity-60 rounded-lg max-w-lg mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Modern Architecture</h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
              Innovative designs that shape the future of living spaces.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Image on One Side, Content on the Other */}
      <div className="flex flex-col md:flex-row items-center justify-between my-12 p-4 lg:p-8 bg-black">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
  <img
    src={img1}
    alt="Architecture Design"
    className="w-full h-[800px] object-cover rounded-lg shadow-lg" // Increase height for a larger size
  />
</div>

        <div className="w-full md:w-1/2 md:ml-8 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A239CA] to-[#4717F6]">Innovative Living Spaces </h2>

          <p className="mt-10 text-base sm:text-lg md:text-xl text-white leading-relaxed ">
            Explore modern architectural designs that blend functionality and aesthetics, creating spaces that inspire and innovate.
          </p>
          <Link to='/contact'>
            <button className="mt-6 bg-gray-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Section 3: Image Grid with Heading */}
      <div className="bg-black py-12 px-4 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#A239CA] to-[#4717F6] mb-8">
  Explore Our Architectural Designs
</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[img1, img2, img3, img4, img5, img6].map((image, index) => (
            <div key={index} className="h-[600px] transition-transform transform hover:scale-105 hover:shadow-xl">
              <img src={image} alt={`Design ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>
      {/* Section 4: New Slider Section */}
      <div className="bg-black py-12 px-4 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#A239CA] to-[#4717F6] mb-8"> Featured Architectural Projects
</h2>
        <Slider {...sliderSettings}>
          {[img7, img8, img9, img10, img11, img12].map((image, index) => (
            <div key={index} className="px-2">
              <img src={image} alt={`Featured ${index + 1}`} className="w-full h-[1000px] object-cover rounded-lg"/>
            </div>
          ))}
        </Slider>
      </div>
      {/* Section 5: Future of Architecture */}
      <div className="bg-black py-12 px-4 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#A239CA] to-[#4717F6] mb-8">
  Future of Architecture
</h2>
   <div className="flex justify-center">
          <img src={img4} alt="Future Design" className="w-full md:w-2/3 lg:w-1/2 h-auto object-cover rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="p-6 lg:p-12">
  {/* Header */}
  <div className="bg-gradient-to-r from-[#A239CA] to-[#4717F6]  text-white text-center py-3 mb-8">
    <h1 className="text-2xl lg:text-3xl font-bold">Furniture & Decor</h1>
  </div>

  {/* Grid Layout for Features */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-center mb-12">
    {/* Customized */}
    <div>
      <h2 className="text-xl font-bold mb-4 text-white">Customized</h2>
      <p className="text-white">
        Furniture in customized as per design and <br /> your choice and hence is built to order.
      </p>
    </div>
    {/* Superior Quality */}
    <div>
      <h2 className="text-xl font-bold mb-4 text-white">Superior Quality</h2>
      <p className="text-white">
        Top Quality material, Foam and upholstery is used <br /> to provide long lasting durable furniture.
      </p>
    </div>
    {/* Competitive Pricing */}
    <div>
      <h2 className="text-xl font-bold mb-4 text-white">All Styles & Budgets</h2>
      <p className="text-white">
        Latest trends and wide range of styles <br></br>and products catering to all needs 
      </p>
    </div>
    {/* Timely Completion */}
    <div>
      <h2 className="text-xl font-bold mb-4 text-white">warranty on Furniture</h2>
      <p className="text-white">
        All our furniture comes with a 1 year  <br></br>Warranty against manufacturing defects. T&C 
      </p>
    </div>
  </div>
  {/* Quote Section */}
  <div className="text-center italic text-xl font-semibold mb-8">
    <p>“Our Reward is a Project Well Done, a Happy Customer”</p>
  </div>
  {/* Images Section */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Image 1 */}
    <div className="flex justify-center">
      <img
        src={img13}
        alt="Interior Design"
        className="rounded-lg shadow-lg object-cover w-full h-[500px] lg:h-[800px]"/>
    </div>
    {/* Image 2 */}
    <div className="flex justify-center">
      <img
        src={img14}
        alt="Interior Design"
        className="rounded-lg shadow-lg object-cover w-full h-[500px] lg:h-[800px]"/>
    </div>
  </div>
  {/* Additional Images Section (New Row) */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
    {/* Image 3 */}
    <div className="flex justify-center">
      <img
        src={img15} // Replace with your third image source
        alt="Interior Design"
        className="rounded-lg shadow-lg object-cover w-full h-[500px] lg:h-[800px]"/>
    </div>
    {/* Image 4 */}
    <div className="flex justify-center">
      <img
        src={img16} // Replace with your fourth image source
        alt="Interior Design"
        className="rounded-lg shadow-lg object-cover w-full h-[500px] lg:h-[800px]"/>
    </div>
    {/* Image 5 */}
    <div className="flex justify-center">
      <img
        src={img17} // Replace with your fourth image source
        alt="Interior Design"
        className="rounded-lg shadow-lg object-cover w-full h-[500px] lg:h-[500px]"/>
    </div>
    {/* Image 6 */}
    <div className="flex justify-center">
      <img
        src={img18} // Replace with your fourth image source
        alt="Interior Design"
        className="rounded-lg shadow-lg object-cover w-full h-[500px] lg:h-[500px]"/>
    </div>
  </div>
</div>

  <Faq/>
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
}
