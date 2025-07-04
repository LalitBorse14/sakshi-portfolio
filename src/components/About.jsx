import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-black text-white" data-aos="fade-right">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I’m <strong>Lalit Borse</strong>, an AWS Certified Cloud Engineer & DevOps enthusiast from Nashik, Maharashtra.
          With hands-on experience in EC2, IAM, CloudFormation, and a passion for automation using Python & Boto3,
          I love solving real-world problems through cloud-native solutions. I also build React-based frontend apps
          and deploy them using AWS Amplify, Lambda, and S3.
        </p>
      </div>
    </section>

  );
};

export default About;
