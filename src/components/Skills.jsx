import React from 'react';

const Skills = () => {
  const skills = [
    "AWS EC2", "S3", "IAM", "CloudFormation",
    "Lambda", "API Gateway", "Docker", "Kubernetes",
    "OpenShift", "GitHub Actions", "Jenkins", "Terraform",
    "Ansible", "Linux (Red Hat)", "Windows Admin", "TCP/IP",
    "DNS", "Routing & Switching", "Python", "JavaScript",
    "HTML", "CSS", "JS", "Azure (Learning)", "VirtualBox", "VMware"
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
