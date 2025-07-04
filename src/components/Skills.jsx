import React from 'react';

const skills = [
  "Python", "JavaScript", "React", "AWS", "Docker", "Linux",
  "Terraform", "Ansible", "CloudFormation", "CI/CD", "Git", "Networking"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map(skill => (
          <span key={skill} className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-white px-4 py-2 rounded-full shadow-sm text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
