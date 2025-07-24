import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Sakshi Tambe</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Projects</a>
            <a href="#skills" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Skills</a>
            <a href="/resume.pdf" download className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Resume</a>
            <a href="#certificates" className="text-gray-700 dark:text-gray-200 hover:text-red-500">Certificates</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-red-500">Contact</a>
            <a href="#experience" className="text-gray-700 dark:text-gray-200 hover:text-red-500">Experience</a>
            <a href="#education" className="text-gray-700 dark:text-gray-200 hover:text-red-500">Education</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <XIcon className="h-6 w-6 text-gray-700 dark:text-white" /> : <MenuIcon className="h-6 w-6 text-gray-700 dark:text-white" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col bg-white dark:bg-gray-900 px-6 py-4 space-y-2 shadow-md">
          <a onClick={() => setMenuOpen(false)} href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-red-500">Projects</a>
          <a onClick={() => setMenuOpen(false)} href="#skills" className="text-gray-700 dark:text-gray-200 hover:text-red-500">Skills</a>
          <a onClick={() => setMenuOpen(false)} href="/resume.pdf" download className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Resume</a>
          <a onClick={() => setMenuOpen(false)} href="#certificates" className="text-gray-700 dark:text-gray-200 hover:text-red-500">Certificates</a>
          <a onClick={() => setMenuOpen(false)} href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-red-500">Contact</a>
          <a onClick={() => setMenuOpen(false)} href="#experience" className="text-gray-700 dark:text-gray-200 hover:text-red-500">Experience</a>
          <a onClick={() => setMenuOpen(false)} href="#education" className="text-gray-700 dark:text-gray-200 hover:text-red-500">Education</a>
        </div>
      )}
      
    </nav>
  );
};

export default Navbar;
