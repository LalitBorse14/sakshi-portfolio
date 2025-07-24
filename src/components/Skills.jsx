import React from 'react';

const Skills = () => {
  const skills = [
    // Frontend
    'HTML5', 'CSS3', 'Bootstrap', 'JavaScript (ES6+)', 'JQuery', 'React.js', 'Next.js',
    // Backend & DB
    'MySQL', 'Node.js', 'Express.js', 'MongoDB' ,
    // Tools & Platforms
    'GitHub', 'VS Code', 'Python' , 'JSON' , 'AJAX' ,
    // Design & Marketing
    'Canva', 'Figma', 'Digital Marketing',
    // Others
    'Responsive Web Design', 'SEO Basics', 'Vercel' , 'Hostinger' , 'GoDaddy'
  ];

  return (
    <section id="skills" className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-700 hover:bg-red-500 transition duration-300 text-white px-5 py-2 rounded-full text-sm font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
