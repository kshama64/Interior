import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Slider from 'react-slick';
import img from '../assets/floor.jpg';
import Faq from './Faq';
import { Link, NavLink } from 'react-router-dom';
import vd1 from '../assets/vdimg1.mp4';  // Video file import
import vdimg from '../assets/vdimg.jpg'
import vd2 from '../assets/vd2.mp4'
import vd3 from '../assets/vd3.mp4'
import vdimg1 from '../assets/vdimg1.jpg'
import vdimg2 from '../assets/vdimg2.jpg'
import img1 from '../assets/home.jpg'
import img2 from '../assets/home1.jpg'
import img3 from '../assets/DINING.JPG'
import img4 from '../assets/home3.jpg'
import img5 from '../assets/CAM-1a.jpg'
import img6 from '../assets/CAM-4.jpg'
import { FaS } from 'react-icons/fa6';

const Interior = () => {
  const [typeEffect] = useTypewriter({
    words: [' Our Easy Online Process'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='bg-black'>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.ctfassets.net/5de70he6op10/5pZNUn004WBxKKAeE1fp14/382ea97b8515a717b28419001e12c335/655582913-furniture_gateway_ls_06.jpg?w=2648&q=80&fm=webp)',
        }}>
        <div className="absolute inset-0 bg-black opacity-50"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-white text-5xl md:text-6xl ml-14 mt-3 font-bold">
            <span className="text-white">Design, Collaborate, Transform:</span>
            {typeEffect}
            <Cursor/>
          </h1>
          <Link to="/contact">
            <button className="mt-20 px-10 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition duration-200 ease-in-out">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <h1 className="text-5xl font-bold mb-4 text-center mt-10 font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#A239CA] to-[#4717F6]">
  Online Interior Design Services For Any Space.
</h1>

      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-blackk">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4 font-serif text-white">Tell us your needs</h2>
          <p className="text-white text-2xl">
            To start your design project you'll complete a quick and easy questionnaire, let us know your preferences, attach photos of your room, and choose the inspiration you love.
          </p>
        </div>

        {/* Image Slider */}
        <div className="md:w-1/2 p-4">
          <Slider {...sliderSettings}>
            <div>
              <img
                src="https://images.ctfassets.net/5de70he6op10/5suH4iOs1z6eUxrgaL0nlp/d9757980c0f02d383b9581ec5fa7510f/655582837-furniture_gateway_ls_07.jpg?w=2648&q=80&fm=webp"
                alt="Interior Design 1"
                className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <div>
              <img
                src="https://cdn.decorilla.com/imgp/gif/a4b66c54-42f9-4068-8965-4dc42a3bcd28/Online-interior-design-process-3D-renderings.gif"
                alt="Interior Design 2"
                className="w-full h-auto rounded-lg shadow-md"/>
            </div>
            <div>
              <img
                src="https://cdn.decorilla.com/imgp/png/d8a49169-ab43-47c4-ad1f-71e31f303145/Online-interior-design-process-ends-with-your-dream-room.png"
                alt="Interior Design 3"
                className="w-full h-auto rounded-lg shadow-md"/>
            </div>
          </Slider>
        </div>
      </div>

      {/* Design Inspirations Section */}
      <div className="p-8 bg-black">
      <h2 className="text-5xl font-bold mb-4 text-center font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#A239CA] to-[#4717F6]">
  Our Design Inspirations
</h2>
        <div className="flex justify-center mt-20">
          <img
            src={img}
            alt="Design Inspiration"
            className="w-full md:w-3/4 h-auto rounded-lg shadow-md"/>
        </div>
      </div>

      {/* Work closely Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-black">
        <div className="md:w-1/2 p-4">
          <Slider {...sliderSettings}>
            <div>
              <img
                src="https://images.ctfassets.net/5de70he6op10/5suH4iOs1z6eUxrgaL0nlp/d9757980c0f02d383b9581ec5fa7510f/655582837-furniture_gateway_ls_07.jpg?w=2648&q=80&fm=webp"
                alt="Interior Design 1"
                className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <div>
              <img
                src="https://cdn.decorilla.com/imgp/gif/a4b66c54-42f9-4068-8965-4dc42a3bcd28/Online-interior-design-process-3D-renderings.gif"
                alt="Interior Design 2"
                className="w-full h-auto rounded-lg shadow-md"/>
            </div>
            <div>
              <img
                src="https://cdn.decorilla.com/imgp/png/d8a49169-ab43-47c4-ad1f-71e31f303145/Online-interior-design-process-ends-with-your-dream-room.png"
                alt="Interior Design 3"
                className="w-full h-auto rounded-lg shadow-md"/>
            </div>
          </Slider>
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4 font-serif text-white">Work closely with your chosen designer</h2>
          <p className="text-2xl text-white">
            Discover the art of interior design with our expert services. Whether you want to refresh your home or create a new atmosphere, our team will help you achieve your vision with creativity and style.
          </p>
          <NavLink to="/contact">
            <button className="mt-6 px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition duration-200 ease-in-out">
              Get Started
            </button>
          </NavLink>
        </div>
      </div>

      {/* New Section with Three Videos */}
      <div className="p-8 bg-black">
      <h2 className="text-4xl font-bold mb-4 text-center font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#A239CA] to-[#4717F6]">
  Explore More Designs
</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <video
            className="w-full h-auto rounded-lg shadow-lg border-4 border-gray-300 hover:shadow-xl transition-shadow duration-300"
            controls
            src={vd1}
            poster={vdimg} // Update with real poster URL
          >
            Your browser does not support the video tag.
          </video>
          <video
            className="w-full h-auto rounded-lg shadow-lg border-4 border-gray-300 hover:shadow-xl transition-shadow duration-300"
            controls
            src={vd2}
            poster={vdimg1}>
            Your browser does not support the video tag.
          </video>
          <video
            className="w-full h-auto rounded-lg shadow-lg border-4 border-gray-300 hover:shadow-xl transition-shadow duration-300"
            controls
            src={vd3}
            poster={vdimg2}>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="p-6 lg:p-12">
      {/* Design & Build Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="flex justify-center">
          <img
            src={img1}
            alt="Design and Build"
            className="rounded-lg shadow-lg object-cover h-64 w-full lg:w-auto" />
        </div>
        <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4  font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#A239CA] to-[#4717F6]">
  DESIGN & BUILD
</h2>
          <p className="text-white text-2xl">
            Work with our Design Managers. Choose one of our Affordable Home
            Interior Packages, with complete transparency in pricing, and most
            competitive price points. Our extensive experience in project
            delivery guarantees flawless interiors.
          </p>
        </div>
      </div>

      {/* Modular Solutions Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex justify-center order-last lg:order-first">
          <img
            src={img2}
            alt="Modular Solutions"
            className="rounded-lg shadow-lg object-cover h-64 w-full lg:w-auto" />
        </div>
        <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4  font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#A239CA] to-[#4717F6]">MODULAR SOLUTION
</h2>
          <p className="text-white text-2xl">
            We have an extensive and wide range of Modular Kitchen & Wardrobes
            designs. Also a wide variety of TV Units, Crockery Units, Vanity,
            Study Tables, Bar Cabinets, etc., for the entire Home. Top Quality
            Materials is used with long on-site warranties.
          </p>
        </div>
      </div>
    </div>

    <div className="p-6 lg:p-12">
      {/* Pricing & Packages Title */}
      <div className="bg-gradient-to-r from-[#A239CA] to-[#4717F6] text-white text-center py-3 mb-8">
  <h1 className="text-2xl lg:text-3xl font-bold">Pricing & Packages</h1>
</div>


      {/* First Section: Design Now - Build Later */}
      <div className="border-2 border-red-600 rounded-lg overflow-hidden mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Design Now */}
          <div className="p-6 lg:p-12 text-center border-b-2 lg:border-b-0 lg:border-r-2 border-red-600">
            <h2 className="text-xl lg:text-2xl font-bold mb-4 text-white">Design Now</h2>
            <p className="text-3xl font-bold text-white mb-2">Rs 9900 /room</p>
            <p className="text-sm text-white">(Design Fee Only)</p>
            <p className="text-red-600 font-bold mt-4">
              25% OFF* on Design Fees on Selecting Build/Furniture
            </p>
            <p className="text-sm mt-2 text-white">(Get Detailed Project Estimate before Sign-up)</p>
          </div>

          {/* Build Later */}
          <div className="p-6 lg:p-12 text-left">
            <h2 className="text-xl lg:text-2xl font-bold mb-4 text-white">Build Later</h2>
            <ul className="list-disc list-inside space-y-2 text-white">
              <li>Complete Design Concepts and Theme</li>
              <li>Complete Room Design including Layout, Ceiling, Lighting, Wall Designs, Flooring, Furniture</li>
              <li>One Market/Site Visit for every 3 Rooms Signed</li>
            </ul>
            <h3 className="font-bold mt-6 text-white">What's Additional</h3>
            <p className='text-white'>3D Views/Extra Site/Market Visits @2500 per view/visit</p>
          </div>
        </div>
      </div>

      {/* Second Section: Full House Interior */}
      <div className="border-2 border-red-600 rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-[#A239CA] to-[#4717F6] text-white text-center py-3 mb-8">
  <h1 className="text-2xl lg:text-3xl font-bold">Full House Interior</h1>
</div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side: Full House Price */}
          <div className="p-6 lg:p-12 text-center border-b-2 lg:border-b-0 lg:border-r-2 border-red-600">
            <p className="text-3xl font-bold text-white mb-2">Rs 4900 /room</p>
            <p className="text-sm text-white">(Design & Project Coordination Fee)</p>
            <p className="text-sm mt-2 text-white">(Get Detailed Project Estimate before Sign-up)</p>
          </div>

          {/* Right Side: What's Included */}
          <div className="p-6 lg:p-12 text-left">
            <h3 className="font-bold mb-4 text-white">What's Included</h3>
            <ul className="list-disc list-inside space-y-2 text-white">
              <li>Complete Design Concepts and Theme</li>
              <li>Complete Room Design including Layout, Ceiling, Lighting, Wall Designs, Flooring, Furniture with Material board and 3D Visuals</li>
              <li>Complete Project Coordination with construction through our trusted vendors</li>
              <li>3D views. One View per Room only</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
     <div className="p-6 lg:p-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#A239CA] to-[#4717F6] text-white text-center py-3 mb-8">
  <h1 className="text-2xl lg:text-3xl font-bold">Design & Build</h1>
