import React from 'react';
import translatorImg from '../assets/translator.png'; // Add your image in /src/assets

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-red-500">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div data-aos="zoom-in" className="bg-white dark:bg-gray-800 p-6 rounded shadow-md">
            <img src={translatorImg} alt="Language Translator" className="rounded mb-4" />
            <h3 className="text-xl font-semibold text-white">Language Translator App</h3>
            <p className="mt-2 text-gray-300">
              React app with AWS Lambda, API Gateway, S3 & IAM. Hosted on AWS Amplify with CI/CD.
            </p>
            <div className="mt-4 space-x-4">
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
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
