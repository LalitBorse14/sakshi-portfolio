import React from 'react';
import restodineImg from '../assets/restodine.jpg';
import chatbotImg from '../assets/chatbot.png'; // Add this image in /src/assets
import keeperImg from  '../assets/Keeper.png'

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-red-500">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 3 - Keeper App */}
          <div data-aos="zoom-in" className="bg-white dark:bg-gray-800 p-6 rounded shadow-md">
            <img src={keeperImg} alt="Keeper App" className="rounded mb-4" />
            <h3 className="text-xl font-semibold text-white">Keeper App – Secure Notes Manager</h3>
            <p className="mt-2 text-gray-300">
            Built a secure note-keeping app with a clean login/signup flow, enabling users to safely store their secrets.
            Implemented responsive UI, session authentication, and strong password protection using modern React hooks and Firebase.
            </p>
            <div className="mt-4 space-x-4">
              <a
              href="https://keeper-app-gamma-five.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
              🚀 Live Deploy
              </a>
              <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gray-700 text-white px-4 py-2 rounded hover:bg-black transition"
              >
              🔗 GitHub
              </a>
            </div>
          </div>
          {/* Project 1 - RestoDine */}
          <div data-aos="zoom-in" className="bg-white dark:bg-gray-800 p-6 rounded shadow-md">
            <img src={restodineImg} alt="Restodine " className="rounded mb-4" />
            <h3 className="text-xl font-semibold text-white">RestoDine App</h3>
            <p className="mt-2 text-gray-300">
              Developed a scalable in-restaurant web app using Next.js and Tailwind CSS, enabling geo-restricted QR-based ordering, real-time payments, and seamless user experience.
              Integrated a responsive mobile-first UI with a custom admin dashboard for efficient order and menu management.
            </p>
            {/* <div className="mt-4 space-x-4">
              <a
                href="https://master.d1q131gwe67jto.amplifyapp.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                🚀 Live Deploy
              </a>
              <a
                href="https://github.com/LalitBorse14/language-translator.git"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-gray-700 text-white px-4 py-2 rounded hover:bg-black transition"
              >
                🔗 GitHub
              </a>
            </div> */}
          </div>

          {/* Project 2 - Bhagavad Gita AI Chatbot */}
          <div data-aos="zoom-in" className="bg-white dark:bg-gray-800 p-6 rounded shadow-md">
            <img src={chatbotImg} alt="Bhagavad Gita AI Chatbot" className="rounded mb-4" />
            <h3 className="text-xl font-semibold text-white">Bhagavad Gita AI Chatbot</h3>
            <p className="mt-2 text-gray-300">
              Built an AI chatbot using Next.js, Ollama API, and the Phi-3 model for offline usage. It delivers practical solutions to modern life problems by aligning responses with Bhagavad Gita teachings using Krishna-inspired prompts.
            </p>
            {/* <div className="mt-4 space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                🚀 Live Deploy
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-gray-700 text-white px-4 py-2 rounded hover:bg-black transition"
              >
                🔗 GitHub
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
