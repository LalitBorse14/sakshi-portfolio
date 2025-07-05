import { FaMapMarkerAlt, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center">
      <div className="flex justify-center space-x-4 mb-2">
        <a href="https://github.com/LalitBorse14" target="_blank"><FaGithub className="hover:text-blue-400" /></a>
        <a href="https://www.linkedin.com/in/lalit-borse-525b68217/" target="_blank"><FaLinkedin className="hover:text-blue-400" /></a>
        <a href="mailto:lalitborse1412@gmail.com"><FaEnvelope className="hover:text-blue-400" /></a>
      </div>
      <p className="text-sm flex justify-center items-center">
        <FaMapMarkerAlt className="mr-1" /> Nashik, Maharashtra, India
      </p>
      <p className="text-xs mt-2">© {new Date().getFullYear()} Lalit Borse</p>
    </footer>
  );
};

export default Footer;
