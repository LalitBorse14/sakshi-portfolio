import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Lalit Borse</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Projects</a>
            <a href="#skills" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Skills</a>
            <a href="/resume.pdf" download className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Resume</a>
            <a href="#certificates" className="text-gray-700 dark:text-gray-200 hover:text-red-500">Certificates</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-red-500">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <XIcon className="h-6 w-6 text-gray-700 dark:text-white" /> : <MenuIcon className="h-6 w-6 text-gray-700 dark:text-white" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <a href="#projects" className="block text-gray-700 dark:text-gray-200 py-1">Projects</a>
          <a href="#skills" className="block text-gray-700 dark:text-gray-200 py-1">Skills</a>
          <a href="/resume.pdf" download className="block bg-blue-600 text-white px-3 py-1 rounded mt-2">Download Resume</a>
          <a href="#certificates" className="text-gray-700 dark:text-gray-200">Certificates</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-200">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
