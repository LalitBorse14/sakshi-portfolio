import React from 'react';

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    link: "https://www.credly.com/badges/6f185c4e-7d2a-4048-8f2d-1ca6c60969c0/public_url"
  },
  {
    title: "Red Hat System Administration",
    link: "https://drive.google.com/file/d/10WhRBmqxJSNp93D8c2QnmLdfBIzaWSyP/view"
  },
  {
    title: "CISCO Certified Network Associate",
    link: "https://drive.google.com/file/d/10_nI31i4fKveZj9YmMyMPQ9nEpal5Xg0/view?usp=sharing"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-6 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-red-500">Certificates</h2>
      <ul className="max-w-4xl mx-auto space-y-4">
        {certificates.map((cert, idx) => (
          <li key={idx}>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">
              {cert.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certificates;
