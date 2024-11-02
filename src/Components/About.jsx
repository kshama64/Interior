import React from 'react';
import img from '../assets/IMG1.jpg';
import img1 from '../assets/img2.jpg';

export default function About() {
  return (
    <div className='mt-20 bg-black'>
      {/* Section 1: Mission */}
      <div className="bg-black py-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A239CA] to-[#4717F6] mb-8 font-serif">
  Our Mission
</h2>

            <p className="text-base sm:text-lg md:text-xl text-white">
              Our mission is to innovate and create architectural designs that<br></br> not only reflect the future but also improve the quality of living.<br></br> We are committed to sustainable development and to transforming spaces into living, breathing works of art.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={img}
              alt="Mission Image"
              className="w-full h-auto rounded-lg shadow-lg object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"/>
          </div>
        </div>
      </div>
      {/* Section 2: Vision */}
      <div className="bg-black py-12 px-4 lg:px-8 ">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={img1}
              alt="Vision Image"
              className="w-full h-auto rounded-lg shadow-lg object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"/>
          </div>
          <div className="md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A239CA] to-[#4717F6] mb-8 font-serif ml-20">
  Our Vision
</h2>

            <p className="text-base sm:text-lg md:text-xl text-white ml-20">
              We envision a world where every space is designed with purpose, sustainability, and beauty. Our aim is to be at the forefront of architectural innovation, creating spaces that inspire and shape the future of urban living.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Values */}
      <div className="bg-black py-12 px-4 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#A239CA] to-[#4717F6] mb-8">
  Our Values
</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Value 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-d00e4ad/www.decorilla.com/online-decorating/wp-content/uploads/2024/08/Eclectic-transitional-style-makeover-before-and-after-by-Decorilla.jpg"
              alt="Innovation"
              className="w-full h-auto mb-4 rounded-lg object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"/>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
            <p className="text-base text-gray-700">
              We strive to push the boundaries of what’s possible, always seeking out new ideas and technologies to improve our designs.
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-d00e4ad/www.decorilla.com/online-decorating/wp-content/uploads/2024/08/Modern-old-world-interior-design-before-and-after-by-Decorilla-2048x1365.jpg"
              alt="Sustainability"
              className="w-full h-auto mb-4 rounded-lg object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"/>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainability</h3>
            <p className="text-base text-gray-700">
              We are dedicated to building with sustainability in mind, ensuring that our designs respect the environment and reduce our carbon footprint.
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-d00e4ad/www.decorilla.com/online-decorating/wp-content/uploads/2024/08/Contemporary-kitchen-trends-2025--2048x1148.jpg"
              alt="Integrity"
              className="w-full h-auto mb-4 rounded-lg object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"/>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
            <p className="text-base text-gray-700">
              Honesty, transparency, and strong ethical standards guide everything we do, from our designs to our client relationships.
            </p>
          </div>
        </div>
      </div>
      {/* Section 4: Additional Designs */}
      <div className="bg-black py-12 px-4 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#A239CA] to-[#4717F6] mb-8">
  Our Designs
</h2>
        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div>
            <img
              src="https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-d00e4ad/www.decorilla.com/online-decorating/wp-content/uploads/2022/02/Tudor-house-interior-makeover-before-and-after-by-Decorilla-2048x1365.jpg"
              alt="Design 1"
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"/>
          </div>
          {/* Image 2 */}

          <div>
            <img
              src="https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-d00e4ad/www.decorilla.com/online-decorating/wp-content/uploads/2024/08/Modern-old-world-interior-design-before-and-after-by-Decorilla-2048x1365.jpg"
              alt="Design 2"
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"/>
          </div>
          {/* Image 3 */}

          <div>
            <img
              src="https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-d00e4ad/www.decorilla.com/online-decorating/wp-content/uploads/2022/09/Modern-Farmhouse-interior-design-guide-by-Decorilla-2048x1365.jpeg"
              alt="Design 3"
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"/>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-12">

      {/* Featured Section */}

      <div className="text-center mb-8">
        <h2 className="text-xl lg:text-3xl font-semibold italic text-red-600">
          Gray Homez features in Forbes India
        </h2>
        <p className="text-white mt-2 text-xl">
          “Gray Homez offers affordable interior design solutions” : 
          <span className="font-bold"> Forbes India</span>
        </p>
      </div>

      {/* Logos Section */}

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* YourStory Logo */}
        <div className="flex justify-center">
          <img
            src="https://www.digilytics.ai/images/yourstory.png" // Replace with YourStory logo source
            alt="YourStory"
            className="w-32 h-auto"/>
        </div>
        {/* Hindustan Times Logo */}
        
        <div className="flex justify-center">
          <img
            src="https://www.oshonews.com/wp-content/uploads/2016/03/Hindustan-Times-logo.png" // Replace with Hindustan Times logo source
            alt="Hindustan Times"
            className="w-32 h-auto"/>
        </div>
      </div>
      </div>
    </div>
  );
}
