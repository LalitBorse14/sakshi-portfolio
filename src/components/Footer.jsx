import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-6 text-center">
      <p className="text-gray-700 dark:text-gray-300">© 2025 Lalit Borse. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="https://github.com/LalitBorse14" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
        <a href="https://www.linkedin.com/in/lalitborse" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
