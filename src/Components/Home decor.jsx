import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Ruffled Marble Bowl',
    image: 'https://zibahomes.co/cdn/shop/files/31613169_010_b4.jpg?v=1689608941&width=750',
    hoverImage: 'https://zibahomes.co/cdn/shop/files/31613169_010_b.jpg?v=1689608942&width=750',
    price: 2999,
    reviews: 150,
  },
  {
    id: 2,
    name: 'Lily Bone Inlay Table Lamp',
    image: 'https://zibahomes.co/cdn/shop/products/LR_GradySectional_SideTableDetail_Hero_Crop_BASE.jpg?v=1657012465&width=750',
    hoverImage: 'https://zibahomes.co/cdn/shop/products/Lighting_Table_Lamp_Bone_Chevron_Blue_MV_Crop_SH.jpg?v=1671639104&width=750',
    price: 4999,
    reviews: 200,
  },
  {
    id: 3,
    name: 'Black Marble Ruffle Bowl',
    image: 'https://zibahomes.co/cdn/shop/files/N812210-02_900x_1.jpg?v=1718105202&width=750',
    hoverImage: 'https://zibahomes.co/cdn/shop/files/Jakobsdals_svarta_marmorsk_C3_A5l_anemone_N812210-02_2_900x_1d2a802d-3b96-4541-b98d-8555206f0acb.jpg?v=1718105219&width=750',
    price: 3599,
    reviews: 80,
  },
  {
    id: 4,
    name: 'Sculpted Swirls Marble Totem',
    image: 'https://zibahomes.co/cdn/shop/files/sc04.png?v=1715863836&width=750',
    hoverImage: 'https://zibahomes.co/cdn/shop/files/sc04a.png?v=1715863855&width=750',
    price: 1999,
    reviews: 90,
  },
  {
    id: 5,
    name: 'Waterfall Inlay Table Lamp',
    image: 'https://zibahomes.co/cdn/shop/files/68066273_004_b.jpg?v=1689607577&width=750',
    hoverImage: 'https://zibahomes.co/cdn/shop/files/68066273_004_b2.jpg?v=1689607578&width=750',
    price: 5999,
    reviews: 110,
  },
  {
    id: 6,
    name: 'Dolphin Inlay Lamp',
    image: 'https://zibahomes.co/cdn/shop/products/BR_Pondicherry_Cavallo-0145_Crop1_Crop_BASE.jpg?v=1689609032&width=750',
    hoverImage: 'https://zibahomes.co/cdn/shop/products/BR_Balboa_Natural_Owens_Bedding_DETAIL_LAMP_RDH-1011x_Crop_BASE.jpg?v=1689609032&width=750',
    price: 8999,
    reviews: 60,
  },
];

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative w-full md:w-1/3 lg:w-1/4 p-4 transition-transform duration-300 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="overflow-hidden rounded-lg shadow-lg transition-shadow duration-300">
          <img
            src={isHovered ? product.hoverImage : product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-all duration-300"
          />
          <div className="p-4 bg-white">
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-lg font-bold">₹{product.price.toFixed(2)}</p>
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

export default function Homedecor() {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  const handleProductClick = (product) => {
    let viewedProducts = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    viewedProducts = viewedProducts.filter((item) => item.id !== product.id);
    viewedProducts.unshift(product);
    if (viewedProducts.length > 5) viewedProducts.pop();
    localStorage.setItem('recentlyViewed', JSON.stringify(viewedProducts));
    setRecentlyViewed(viewedProducts);
  };

  useEffect(() => {
    const viewedProducts = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    setRecentlyViewed(viewedProducts);
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Home Decor</h1>
      <h2 className="text-2xl font-semibold mb-4 text-center">Explore Our Collection</h2>
      <div className="flex flex-wrap -mx-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

      {/* Recently Viewed Section */}
      {recentlyViewed.length > 0 && (
        <div className="mt-12">
          <h2 className="text-4xl font-semibold mb-4 text-center">Recently Viewed</h2>
          <div className="flex flex-wrap -mx-4">
            {recentlyViewed.map((product) => (
              <ProductCard key={product.id} product={product} />
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
              className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"/>
          </div>
        </div>
      </div>
    </div>
  );
}
