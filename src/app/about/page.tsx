'use client'; // Add this directive

import React, { useState } from 'react';

interface Comment {
  name: string;
  comment: string;
}

const About: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]); // Explicitly typed as Comment array
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && comment) {
      setComments([...comments, { name, comment }]);
      setName('');
      setComment('');
    }
  };

  return (
    <div className="bg-white dark:bg-neutral-950 text-gray-800 dark:text-gray-200 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-bold text-center mb-6 text-[#f50cde]">
          About <span className="text-[#3407b0]">Blog Sphare</span>
        </h1>
        <p className="text-lg text-center mb-8 leading-7">
          Welcome to Blog Sphare – Your go-to destination for insightful, engaging, and inspiring content! We’re here to inform, inspire, and connect curious minds through diverse topics, from technology and space to sports and AI. Let’s explore together!
        </p>

        {/* Purpose Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Purpose</h2>
          <p className="leading-7">
            Blog Sphare is a hub for curious minds to explore technology, space, sports, and AI. We deliver engaging and well-researched content to inform, inspire, and fuel your passion for learning.
          </p>
        </div>

        {/* Meet the Creator Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Meet the Creator</h2>
          <p className="leading-7 mb-4">
            Hi, I&apos;m <span className="font-bold">Abdullah</span>, the creator of Blog Sphare. With a passion for storytelling and topics like technology, space, sports, and AI, I built this platform to share knowledge and spark meaningful discussions.
          </p>
          <p className="leading-7">
            Along with a talented team, I’m dedicated to making Blog Sphare your go-to source for insightful and engaging content. Let’s connect through our social links below and keep exploring together!
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-semibold mb-4">Join the Conversation</h2>
          <p className="leading-7 mb-6">
          We'd love to hear from you! Stay connected by subscribing to our newsletter, sharing your feedback, and following us on social media for the latest updates and insights. Let’s explore and grow together!
          </p>
          <a
            href="#"
            className="px-6 py-3 bg-[#052b03] hover:bg-[#0c5207] text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 dark:hover:bg-yellow-700 transition-all duration-300"
          >
            Subscribe Now
          </a>
        </div>

        {/* Simple Comment Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Leave a Comment</h2>
          <form onSubmit={handleCommentSubmit} className="mb-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Your Comment"
              rows={4} // Adjusting the number of rows
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Submit
            </button>
          </form>
          <div>
            {comments.map((c, index) => (
              <div key={index} className="mb-4 border-b pb-2">
                <p className="font-semibold">{c.name}</p>
                <p>{c.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;