</div>


      {/* Grid Layout for Features */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center mb-12">
        {/* Personalized Designs */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Personalized Designs</h2>
          <p className="text-white">
            A Dedicated Design Manager provides you with personalized designs
            and guides you through the entire process of Design & Construction.
          </p>
        </div>

        {/* Professional Managements */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Professional Managements</h2>
          <p className="text-white">
            Professional Construction provided through vetted & trusted contractors. Experienced Project Managers oversee the full project with Regular Updates.
          </p>
        </div>

        {/* Competitive Pricing */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Competitive Pricing</h2>
          <p className="text-white">
            Transparent & Detailed Price Quotation. Quotations are item-based wherein every work item is listed, described with specifications, and standardized rates. Design Solutions offered at a low flat fee.
          </p>
        </div>

        {/* Timely Completion */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Timely Completion</h2>
          <p className="text-white">
            Project work is tracked with Daily/Weekly task lists, with detailed Gantt Charts. Frequent checks on quality and work technique are done to avoid any re-work and delays.
          </p>
        </div>

        {/* Superior Quality */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Superior Quality</h2>
          <p className="text-white">
            Top Quality Materials are used. Extensive quality checks are done with an extensive point list to ensure flawless product delivery and interior.
          </p>
        </div>

        {/* Long Warranties */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Long Warranties</h2>
          <p className="text-white">
            Up to 05 years warranty on Modular Furniture. India’s first & only on-site service warranty for one year for the Civil Interior Works.
          </p>
        </div>
      </div>

      {/* Quote Section */}
      <div className="text-center italic text-xl font-semibold mb-8">
        <p className='text-white'>“Our Reward is a Project Well Done, a Happy Customer”</p>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image 1 */}
        <div className="flex justify-center">
          <img
            src={img3}
            alt="Interior Design"
            className="rounded-lg shadow-lg object-cover w-full lg:w-auto"/>
        </div>

        {/* Image 2 */}
        <div className="flex justify-center">
          <img
            src={img4}
            alt="Interior Design"
            className="rounded-lg shadow-lg object-cover w-full lg:w-auto"  />
        </div>
      </div>
    </div>
    <div className="p-6 lg:p-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#A239CA] to-[#4717F6] text-white text-center py-3 mb-8">
  <h1 className="text-2xl lg:text-3xl font-bold">Modular Kitchen & wordrobes</h1>
</div>


      {/* Grid Layout for Features */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center mb-12">
        {/* Personalized Designs */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Professional Services</h2>
          <p className="text-white">
            Modular Kitchens are designed and installed by our experts.
          </p>
        </div>

        {/* Professional Managements */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">45-Days Delivery</h2>
          <p className="text-white"> 
            Get your chosen products installed in 45 days.<br></br>Timely Delivery is a commitment
          </p>
        </div>

        {/* Competitive Pricing */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">05-Year Warranty</h2>
          <p className="text-white">
            All our modular furniture comes with upto 5 year<br></br> warranty for any manufacturing defects.T&C
          </p>
        </div>

        {/* Timely Completion */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Made for India</h2>
          <p className="text-white">
            Indian Kitchen Designed and Modeled as per Indian<br></br> needs, Food, utensils and finishes
          </p>
        </div>

        {/* Superior Quality */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Premier Experience</h2>
          <p className="text-white">
            Customer centric approach to ensure you get the best experience.
          </p>
        </div>

        {/* Long Warranties */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Personalized for you</h2>
          <p className="text-white">
            Kitchen designed keeping your needs in mind.<br></br> Designed just for you.
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
            src={img5}
            alt="Interior Design"
            className="rounded-lg shadow-lg object-cover w-full lg:w-auto"/>
        </div>

        {/* Image 2 */}
        <div className="flex justify-center">
          <img
            src={img6}
            alt="Interior Design"
            className="rounded-lg shadow-lg object-cover w-full lg:w-auto"/>
        </div>
      </div>
    </div>
    <Faq/>
    

      {/* Trusted By Section */}
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

export default Interior;
