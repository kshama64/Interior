// import React, { useState } from 'react';
// import img from '../assets/Lobby-1.jpg'; // Make sure to use your image path
// import Faq from './Faq';
// import { Link } from 'react-router-dom';

// const Furniture = () => {
//   // State to manage the selected option
//   const [selectedOption, setSelectedOption] = useState(null);

//   // Options and corresponding images
//   const options = [
//     {
//       name: 'After',
//       images: [
//         'https://cdn.decorilla.com/images/1200/b2568252-ff4a-4400-bc9b-78762d09cb8d/Black-and-White-Living-Room-Design-.jpg?cv=1',
//         'https://cdn.decorilla.com/images/1200/f56e8d5f-c18f-422c-a933-dc1e04da9f3a/Elegant-Black-White-Living-Room-Design.jpeg?cv=1',
//         'https://cdn.decorilla.com/images/1200/63e72010-ed29-447c-adbf-5fb22eec1552/Elegant-Black-White-Living-Room-Design.jpg?cv=1',
//       ],
//     },
//     {
//       name: 'Before',
//       images: [
//         'https://cdn.decorilla.com/images/1200/c6673df8-9b4c-4f47-adab-e96978885f08/Bright-MidCentury-Modern-Living-Room-Remodel.jpeg?cv=1',
//         'https://cdn.decorilla.com/images/1200/847750ea-69c1-4c5a-ac5a-00c740f611d7/Eclectic-Living-Room-Interior-Design.jpg?cv=1',
//         'https://cdn.decorilla.com/images/1200/38b030c8-c7ed-406e-9f6f-19515cbd3b2b/Eclectic-Living-Room-Interior-Design.jpg?cv=1',
//       ],
//     },
//   ];

//   return (
//     <div className="relative w-full">
//       {/* Banner Section */}
//       <div className="h-96 md:h-[600px] relative overflow-hidden">
//         <img
//           src={img}
//           alt="Furniture Banner"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col text-center">
//           <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">Welcome to Our Furniture Collection</h1>
//           <p className="text-white text-lg mb-6">Explore our exclusive range of furniture.</p>
//           <Link to='/contact'>
//           <button className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded transition duration-300">
//             Get Started
//           </button>
//           </Link>
//         </div>
//       </div>

//       {/* Options Section */}
//       <div className="container mx-auto px-4 mt-16">
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 font-serif">Elegant Black & White Living Room Design</h2>
//         <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
//           {options.map((option, index) => (
//             <button
//               key={index}
//               onClick={() => setSelectedOption(option)}
//               className="bg-slate-600 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded transition duration-300"
//             >
//               {option.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Images Section */}
//       {selectedOption && (
//         <div className="container mx-auto px-4 mt-10">
//           <h3 className="text-xl md:text-2xl font-bold text-center mb-4">{selectedOption.name} Images</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {selectedOption.images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`${selectedOption.name} ${index + 1}`}
//                 className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"/>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Inspirational Quotes Section */}
//       <div className="container mx-auto px-4 mt-16">
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 font-serif">
//           "The best furniture is that which combines functionality with beauty."
//         </h2>
//         <img
//           src="https://cdn.decorilla.com/images/1200/66cc6e38-e19f-453a-9e7e-b0a9098235d0/Neutral-Contemporary-Living-Room-Interior-Design.png?cv=1"
//           alt="Latest Trends"
//           className="w-[90%] md:w-[80%] lg:w-[70%] h-96 md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-lg mb-4 mx-auto"/>
//       </div>

//       <div className="container mx-auto px-4 mt-16">
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 font-serif">
//           Furniture is art you can live in; it should be a reflection of who you are.
//         </h2>
//         <img
//           src="https://cdn.decorilla.com/images/1200/e591acfa-133e-473a-831a-af94c2338d05/Coastal-Living-Room-Interior-Design.jpeg?cv=1"
//           alt="Latest Trends"
//           className="w-[90%] md:w-[80%] lg:w-[70%] h-96 md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-lg mb-4 mx-auto"/>
//       </div>

