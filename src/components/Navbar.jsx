import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ onThemeToggle, isDarkMode }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">NewsBlog</Link>
      <div className="flex space-x-6">
        <Link to="/category/technology" className="hover:text-gray-400">Technology</Link>
        <Link to="/category/business" className="hover:text-gray-400">Business</Link>
        <Link to="/category/sports" className="hover:text-gray-400">Sports</Link>
        <LanguageSwitcher />
        <button onClick={onThemeToggle} className="p-2 rounded-full hover:bg-gray-600">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
