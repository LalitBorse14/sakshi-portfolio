import React from 'react';

const certificates = [
  {
    title: "Web Development Boot Camp.",
    link: "https://drive.google.com/file/d/1jgZgcldBRFfZ-vhRIsGPYpD_ipYdqtTo/view"
  },
  {
    title: "Programming With Python.",
    link: "https://drive.google.com/file/d/1IxQlkdx5_xa8nBY-ocVC1ZcQsJrmix3e/view"
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-6 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-red-500">Certificates</h2>
      <ul className="max-w-4xl mx-auto space-y-4">
        {certificates.map((cert, idx) => (
          <li key={idx}>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              {cert.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certificates;
