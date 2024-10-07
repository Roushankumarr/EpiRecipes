import React, { useState, useEffect } from 'react';
import logo1 from '../assets/logo1.jpg'; // Import your logos
import logo2 from '../assets/logo2.jpg'; // Import your logos
import logo3 from '../assets/logo3.jpg'; // Import your logos

const logos = [logo1, logo2, logo3]; // Add your logo paths here

const LogoCarousel = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000); // Change logo every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="flex justify-center items-center h-32 overflow-hidden bg-orange-300">
    <img
      src={logos[currentLogoIndex]}
      alt="Logo Carousel"
      className="h-full w-full object-cover transition-transform duration-500 ease-in-out"
    />
  </div>
  

  
  );
};

export default LogoCarousel;
