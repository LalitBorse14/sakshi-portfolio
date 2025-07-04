import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://fwhbyb2lzl.execute-api.ap-south-1.amazonaws.com/prod/send", 
    {
     method: "POST",
     headers: 
     {
      "Content-Type": "application/json",
     },
     body: JSON.stringify(formData),
    });

  const data = await res.json();
    if (res.status === 200) {
    alert("Message sent successfully!");
    } else {
    alert("Something went wrong: " + data.error);
    }
    };


  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" onChange={handleChange} className="w-full p-2 rounded text-black" />
          <input type="email" name="email" placeholder="Your Email" onChange={handleChange} className="w-full p-2 rounded text-black" />
          <textarea name="message" placeholder="Your Message" rows="4" onChange={handleChange} className="w-full p-2 rounded text-black" />
          <button type="submit" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