//       {/* New Section with Image Slider and Content */}
//       <div className="container mx-auto px-4 mt-16 flex flex-col md:flex-row items-center">
//         {/* Image Slider */}
//         <div className="md:w-1/2">
//           <div className="flex overflow-x-auto space-x-4">
//             <img
//               src="https://images.urbndata.com/is/image/Anthropologie/92550508_040_b2?$an-category$&qlt=80&fit=constrain"
//               alt="Slider Image 1"
//               className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"/>
//             <img
//               src="https://images.urbndata.com/is/image/Anthropologie/94404290-0000-L-PD0012_b12?$a15-mto-tile$&hei=523&wid=349&qlt=80&fit=constrain"
//               alt="Slider Image 2"
//               className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"/>
//             <img
//               src="https://images.urbndata.com/is/image/Anthropologie/82622432_001_b2?$an-category$&qlt=80&fit=constrain"
//               alt="Slider Image 3"
//               className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"/>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
//           <h3 className="text-xl md:text-2xl font-bold mb-4">The Importance of Comfort</h3>
//           <p className="text-gray-700">
//           Comfort is a vital aspect of furniture design. A well-chosen sofa or chair can enhance relaxation and productivity, transforming how you experience your space. Ergonomic designs prioritize health and well-being, ensuring that your body is supported during work or leisure. Consider how a cozy reading nook, with a plush armchair and good lighting, can become your retreat from the world.
//           </p>
//         </div>
//       </div>
//       <Faq/>
//       <div className="container mx-auto py-12 px-4 text-center">
//   <h1 className="text-4xl mb-6 font-serif">Featured & Trusted By</h1>

//   <div className="flex flex-wrap justify-center space-x-4">
//     {/* Advertisement Logos */}
//     {[
//       "https://cdn.decorilla.com/s3cdn/static/img/asseen/AD_Architectural_Digest_Logo-2.png",
//       "https://cdn.decorilla.com/s3cdn/static/img/asseen/nyt-logo-379x64.png",
//       "https://cdn.decorilla.com/s3cdn/static/img/asseen/dwell-logo.png",
//       "https://cdn.decorilla.com/s3cdn/static/img/asseen/new-york-magazine-logo.png",
//       "https://cdn.decorilla.com/s3cdn/static/img/asseen/hgtv-logo.png",
//     ].map((src, index) => (
//       <div key={index} className="flex items-center justify-center my-4">
//         <img
//           src={src}
//           alt={`Advertisement ${index + 1}`}
//           className="w-36 h-auto object-contain max-h-20" // Maintain aspect ratio and set max height
//         />
//       </div>
//     ))}
//   </div>
// </div>

//     </div>
//   );
// };

