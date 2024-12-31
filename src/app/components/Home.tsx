import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#000000] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Welcome to Blogger Website
          </h1>
          <p className="text-lg mb-6">
            A space where creativity meets words. Discover inspiring stories, tutorials, and insights.
          </p>
          <Link href="/blog" className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Explore Blog
          </Link>
        </div>
      </section>

      {/* Blog Content and Sidebar Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>

            {/* Blog Post #1 */}
            <div className="mb-8">
              <Image 
                src="/ai1.jpeg" 
                alt="AI Advancements" 
                width={1200} 
                height={675} 
                className="rounded-lg object-cover w-full" 
              />
              <h3 className="text-2xl font-bold mt-4 mb-2">
                The Future of AI: 5 AI Advancements to Expect in the Next 10 Years
              </h3>
              <p className="text-gray-600">
                Artificial Intelligence (AI) continues to evolve at an unprecedented pace, reshaping industries and daily life. Over the next decade, we can expect groundbreaking advancements that will push the boundaries of what AI can achieve.
              </p>
              <Link href="/blog/ai-future" className="text-blue-600 hover:underline">
                Read More &rarr;
              </Link>
            </div>

            {/* Blog Post #2 */}
            <div className="mb-8">
              <Image 
                src="/bholes.jpg" 
                alt="Supermassive Black Holes" 
                layout="responsive" 
                width={1200} 
                height={675} 
                className="rounded-lg object-cover" 
              />
              <h3 className="text-2xl font-bold mt-4 mb-2">NASA's Hubble, Chandra Find Supermassive Black Holes</h3>
              <p className="text-gray-600">
                NASA's iconic Hubble Space Telescope and the Chandra X-ray Observatory have made groundbreaking discoveries, revealing the existence of supermassive black holes at the centers of galaxies across the universe.
              </p>
              <Link href="/blog/black-holes" className="text-blue-600 hover:underline">
                Read More &rarr;
              </Link>
            </div>

            {/* Blog Post #3 */}
            <div>
              <Image 
                src="/space.jpg" 
                alt="Future of Space Exploration" 
                layout="responsive" 
                width={1200} 
                height={675} 
                className="rounded-lg object-cover" 
              />
              <h3 className="text-2xl font-bold mt-4 mb-2">The Future of Space Exploration</h3>
              <p className="text-gray-600">
                Space exploration is entering a bold new era, driven by cutting-edge technology, international collaboration, and a renewed sense of curiosity about the universe.
              </p>
              <Link href="/blog/space-exploration" className="text-blue-600 hover:underline">
                Read More &rarr;
              </Link>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="md:col-span-1 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">About the Author</h3>
            <p className="text-gray-600">
              Hello! I'm [Your Name], a passionate blogger sharing insights, tutorials, and personal stories to inspire and educate.
            </p>
            <Image 
              src="/aicar.jpg" 
              alt="Author" 
              layout="intrinsic" 
              width={120} 
              height={120} 
              className="mt-4 rounded-full" 
            />
            <p className="mt-4">
              Follow me on social media or subscribe to my newsletter to stay updated with new posts!
            </p>

            <div className="mt-6 space-y-4">
              <Link href="#" className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                Subscribe Now
              </Link>
              <div className="flex space-x-4">
                <Link href="https://facebook.com" className="text-blue-600 hover:underline">Facebook</Link>
                <Link href="https://twitter.com" className="text-blue-600 hover:underline">Twitter</Link>
                <Link href="https://instagram.com" className="text-blue-600 hover:underline">Instagram</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-[#000000] text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-6">
            Stay updated with the latest posts, tutorials, and tips. Subscribe now to never miss a thing!
          </p>
          <Link href="/subscribe" className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded">
            Subscribe Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
   









