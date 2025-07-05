import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-red-500">Education</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">Bachelor of Engineering – Computer Engineering</h3>
          <p className="text-gray-300">Atma Malik Institute Of Technology And Research Shahapur (2021–2024)</p>
          <p className="text-gray-400">CGPA: 6.55</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">Diploma – Computer Technology</h3>
          <p className="text-gray-300">SNJB’s S.H.H.J.B. Polytechnic Institute Chandwad (2018–2021)</p>
          <p className="text-gray-400">Score: 82.51%</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">S.S.C. – 10th Board</h3>
          <p className="text-gray-300">Janta Vidyalaya Vithewadi (2018)</p>
          <p className="text-gray-400">Score: 84%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
