import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaLaptopCode, FaGraduationCap } from 'react-icons/fa';

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="bg-gray-900 text-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-red-500">
        Experience
      </h2>

      <VerticalTimeline lineColor="#e11d48">
        <VerticalTimelineElement
          date="2024 – Present"
          iconStyle={{ background: '#e11d48', color: '#fff' }}
          icon={<FaLaptopCode />}
        >
          <h3 className=" text-sm text-gray-500 font-bold text-lg">Frontend Developer Intern</h3>
          <h4 className="text-sm text-gray-500 hover:text-red-400">7 Stark Marketing | Pune (Remote)</h4>
          <p className="text-gray-700 dark:text-gray-300 mt-2 hover:text-blue-400">
            Developed responsive front-end interfaces using HTML, CSS, and React. <br />
            Optimized APIs and dynamic features using Node.js for seamless user experience.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            date="2023 – 2024"
            iconStyle={{ background: '#3b82f6', color: '#fff' }}
            icon={<FaLaptopCode />}
        >
          <h3 className="text-sm text-gray-500 font-bold text-lg">Web Developer</h3>
          <h4 className="text-sm text-gray-500 hover:text-red-400">EssenceWeb IT Training & Service. | Nashik</h4>
          <p className="text-gray-700 dark:text-gray-300 mt-2 hover:text-blue-400">
            Worked on full-stack web development using HTML, CSS, BootStrap, JQuery, PHP, and CodeIgniter.<br />
            Built and maintained both front-end and back-end components of web applications.<br />
            Gained practical experience through real-time project development and debugging.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default ExperienceTimeline;
