import React from 'react';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  "Artificial Intelligence",
  "Machine Learning",
  "Business Strategy",
  "Technology Trends",
  "Digital Transformation",
  "Case Studies"
];

const blogPosts = [
  {
    title: "AI's Wild Ride: Top Insights from March 6, 2025",
    excerpt: "Buckle up, tech fans! The AI world is buzzing louder than ever, and we've scooped up the hottest insights from the last 24 hours. Smarter bots, wild tools, and game-changing ideas—here's your daily dose of AI magic, served fresh and feisty.",
    date: "March 07, 2025",
    readTime: "3 min read",
    category: "Technology Trends",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    link: "/blog/ai-wild-ride"
  },
  {
    title: "AI Unleashed: Revolution, Responsibility, and the Road Ahead",
    excerpt: "What if machines could not only think but also feel the weight of their decisions? Today, artificial intelligence isn't just crunching numbers—it's diagnosing diseases, shaping economies, and even sparking ethical debates that keep us up at night.",
    date: "March 05, 2025",
    readTime: "15 min read",
    category: "Artificial Intelligence",
    image: "https://imagedelivery.net/SZohZ5hDHQrPE1IYbmlzaA/dd1f5ea3-c3de-4dbd-b66b-1d63f739ac00/public",
    link: "/blog/ai-unleashed"
  },
  {
    title: "The Future of AI in Business: 2024 Trends and Beyond",
    excerpt: "Explore the latest AI trends shaping the business landscape in 2024, from generative AI to autonomous systems. Learn how businesses are leveraging these technologies to gain competitive advantages.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Technology Trends",
    image: "https://imagedelivery.net/SZohZ5hDHQrPE1IYbmlzaA/afad7856-3392-4988-082a-f7162214bc00/public",
    link: "#"
  },
  {
    title: "Implementing AI Solutions: A Practical Guide for Businesses",
    excerpt: "Learn the step-by-step process of implementing AI solutions in your business, from assessment to deployment. Real-world examples and best practices included.",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "Case Studies",
    image: "https://imagedelivery.net/SZohZ5hDHQrPE1IYbmlzaA/85302a84-632a-4892-214a-8123d1cee900/public",
    link: "#"
  },
  {
    title: "AI Security: Protecting Your Business in the Digital Age",
    excerpt: "Discover essential strategies for maintaining security and privacy while leveraging AI technologies. Expert insights on risk management and compliance.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Business Strategy",
    image: "https://imagedelivery.net/SZohZ5hDHQrPE1IYbmlzaA/22246d44-b563-48fa-f323-c18b79a04a00/public",
    link: "#"
  },
  {
    title: "Machine Learning Models: A Beginner's Guide",
    excerpt: "Understanding different types of machine learning models and their applications in business. From supervised to unsupervised learning.",
    date: "March 1, 2024",
    readTime: "7 min read",
    category: "Machine Learning",
    image: "https://imagedelivery.net/SZohZ5hDHQrPE1IYbmlzaA/dd1f5ea3-c3de-4dbd-b66b-1d63f739ac00/public",
    link: "#"
  }
];

export function Blog() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative py-20 px-4">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{
               backgroundImage: `url('https://imagedelivery.net/SZohZ5hDHQrPE1IYbmlzaA/dd1f5ea3-c3de-4dbd-b66b-1d63f739ac00/public')`,
               backgroundPosition: 'center',
               backgroundSize: 'cover'
             }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Kynos AI Blog
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
              Insights, trends, and expert perspectives on AI and digital transformation
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6 mb-12">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div className="flex-shrink-0">
                <select className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">All Categories</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link 
                    to={post.link} 
                    className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="bg-black/30 rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Popular Categories</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full flex items-center transition-colors"
                >
                  <Tag className="w-4 h-4 mr-2" />
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}