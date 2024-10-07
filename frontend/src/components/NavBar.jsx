import { FaSearch } from "react-icons/fa";
import React, { useState } from 'react';
import LogoCarousel from './LogoCarousel'; // Import the LogoCarousel


function NavBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Navigation Bar */}
      <nav className="bg-orange-600 shadow-md h-16">
        <div className='container mx-auto h-full flex items-center justify-between px-6'>
          
         

          <div className="text-white text-lg font-semibold mx-4">
          "Delicious Recipes for Every Occasion"
        </div>


          

          {/* Search Bar */}
          <div className="flex items-center w-full max-w-md border border-gray-300 rounded-full overflow-hidden bg-gray-100 focus-within:shadow-lg">
            <input
              type="text"
              placeholder="Search for recipes..."
              className="w-full h-12 px-4 outline-none bg-transparent placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button 
              className="h-12 w-12 bg-red-600 text-white flex items-center justify-center rounded-r-full hover:bg-red-500 transition-colors"
              onClick={handleSearch}
            >
              <FaSearch />
            </button>
          </div>

         
        </div>
      </nav>
    </>
  );
}

export default NavBar;
