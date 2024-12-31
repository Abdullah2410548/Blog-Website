import React from "react";
import Image from "next/image";
import Link from "next/link";

const SportsBlog = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#000000] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold leading-tight mb-4">Sports Blog</h1>
          <p className="text-lg mb-6">
            Dive into the world of sports. Discover news, updates, and insightful articles from various sports disciplines.
          </p>
          <Link href="#" className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Explore Sports Articles
          </Link>
        </div>
      </section>


      

      {/* Sports Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Popular Sports Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image 
                src="/football.webp" 
                alt="Football News" 
                width={600} 
                height={400} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Football News & Updates</h3>
                <p className="text-gray-600 mb-4">
                  Latest news, scores, and highlights from the world of football.
                </p>
                <Link href="#" className="text-blue-600 hover:underline">
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image 
                src="/basketball.webp" 
                alt="Basketball Highlights" 
                width={600} 
                height={400} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Basketball Highlights & Analysis</h3>
                <p className="text-gray-600 mb-4">
                  In-depth analysis and updates from the NBA and other major basketball leagues.
                </p>
                <Link href="#" className="text-blue-600 hover:underline">
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image 
                src="/tennis.jpg" 
                alt="Tennis Tournament" 
                width={600} 
                height={400} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Tennis Tournament Recaps</h3>
                <p className="text-gray-600 mb-4">
                  Recaps of major tennis tournaments, player performances, and key matchups.
                </p>
                <Link href="#" className="text-blue-600 hover:underline">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>





     
    

      {/* Recent Sports Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Latest Articles Blogs</h2>

        {/* Blog Post #1 */}
         <div className="mb-8">
              <Image 
                src="/rise car.png" 
                alt="Marathon Running Event" 
                width={600} 
                height={400} 
                className="w-full h-58 object-cover rounded-lg" 
              />
              <h3 className="text-2xl font-bold mt-4 mb-2">The Rise of AI in Vehicle Safety</h3>
              <p className="text-gray-600">
              Artificial Intelligence (AI) is revolutionizing vehicle safety, making roads safer for drivers, passengers, and pedestrians alike. Modern vehicles now come equipped with advanced AI systems capable of analyzing vast amounts of data in real time to prevent accidents and enhance overall driving experiences. Features like Adaptive Cruise Control, Lane-Keeping Assistance, and Automatic Emergency Braking are powered by AI algorithms that continuously monitor the vehicle’s surroundings and respond to potential hazards in milliseconds.
              </p>
              <Link href="#" className="text-blue-600 hover:underline">
                Read More →
              </Link>
            </div>

          

            {/* Blog Post #2 */}
            <div className="mb-8">
              <Image 
                src="/health.jpg" 
                alt="Sports Tech Innovations" 
                width={600} 
                height={400} 
                className="w-full h-58 object-cover rounded-lg" 
              />
              <h3 className="text-2xl font-bold mt-4 mb-2">The Benefits of Health & Wellness: Achieving Balance and Flourishing in Life</h3>
              <p className="text-gray-600">
              Benefits of health & wellness - In an increasingly fast-paced and demanding world, the pursuit of health and wellness has become a paramount goal for many individuals. Health and wellness encompass a holistic approach to well-being, focusing on physical, mental, emotional, and social aspects of life. This comprehensive perspective aims to promote balance and vitality, enabling individuals to lead fulfilling lives. The benefits of embracing health and wellness practices are far-reaching and profound, impacting various facets of one's existence.
              </p>
              <Link href="#" className="text-blue-600 hover:underline">
                Read More →
              </Link>
            </div>

            {/* Blog Post #3 */}
            <div>
              <Image 
                src="/spaceblog.jpg" 
                alt="eSports Landscape" 
                width={600} 
                height={400} 
                className="w-full h-58 object-cover rounded-lg" 
              />
              <h3 className="text-2xl font-bold mt-4 mb-2">"3 Hours of Fascinating Space Facts to Fall Asleep To."</h3>
              <p className="text-gray-600">
              Space is a giant playground of wonders, where stars twirl and galaxies shimmer in a dance choreographed by the laws of physics. We uncover the secrets of distant worlds and the very beginnings of everything but beyond all that, space invites us to embark on a journey of discovery, reminding us of the boundless possibilities that lie beyond the confines of our world.
              </p>
              <Link href="#" className="text-blue-600 hover:underline">
                Read More →
              </Link>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="md:col-span-4 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">About Our Sports Blog</h3>
            <p className="text-gray-600">
              Welcome to our Sports Blog! Here, we bring you the latest news, insightful articles, and updates from the world of sports. Stay tuned for exciting content on your favorite sports.
            </p>
            <Image 
              src="/sports.avif" 
              alt="Author" 
              width={80} 
              height={80} 
              className="mt-4 rounded-full w-16 h-16" 
            />
            <p className="mt-4">
              Connect with us on social media for updates, news, and discussions on all things sports!
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
            Stay updated with the latest sports news, articles, and updates. Subscribe now to stay ahead!
          </p>
          <Link href="#" className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded">
            Subscribe Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SportsBlog 



