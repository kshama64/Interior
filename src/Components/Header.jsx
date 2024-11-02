import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/logos.jpg'; // Import your logo image
import { IoIosCart } from "react-icons/io"; // Import the cart icon from react-icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu 
  const toggleMobileMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Function to handle link click and close the mobile menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`bg-black bg-opacity-70 text-white sticky top-0 left-0 right-0 z-50 transition duration-300 ease-in-out ${isOpen ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={img} alt="KSHAMA Logo" className="h-10 w-auto sm:h-12 md:h-16" />
            </Link>
          </div>
          {/* Menu for larger screens */}
          <div className="hidden md:flex space-x-8 items-center text-m font-serif">
            <Link to="/" className="text-center hover:bg-[#A239CA] px-3 py-2 rounded-md transition duration-300" onClick={handleLinkClick}>Home</Link>
            <Link to="/furniture" className="text-center hover:bg-[#A239CA] px-3 py-2 rounded-md transition duration-300" onClick={handleLinkClick}>Furniture</Link>
            <Link to="/homedecor" className="text-center hover:bg-[#A239CA] px-3 py-2 rounded-md transition duration-300" onClick={handleLinkClick}>Home Decor</Link>
            <Link to="/interior" className="text-center hover:bg-[#A239CA] px-3 py-2 rounded-md transition duration-300" onClick={handleLinkClick}>Interior</Link>
            <Link to="/architecture" className="text-center hover:bg-[#A239CA] px-3 py-2 rounded-md transition duration-300" onClick={handleLinkClick}>Architecture</Link>
            <Link to="/gallery" className="text-center hover:bg-[#A239CA] px-3 py-2 rounded-md transition duration-300" onClick={handleLinkClick}>Gallery</Link>
            <Link to="/about" className="text-center hover:bg-[#A239CA] px-3 py-2 rounded-md transition duration-300" onClick={handleLinkClick}>About</Link>
            <Link to="/contact" className="text-center hover:bg-[#A239CA] px-3 py-2 rounded-md transition duration-300" onClick={handleLinkClick}>Contact</Link>
            <Link to="/sale" className="text-center hover:bg-[#A239CA] px-3 py-2 rounded-md transition duration-300" onClick={handleLinkClick}>Sale</Link>
            <Link to="/cart" className="relative">
              <IoIosCart className="h-8 w-8 text-white hover:text-gray-400 transition duration-300" />
            </Link>
            {/* New Login Link */}
            <Link
              to="/login"
              className="text-center hover:bg-[#A239CA] px-3 py-2 rounded-md transition duration-300">
              Login
            </Link>
            <Link
              to="/contact"
              className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
              Get Started
            </Link>
          </div>

          {/* Hamburger menu button for mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              aria-label="Toggle mobile menu"
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 bg-opacity-80">
          <Link to="/" className="block text-center px-4 py-2 hover:bg-[#A239CA] transition duration-300" onClick={handleLinkClick}>Home</Link>
          <Link to="/interior" className="block text-center px-4 py-2 hover:bg-[#A239CA] transition duration-300" onClick={handleLinkClick}>Interior</Link>
          <Link to="/homedecor" className="block text-center px-4 py-2 hover:bg-[#A239CA] transition duration-300" onClick={handleLinkClick}>Home Decor</Link>
          <Link to="/furniture" className="block text-center px-4 py-2 hover:bg-[#A239CA] transition duration-300" onClick={handleLinkClick}>Furniture</Link>
          <Link to="/architecture" className="block text-center px-4 py-2 hover:bg-[#A239CA] transition duration-300" onClick={handleLinkClick}>Architecture</Link>
          <Link to="/gallery" className="block text-center px-4 py-2 hover:bg-[#A239CA] transition duration-300" onClick={handleLinkClick}>Gallery</Link>
          <Link to="/about" className="block text-center px-4 py-2 hover:bg-[#A239CA] transition duration-300" onClick={handleLinkClick}>About</Link>
          <Link to="/contact" className="block text-center px-4 py-2 hover:bg-[#A239CA] transition duration-300" onClick={handleLinkClick}>Contact</Link>
          <Link to="/sale" className="block text-center px-4 py-2 hover:bg-[#A239CA] transition duration-300" onClick={handleLinkClick}>Sale</Link>
          {/* New Mobile Login Link */}
          <Link
            to="/login"
            className="block text-center px-4 py-2 hover:bg-[#A239CA] transition duration-300"
            onClick={handleLinkClick}>
            Login
          </Link>
          <Link
            to="/contact"
            className="block bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center my-2 mx-4 transition duration-300"
            onClick={handleLinkClick}>
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
