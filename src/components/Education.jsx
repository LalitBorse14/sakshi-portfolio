import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-red-500">Education</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold hover:text-red-500">Bachelor of Engineering – Computer Engineering</h3>
          <p className="text-gray-300">Atma Malik Institute Of Technology And Research Shahapur (2021–2025)</p>
          <p className="text-gray-400">CGPA:8.55 </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold hover:text-red-500">H.S.C.</h3>
          <p className="text-gray-300">Atma Malik Junior College Kokamthan. (2019-2021)</p>
          <p className="text-gray-400">Score: 90%</p>
        </div> 

        <div>
          <h3 className="text-xl font-semibold hover:text-red-500">S.S.C. – 10th Board</h3>
          <p className="text-gray-300">Pravara Kanya Vidya Mandir Loni (2019)</p>
          <p className="text-gray-400">Score: 92%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
