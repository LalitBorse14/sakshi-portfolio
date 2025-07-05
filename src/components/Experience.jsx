import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-red-500">Experience</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="text-xl font-semibold">AWS Cloud Intern @ IRT Technologies PVT. LTD </h3>
            <p className="text-gray-300">July 2024 ~ Dec 2024</p>
            <p className="text-gray-400">Deployed cloud infrastructure using AWS services, increasing deployment efficiency by 30%.</p>
            <p className="text-gray-400">Gained proficiency in AWS tools (EC2, IAM, CloudFormation, etc), enhancing infrastructure management by 25%.</p>
            <p className="text-gray-400">Created scalable and secure cloud architectures, reducing operational costs by 20%.</p>
            <p className="text-gray-400">Implemented automation strategies using AWS CloudFormation, resulting in a 40% reduction in manual deployment time.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
