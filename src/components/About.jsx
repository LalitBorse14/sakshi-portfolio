import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-6">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I’m <span className="text-red-400 font-semibold">Sakshi Tambe</span>, a passionate Web Developer based in Pune with strong hands-on experience in
          front-end and full-stack development. My core stack includes <span className="text-blue-300">HTML, CSS, JavaScript, React.js, Next.js, Tailwind</span>, along with backend tech like <span className="text-blue-300">Node.js, MongoDB</span>.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          I’ve contributed to real-world projects through internships and freelance work — such as building restaurant ordering systems, secure secret keepers, and even an AI chatbot based on the <span className="italic">Bhagavad Gita</span>. With a strong foundation in design thinking, I focus on crafting responsive, accessible, and secure web applications.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          Currently, I’m working as a Frontend Developer Intern at <span className="text-yellow-300 font-medium">7 Stark Marketing</span>, and I’m always looking to grow as a developer by exploring new tools, collaborating on open source, and learning from the community.
        </p>
      </div>
    </section>
  );
};

export default About;
