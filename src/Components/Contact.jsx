import React, { useState } from 'react';

export default function Contact() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    // Validate inputs
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }
    
    // Log form data to console
    console.log('Form Data:', formData);
    
    // Optionally reset the form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="mt-20">
      {/* Get in Touch Section */}
      <div className="bg-black py-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
            GRAY HOMEZ
          </h2>
          <p className="text-base sm:text-lg text-white mb-12">
            Gray Homez is a Design & Construction Company offering creative interior designs at a low flat fee. We offer end-to-end project management and are a one-stop shop for interior solutions. Gray Homez is founded by Ashish, a graduate of the School of Planning & Architecture and PGDM from Xavier Institute of Management, Bhubaneswar. We have delivered more than 500 interior design and construction projects across Delhi NCR and cities Pan India. We offer Interior Design, Construction, Modular Wardrobes & Kitchen, and Furniture in Cities of Delhi, Gurgaon, Noida, and Faridabad. Please call us on 011 41015959 to schedule a meeting with a Designer Manager.
          </p>
          <h1 className="text-2xl font-bold text-white">WWW.grayhomez.com</h1>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-10">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Information</h3>
            <p className="text-gray-700 mb-1">Address: Delhi 336 Near CRC2 mg Road Pillar No.28B <br /> NEW DELHI 110030</p>
            <p className="text-gray-700 mb-1">Phone: +91 9999775915 <br /> +91 9899466959</p>
            <p className="text-gray-700">Email: yamini@grayhomez.com</p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-d00e4ad/www.decorilla.com/online-decorating/wp-content/uploads/2024/07/Midcentury-kitchen-trends-2025-by-DECORILLA-2048x1365.jpg"
              alt="Contact Us"
              className="rounded-lg shadow-lg w-full max-w-xs"
            />
          </div>
        </div>

        {/* Interior Enquiry Form */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 transition duration-200"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 transition duration-200"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 transition duration-200"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
                className="block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 transition duration-200"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
