'use client'; // Add this directive

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // API endpoint to send the form data
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus('Thank you for your message! We will get back to you soon.');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="bg-white dark:bg-neutral-950 text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6 text-[#f50cde]">
          Contact Us
        </h1>
        <p className="text-lg text-center mb-8 leading-7">
          Have questions or feedback? Feel free to reach out to us using the form below. We'd love to hear from you!
        </p>

        <div className="mb-12">
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p className="mt-6 text-center text-green-600">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
