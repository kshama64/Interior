import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import img from '../assets/b.jpg';
import img1 from '../assets/CAM.jpg';
import img3 from '../assets/images.jpg';
import img4 from '../assets/CAM-1a.jpg';
import img5 from '../assets/CAM-2a.jpg';
import img6 from '../assets/CAM-3.jpg';
import img7 from '../assets/CAM-4.jpg';
import img8 from '../assets/Dining area.jpg';
import img9 from '../assets/gif.jpg';
import img10 from '../assets/gif1.jpg';
import img11 from '../assets/DINING.jpg';

// Sample images
const images = [
  { id: 1, src: img, alt: 'Gallery Image 1' },
  { id: 2, src: img1, alt: 'Gallery Image 2' },
  { id: 3, src: img3, alt: 'Gallery Image 3' },
  { id: 4, src: img4, alt: 'Gallery Image 4' },
  { id: 5, src: img5, alt: 'Gallery Image 5' },
  { id: 6, src: img6, alt: 'Gallery Image 6' },
  { id: 7, src: img7, alt: 'Gallery Image 7' },
  { id: 8, src: img8, alt: 'Gallery Image 8' },
  { id: 9, src: img9, alt: 'Gallery Image 9' },
  { id: 10, src: img10, alt: 'Gallery Image 10' },
  { id: 11, src: img11, alt: 'Gallery Image 11' },
];

export default function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 500 }); // Initialize AOS with desired settings
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h2 className="text-4xl font-bold text-center mb-8 font-serif text-gray-800">
        Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            data-aos="fade-up" // AOS animation for the container
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:translate-y-1"
              data-aos="zoom-in" // AOS animation for the image
              data-aos-delay={`${image.id * 100}`} // Delay for staggered effect
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              {image.alt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
