import React from "react";
import img from '../assets/IMG1.jpg';

function Testimonial() {
  return (
    <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${img})` }}>
      {/* Overlay for dimming background */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 lg:px-16">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          What Our Clients Say
        </h2>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300 flex flex-col justify-between h-full text-gray-900">
            <p className="mb-4 flex-grow">
              “Let me tell you one thing. I am more excited to deal with you because of two reasons: a young enthusiastic professional and a committed girl. All the best. Full support.👌🥰”
            </p>
            <h3 className="text-lg font-semibold">Mr. Anurag Goel</h3>
            <span className="text-sm">Client</span>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300 flex flex-col justify-between h-full text-gray-900">
            <p className="mb-4 flex-grow">
              “From design to execution, Yamini made it real fun and exhilarating. She knows her job well and is a thorough professional. She knows how to transform ordinary to outstanding. Yamini and her team’s work and dedication delivered what we dreamed. We wanted a professional who listens to us and delivers as per our imagination. She delivered exactly what we wanted, and that's the reason I highly recommend Yamini (Sunshine Spaced) for all your interiors.🥰😍”
            </p>
            <h3 className="text-lg font-semibold">Mr. Satin Sachdeva</h3>
            <span className="text-sm">Dlf-2 Gurgaon</span>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300 flex flex-col justify-between h-full text-gray-900">
            <p className="mb-4 flex-grow">
              “It looks beautiful. I am fully satisfied with your work, Yamini.👌🥰👌”
            </p>
            <h3 className="text-lg font-semibold">Sonal Arora</h3>
            <span className="text-sm">Client</span>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300 flex flex-col justify-between h-full text-gray-900">
            <p className="mb-4 flex-grow">
              “ Yamini you have helped me make my parents dream come true, no amount of thanks can measure it but still thank you very much.
            </p>
            <h3 className="text-lg font-semibold">Manish Kaushik
            Emaar Palm Heights (Gurgaon)</h3>
            <span className="text-sm">Client</span>
          </div>

          {/* Testimonial 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300 flex flex-col justify-between h-full text-gray-900">
            <p className="mb-4 flex-grow">
              “The service was excellent, and the design was flawless. Every time I have visitors over, they are amazed at how perfect the interior looks. Highly recommended!”
            </p>
            <h3 className="text-lg font-semibold">Robert Green</h3>
            <span className="text-sm">Marketing Head</span>
          </div>

          {/* Testimonial 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300 flex flex-col justify-between h-full text-gray-900">
            <p className="mb-4 flex-grow">
              “The design was thoughtful and well-executed. I could not have imagined a better result, and the team was wonderful to work with throughout the entire process.”
            </p>
            <h3 className="text-lg font-semibold">Sarah Johnson</h3>
            <span className="text-sm">Owner, Cafe</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
