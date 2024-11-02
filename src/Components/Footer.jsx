import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../assets/logos.jpg';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-6">
        {/* Logo Section */}
        
        <div className="mb-6 md:mb-0 flex items-center">
          <img src={img} alt="Your Logo" className="h-16 mr-3" />
        </div>
        {/* Navigation Links */}

        <div className="flex flex-col md:flex-row">
          <div className="mb-6 md:mb-0 md:mr-8 lg:mr-16">
            <h2 className="font-semibold text-lg mb-2 mr-40">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-yellow-500 transition duration-300 ease-in-out">Home</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-yellow-500 transition duration-300 ease-in-out">About</a>
              </li>
              <li>
                <a href="/furniture" className="text-gray-400 hover:text-yellow-500 transition duration-300 ease-in-out">Furniture</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-yellow-500 transition duration-300 ease-in-out">Contact</a>
              </li>
              <li>
                <a href="/homedecor" className="text-gray-400 hover:text-yellow-500 transition duration-300 ease-in-out">Home Decor</a>
              </li>
              <li>
                <a href="/interior" className="text-gray-400 hover:text-yellow-500 transition duration-300 ease-in-out">Interior</a>
              </li>
              <li>
                <a href="/architecture" className="text-gray-400 hover:text-yellow-500 transition duration-300 ease-in-out">Architecture</a>
              </li>
            </ul>
          </div>
          {/* Social Media Links */}
          <div className="mb-6 md:mb-0">
  <h2 className="font-semibold text-lg mb-2">Follow Us</h2>
  <div className="flex space-x-6 mt-2">
    <a href="https://www.facebook.com/share/bQwdx16Y3bFHA5FY/?mibextid=LQQJ4d" className="text-gray-400 hover:text-yellow-500 transition duration-300 ease-in-out" aria-label="Follow us on Facebook">
      <FaFacebookF size={24} />
    </a>
    <a href="https://www.instagram.com/grayhomez?igsh=MXVyZ3FnOXRuMWNmeA%3D%3D&utm_source=qr" className="text-gray-400 hover:text-yellow-500 transition duration-300 ease-in-out" aria-label="Follow us on Instagram">
      <FaInstagram size={24} />
    </a>
    <a href="https://pin.it/2FkHUyx9E" className="text-gray-400 hover:text-yellow-500 transition duration-300 ease-in-out" aria-label="Follow us on Pinterest">
      <FaPinterestP size={24} />
    </a>
  </div>
</div>
        </div>
        {/* Contact Information */}

        <div className="mb-6 md:mb-0">
          <h2 className="font-semibold text-lg mb-2">Contact Us</h2>
          <p className="text-gray-400 mt-2">
            Email: <a href="yamini@grayhomez.com" className="text-yellow-500 hover:text-yellow-300 transition duration-300 ease-in-out">yamini@grayhomez.com</a>
          </p>
          <p className="text-gray-400">Phone: +91 9999775915 <br></br> +91 9899466959</p>
          <p className="text-gray-400">Address: 336 Near CSC2 Mg Road Pillar No.28B <br></br> NEW DELHI 110030</p>
        </div>
      </div>
      {/* Attractive Copyright Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Your Company Name</span>. All Rights Reserved.
        </p>
        <p className="text-gray-400">
          Designed with ❤️ by 
          <Link to="https://techxpert.in/" className="text-yellow-500 hover:text-yellow-300 transition duration-300 ease-in-out font-semibold"> Techxpert</Link>
        </p>
        <p className="text-gray-500 text-sm mt-2">
          <Link to="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</Link> | 
          <Link to="/terms-of-service" className="hover:text-yellow-500"> Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
}
