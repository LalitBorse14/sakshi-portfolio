import { FaMapMarkerAlt, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center">
      <div className="flex justify-center space-x-4 mb-2">
        <a href="https://github.com/sakshi26tambe" target="_blank"><FaGithub className="hover:text-blue-400" /></a>
        <a href="https://www.linkedin.com/in/sakshi-tambe-5871262a9/" target="_blank"><FaLinkedin className="hover:text-blue-400" /></a>
        <a href="mailto:sakshi26tambe@gmail.com"><FaEnvelope className="hover:text-blue-400" /></a>
      </div>
      <p className="text-sm flex justify-center items-center">
        <FaMapMarkerAlt className="mr-1" /> Nashik, Maharashtra, India
      </p>
      <p className="text-xs mt-2">© {new Date().getFullYear()} Sakshi Tambe</p>
    </footer>
  );
};

export default Footer;
