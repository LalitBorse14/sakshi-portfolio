import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_g3iivnk',
      'template_kzp5zde',
      e.target,
      'ENy2WuqgsJfLnt1Pm'
    )
      .then(() => {
        alert('Message sent successfully!');
        e.target.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send message.');
      });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-800 text-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-500">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-700 text-white"
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-700 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-3 rounded bg-gray-700 text-white"
          ></textarea>
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded text-white w-full"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="text-white text-center mb-6">
        <p>Email: <a href="mailto:sakshi26tambe@gmail.com" className="text-red-400 hover:underline">sakshi26tambe@gmail.com</a></p>
      </div>
    </section>
  );
};

export default Contact;
