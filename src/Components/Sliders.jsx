import { useState } from "react";

function Sliders() {
  const [activeSection, setActiveSection] = useState("Living Room Furniture");

  const sections = [
    {
      id: "Living Room Furniture",
      label: "LIVING ROOM FURNITURE",
      content: "Welcome to the Living Room Section!",
      images: [
        "https://images.urbndata.com/is/image/Anthropologie/92550508_040_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        "https://images.urbndata.com/is/image/Anthropologie/92812569_020_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        "https://images.urbndata.com/is/image/Anthropologie/91997361-9890-PD0024_b2?$a15-mto-tile$&hei=523&wid=349&qlt=80&fit=constrain",
        "https://images.urbndata.com/is/image/Anthropologie/92736578_039_b4?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      ],
    },
    {
      id: "Chairs",
      label: "CHAIRS",
      content: "Explore the Chairs",
      images: [
        "https://images.urbndata.com/is/image/Anthropologie/82929019_037_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        "https://images.urbndata.com/is/image/Anthropologie/92436617_011_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        "https://images.urbndata.com/is/image/Anthropologie/92550508_040_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        "https://images.urbndata.com/is/image/Anthropologie/92724616_011_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      ],
    },
    {
      id: "Sofas",
      label: "SOFAS",
      content: "Relax in the Sofas",
      images: [
        "https://images.urbndata.com/is/image/Anthropologie/92742055-4304-PD0004_b2?$a15-mto-tile$&hei=523&wid=349&qlt=80&fit=constrain",
        "https://images.urbndata.com/is/image/Anthropologie/82979535_071_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        "https://images.urbndata.com/is/image/Anthropologie/92562867_039_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        "https://images.urbndata.com/is/image/Anthropologie/89263081_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      ],
    },
    {
      id: "Dressers & Nightstands",
      label: "DRESSERS & NIGHTSTANDS",
      content: "Check out the Dressers & Nightstands",
      images: [
        "https://images.urbndata.com/is/image/Anthropologie/92585579_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        "https://images.urbndata.com/is/image/Anthropologie/92500636_020_b11?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        "https://images.urbndata.com/is/image/Anthropologie/92584945_020_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        "https://images.urbndata.com/is/image/Anthropologie/92546449_005_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      ],
    },
    {
      id: "Kitchen & Dining Furniture",
      label: "KITCHEN & DINING FURNITURE",
      content: "Explore the Kitchen & Dining Furniture",
      images: [
        "https://images.urbndata.com/is/image/Anthropologie/78679214_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        "https://images.urbndata.com/is/image/Anthropologie/55250625_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        "https://images.urbndata.com/is/image/Anthropologie/92622687_020_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        "https://images.urbndata.com/is/image/Anthropologie/82622432_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      ],
    },
    {
      id: "In Stock Furniture",
      label: "IN STOCK FURNITURE",
      content: "Explore the In Stock Furniture",
      images: [
        "https://images.urbndata.com/is/image/Anthropologie/90959529_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        "https://images.urbndata.com/is/image/Anthropologie/82622390_041_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        "https://images.urbndata.com/is/image/Anthropologie/90959404_060_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        "https://images.urbndata.com/is/image/Anthropologie/92584945_020_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Navigation Menu */}
      <div className="flex flex-wrap space-x-4 border-b border-gray-300 pb-2 overflow-auto justify-center">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`text-sm md:text-base lg:text-lg whitespace-nowrap p-2 ${
              activeSection === section.id
                ? "font-bold border-b-2 border-yellow-500"
                : "text-white"
            } hover:text-white transition`}>
            {section.label}
          </button>
        ))}
      </div>
      
      {/* Section Content */}
      <div className="mt-6">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`${activeSection === section.id ? "block" : "hidden"}`} >
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-center mb-4">
              {section.content}
            </h2>

            {/* Display four images in one row */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {section.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${section.label} ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sliders;
