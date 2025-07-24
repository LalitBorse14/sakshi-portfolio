// MyWork.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import smartLivingImg from '../assets/smartliving.png';
import bluWaterImg from '../assets/bluwater.png';

const projects = [
  {
    id: 1,
    title: 'Smart Living PG',
    image: smartLivingImg,
    description:
      'Contributed to the frontend for Smart Living PG, a responsive rental accommodation site. Integrated UI elements and improved performance.',
    link: 'https://smartlivingpg.co.in/',
  },
  {
    id: 2,
    title: 'Blu Water Resort',
    image: bluWaterImg,
    description:
      'Worked on Blu Water Resort, a premium resort website in Malshej Ghat. Focused on frontend structure and mobile-friendly compatibility.',
    link: 'https://bluwaterresort.in/',
  },
];

const MyWork = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="mywork" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-red-500">My Work</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.id}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded shadow-md cursor-pointer"
              onClick={() => setActiveImage(proj.image)}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="rounded mb-4 object-cover h-48 w-full"
              />
              <h3 className="text-xl font-semibold text-white">{proj.title}</h3>
              <p className="text-gray-300 mt-2">{proj.description}</p>
              <div className="mt-4">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  🌐 Visit Website
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {activeImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setActiveImage(null)}
          >
            <img
              src={activeImage}
              alt="Preview"
              className="max-h-[90vh] max-w-[90vw] rounded shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default MyWork;
