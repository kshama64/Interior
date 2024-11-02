import React, { useState } from 'react';

export default function Message() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the WhatsApp chat popup
  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      {/* WhatsApp Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="bg-blue-500 p-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition duration-300 ease-in-out"
          onClick={toggleChat}
          aria-label="WhatsApp Chat"
        >
          <svg
            className="w-10 h-10 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 .5C5.65.5.5 5.65.5 12c0 2.04.52 4.01 1.51 5.74L.6 23.4c-.17.63.45 1.25 1.08 1.08l5.66-1.4A11.482 11.482 0 0012 23.5c6.35 0 11.5-5.15 11.5-11.5S18.35.5 12 .5zm4.84 15.8c-.19.53-.92.98-1.57 1.11-1.77.35-3.51.17-5.02-.62-1.68-.86-2.95-2.22-3.61-3.91-.25-.63-.4-1.25-.47-1.87-.1-.86.31-1.46.74-1.73.22-.14.5-.12.75.02.29.15 1.14.72 1.33.8.19.08.31.13.43.32.14.24.08.44-.02.63-.19.35-.51.78-.72 1.05-.12.16-.13.3-.04.47.33.66.78 1.22 1.3 1.73.54.53 1.16.95 1.82 1.3.33.17.51.16.69-.15.2-.34.39-.64.61-.97.15-.24.39-.28.64-.19.25.09 1.62.75 1.9.89.29.14.48.19.55.31.09.17.09.97-.11 1.5z"
            />
          </svg>
        </button>
      </div>

      {/* WhatsApp Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 bg-gray-100 p-6 rounded-lg shadow-lg z-50 w-80 transition transform ease-in-out duration-300">
          <p className="text-blue-900 font-bold mb-2">Chat with us on WhatsApp!</p>
          <p className="text-gray-700 mb-4">
            Hello! How can we assist you today? Feel free to ask any questions.
          </p>
          <a
            href="https://wa.me/1234567890?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full text-center block transition duration-300"
          >
            Start Chat
          </a>
        </div>
      )}
    </div>
  );
}
