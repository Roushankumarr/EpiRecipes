import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-3">
      <div className="container mx-auto p-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-gray-400">
              Welcome to Food's Recipe Shop – your go-to place for delicious and diverse recipes.
              Our goal is to inspire you to cook your favorite meals with ease!
            </p>
          </div>

          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-1"><a href="/recipes" className="hover:text-white">Recipes</a></li>
              <li className="mb-1"><a href="/contact" className="hover:text-white">Contact Us</a></li>
              <li className="mb-1"><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="https://facebook.com" title="Facebook" className="hover:text-blue-600"><FaFacebookF /></a>
              <a href="https://twitter.com" title="Twitter" className="hover:text-blue-400"><FaTwitter /></a>
              <a href="https://instagram.com" title="Instagram" className="hover:text-pink-500"><FaInstagram /></a>
              <a href="https://linkedin.com" title="LinkedIn" className="hover:text-blue-700"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-gray-400">&copy; 2024 Food's Recipe Shop. All Rights Reserved.</p>
          <p className="text-gray-400">
            Made with ❤️ by <a href="https://github.com/yourprofile" className="hover:text-white">Roushan kumar</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