// export default Furniture;



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Egyptian Stripe Inlay Nest of Coffee Tables - Set of Two',
    image: 'https://zibahomes.co/cdn/shop/products/Untitled7_e32c3f3e-6ac1-4708-a3c6-7d26fb044ff6.jpg?v=1661775038&width=750',
    hoverImage: 'https://zibahomes.co/cdn/shop/products/Screenshot2022-08-08at14.00.43.png?v=1661774988&width=750', // Add hover image
    price: 2999,
    salePrice: 1999,
    rating: 4.5,
    reviews: 150,
  },

  {
    id: 2,
    name: 'Khaab Inlay Coffee Table',
    image: 'https://zibahomes.co/cdn/shop/files/Screenshot2023-07-10at16.11.12.png?v=1690810945&width=750',
    hoverImage: 'https://zibahomes.co/cdn/shop/files/Sander_Inlay_Coffee_Table_2.png?v=1690810958&width=750', // Add hover image
    price: 4999,
    salePrice: null,
    rating: 4.7,
    reviews: 200,
  },

  {
    id: 3,
    name: 'Antica Marble End Table',
    image: 'https://zibahomes.co/cdn/shop/files/Copper_ST04.png?v=1713508837&width=750',
    hoverImage: 'https://zibahomes.co/cdn/shop/files/Copper_ST06.png?v=1713508837&width=750', // Add hover image
    price: 3599,
    salePrice: 2999,
    rating: 4.8,
    reviews: 80,
  },

  {
    id: 4,
    name: 'Slyvan Mother Of Pearl Dressing Table with Stool',
    image: 'https://zibahomes.co/cdn/shop/products/white-maxi-mother-of-pearl-maxi-white-mother-of-pearl-console-table-and-stool.jpg?v=1692793387&width=750',
    hoverImage: 'https://zibahomes.co/cdn/shop/products/2.Lifestyle.jpg?v=1661771143&width=750', // Add hover image
    price: 1999,
    salePrice: null,
    rating: 4.6,
    reviews: 90,
  },

  {
    id: 5,
    name: 'Aurelia Travertine Console Table',
    image: 'https://zibahomes.co/cdn/shop/files/Miaki_ChelseaWaterfront_V2_High-6.jpg?v=1721389776&width=750',
    hoverImage: 'https://zibahomes.co/cdn/shop/files/Miaki_ChelseaWaterfront_V2_High-4.jpg?v=1721389776&width=750', // Add hover image
    price: 5999,
    salePrice: 4999,
    rating: 4.9,
    reviews: 110,
  },
  {
    id: 6,
    name: 'Marrakech Inlay Console Desk',
    image: 'https://zibahomes.co/cdn/shop/products/54146014_018_b.webp?v=1657016490&width=750',
    hoverImage: 'https://zibahomes.co/cdn/shop/products/54146014_006_b.webp?v=1657016474&width=750', // Add hover image
    price: 8999,
    salePrice: null,
    rating: 5.0,
    reviews: 60,
  },
  // Add more products as needed
];

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="group relative w-full md:w-1/4 p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} >
      <Link to={`/product/${product.id}`}>
        <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300">
          <img
            src={isHovered ? product.hoverImage : product.image} // Change the image on hover
            alt={product.name}
            className="w-full h-64 object-cover transition-all duration-300" />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">
              {product.salePrice ? (
                <>
                  <span className="line-through text-red-500">₹{product.price.toFixed(2)}</span>{' '}
                  <span className="text-lg font-bold text-green-600">₹{product.salePrice.toFixed(2)}</span>
                </>
              ) : (
                <span className="text-lg font-bold">₹{product.price.toFixed(2)}</span>
              )}
            </p>
            {/* <div className="flex items-center mt-2">
              {Array.from({ length: 5 }, (_, index) => (
                <svg
                  key={index}
                  className={`h-5 w-5 ${index < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.121-6.537L1 7.09l6.541-.954L10 1l2.459 5.636L19 7.09l-4.243 4.463 1.121 6.537z" />
                </svg>
              ))}
              <span className="text-gray-500 ml-2">({product.reviews})</span>
            </div> */}
            {/* Show the button only when hovered */}
            {isHovered && (
              <button className="mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded-md transition-colors duration-300 transform hover:bg-blue-700 hover:scale-105">
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default function Furniture() {

    const [recentlyViewed, setRecentlyViewed] = useState([]);

    // Track recently viewed products
    const handleProductClick = (product) => {
      let viewedProducts = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
      viewedProducts = viewedProducts.filter((item) => item.id !== product.id); // Remove duplicates
      viewedProducts.unshift(product); // Add to the front
      if (viewedProducts.length > 5) viewedProducts.pop(); // Limit to 5 items
      localStorage.setItem('recentlyViewed', JSON.stringify(viewedProducts));
      setRecentlyViewed(viewedProducts);
    };
  
    // Load recently viewed products from localStorage on mount
    useEffect(() => {
      const viewedProducts = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
      setRecentlyViewed(viewedProducts);
    }, []);
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-5xl font-semibold mb-6">Shop By Furniture</h1>
      <h2 className="text-2xl font-semibold mb-4">Explore Our Collection</h2>
      <div className="flex flex-wrap -mx-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
 {/* Recently Viewed Section */}
 {recentlyViewed.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Recently Viewed</h2>
          <div className="flex flex-wrap -mx-4">
            {recentlyViewed.map((product) => (
              <ProductCard key={product.id} product={product} onProductClick={handleProductClick} />
            ))}
          </div>
        </div>
      )}

      {/* More to Discover Section */}
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold text-center mb-6">More to Discover</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://zibahomes.co/cdn/shop/files/79681748_014_b16.webp?v=1686670443&width=500"
              alt="Image 1"
              className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"/>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://zibahomes.co/cdn/shop/products/DIN_Lakehouse_Islesboro-0677_CV3.jpg?v=1689608988&width=500"
              alt="Image 2"
              className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"/>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://zibahomes.co/cdn/shop/files/ZibaxEnvizual-55.jpg?v=1687170660&width=750"
              alt="Image 3"
              className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://zibahomes.co/cdn/shop/files/sculpt1_1.png?v=1715858242&width=750"
              alt="Image 4"
              className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
  );
}

