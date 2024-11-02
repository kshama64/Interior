import React from "react";

export default function Table() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="overflow-x-auto shadow-lg">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
  <tr>
    <th className="border border-gray-300 px-6 py-3 bg-[#A239CA] text-white font-bold text-left text-sm sm:text-md md:text-lg"></th>
    <th className="border border-gray-300 px-6 py-3 bg-[#A239CA] text-white font-bold text-left text-sm sm:text-md md:text-lg">Gray Homez Experience</th>
    <th className="border border-gray-300 px-6 py-3 bg-[#A239CA] text-white font-bold text-left text-sm sm:text-md md:text-lg">Typical Experience</th>
  </tr>
</thead>

          <tbody className="bg-white">
            {/* Row 1 */}
            <tr className="hover:bg-gray-100 transition-colors duration-200">
              <td className="border border-gray-300 px-4 py-4 text-center font-semibold text-sm sm:text-base">PRICE</td>
              <td className="border border-gray-300 px-4 py-4 text-center text-sm sm:text-base">
                No hidden costs <br /> Transparent Pricing
              </td>
              <td className="border border-gray-300 px-4 py-4 text-center text-sm sm:text-base">
                45% hike between first quote & <br /> final cost
              </td>
            </tr>
            {/* Row 2 */}
            <tr className="hover:bg-gray-100 transition-colors duration-200">
              <td className="border border-gray-300 px-4 py-4 text-center font-semibold text-sm sm:text-base">Value For Money</td>
              <td className="border border-gray-300 px-4 py-4 text-center text-sm sm:text-base">
                Low Flat Design Fee with <br /> Extremely competitive prices
              </td>
              <td className="border border-gray-300 px-4 py-4 text-center text-sm sm:text-base">
                30 to 40% higher prices for similar <br /> products. Steep Design Fees
              </td>
            </tr>
            {/* Row 3 */}
            <tr className="hover:bg-gray-100 transition-colors duration-200">
              <td className="border border-gray-300 px-4 py-4 text-center font-semibold text-sm sm:text-base">CONVENIENCE</td>
              <td className="border border-gray-300 px-4 py-4 text-center text-sm sm:text-base">
                One-stop shop for all interior needs
              </td>
              <td className="border border-gray-300 px-4 py-4 text-center text-sm sm:text-base">
                Approx. 15 market trips to find everything
              </td>
            </tr>
            {/* Row 4 */}
            <tr className="hover:bg-gray-100 transition-colors duration-200">
              <td className="border border-gray-300 px-4 py-4 text-center font-semibold text-sm sm:text-base">DESIGN</td>
              <td className="border border-gray-300 px-4 py-4 text-center text-sm sm:text-base">
                Personalized designs with 3D visuals
              </td>
              <td className="border border-gray-300 px-4 py-4 text-center text-sm sm:text-base">
                Cookie-cutter designs with 2D visuals
              </td>
            </tr>
            {/* Row 5 */}
            <tr className="hover:bg-gray-100 transition-colors duration-200">
              <td className="border border-gray-300 px-4 py-4 text-center font-semibold text-sm sm:text-base">TIMELINES</td>
              <td className="border border-gray-300 px-4 py-4 text-center text-sm sm:text-base">
                Strict timelines <br /> Regular updates with project tracking
              </td>
              <td className="border border-gray-300 px-4 py-4 text-center text-sm sm:text-base">
                Unreliable timelines <br /> No communication on updates/delays
              </td>
            </tr>
            {/* Row 6 */}
            <tr className="hover:bg-gray-100 transition-colors duration-200">
              <td className="border border-gray-300 px-4 py-4 text-center font-semibold text-sm sm:text-base">QUALITY</td>
              <td className="border border-gray-300 px-4 py-4 text-center text-sm sm:text-base">
                Branded materials <br /> Multiple quality checks <br /> 100% trusted vendors
              </td>
              <td className="border border-gray-300 px-4 py-4 text-center text-sm sm:text-base">
                Inferior materials used to cut costs <br /> No quality checks <br /> Outsourced to small contractors
              </td>
            </tr>
            {/* Row 7 */}
            <tr className="hover:bg-gray-100 transition-colors duration-200">
              <td className="border border-gray-300 px-4 py-4 text-center font-semibold text-sm sm:text-base">WARRANTY</td>
              <td className="border border-gray-300 px-4 py-4 text-center text-sm sm:text-base">
                Up to 5-year warranty on modular furniture <br /> India's first & only on-site service warranty
              </td>
              <td className="border border-gray-300 px-4 py-4 text-center text-sm sm:text-base">
                No warranty offered for products or services
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
