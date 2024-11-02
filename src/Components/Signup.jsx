import React, { useState } from 'react';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  // Regex for validating email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password strength validation: min 6 characters (you can add more rules)
  const isPasswordStrong = (password) => password.length >= 6;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    // Basic Validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Password strength validation
    if (!isPasswordStrong(password)) {
      setError('Password should be at least 6 characters long.');
      return;
    }

    // Confirm password matching
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Log form data to the console
    console.log('Form Submitted:', formData);

    // Reset error if form is valid
    setError('');

    // Further form submission logic (e.g., API call) can go here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-900">
      {/* Background Image Container */}
      <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}>
        <div className="bg-white/80 p-8 rounded-lg shadow-lg max-w-md w-full mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

          <form onSubmit={handleSubmit}>
            {/* Display error message */}
            {error && (
              <div className="mb-4 text-red-500 text-center font-medium">
                {error}
              </div>
            )}

            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
                required/>
            </div>

            {/* Confirm Password Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Confirm your password"
                required
              />
            </div>

            {/* Sign Up Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md font-semibold text-sm shadow-md transition duration-300"
              >
                Sign Up
              </button>
            </div>

            {/* Already have an account? */}
            <div className="mt-6 text-center">
              <span className="text-sm text-gray-600">Already have an account? </span>
              <a href="/login" className="text-sm text-indigo-600 hover:text-indigo-500">
                Log In
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
