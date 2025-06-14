import React from 'react';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';


const categories = [
  "Artificial Intelligence",
  "Machine Learning",
  "Business Strategy",
  "Technology Trends",
  "Digital Transformation",
  "Case Studies",
  "Business Automation"
];

const blogPosts = [
  {
    title: "Unlocking Business Growth with Customer Segmentation Using Machine Learning",
    excerpt: "Discover how machine learning transforms business growth with advanced customer segmentation, sales forecasting, fraud detection, churn prediction, and inventory optimization.",
    date: "June 13th 2025, 11:47:19 pm",
    readTime: "7 mins",
    category: "Practical ML Applications",
    image: "https://images.unsplash.com/photo-1705769943793-821f557c6942?ixid=M3w3NjIzNDN8MHwxfHNlYXJjaHwyfHxQcmFjdGljYWwlMjBNTCUyMEFwcGxpY2F0aW9uc3xlbnwwfHx8fDE3NDk4ODg2NDB8MA&ixlib=rb-4.1.0",
    link: "/blog/customer-segmentation-machine-learning"
  },
  {
    title: "Machine Learning Consulting Services: Empowering Small Business Success",
    excerpt: "Discover how machine learning consulting services empower small businesses with custom solutions, predictive analytics, and scalable ML development to drive growth and efficiency.",
    date: "June 13th 2025, 11:47:19 pm",
    readTime: "7 mins",
    category: "Machine Learning Services",
    image: "https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?ixid=M3w3NjIzNDN8MHwxfHNlYXJjaHwyfHxNYWNoaW5lJTIwTGVhcm5pbmclMjBTZXJ2aWNlc3xlbnwwfHx8fDE3NDk4ODgzMDV8MA&ixlib=rb-4.1.0",
    link: "/blog/machine-learning-consulting-services-smbs"
  },
  {
    title: "Best AI Automation Software: Transform Your Business with Intelligent Automation",
    excerpt: "Discover the best AI automation software to streamline tasks, save costs, and boost productivity. Unlock new levels of efficiency for your business today!",
    date: "June 13th 2025, 11:47:19 pm",
    readTime: "7 mins",
    category: "AI Automation Tools & ROI",
    image: "https://images.unsplash.com/photo-1606676539940-12768ce0e762?ixid=M3w3NjIzNDN8MHwxfHNlYXJjaHwyfHxBSSUyMEF1dG9tYXRpb24lMjBUb29scyUyMHxlbnwwfHx8fDE3NDk4ODc3MDl8MA&ixlib=rb-4.1.0",
    link: "/blog/best-ai-automation-software-guide"
  },
  {
    title: "Transform Your Small Business with Business Process Automation Tools",
    excerpt: "Transform your small business with business process automation tools. Learn how to save time, reduce errors, cut costs, and streamline workflows for growth!",
    date: "June 13th 2025, 11:47:19 pm",
    readTime: "7 mins",
    category: "Process Automation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=M3w3NjIzNDN8MHwxfHNlYXJjaHwyfHxQcm9jZXNzJTIwQXV0b21hdGlvbnxlbnwwfHx8fDE3NDk4ODc0MTh8MA&ixlib=rb-4.1.0",
    link: "/blog/business-process-automation-tools"
  },
  {
    title: "AI Examples for Small Businesses: Practical Applications to Boost Efficiency and Growth",
    excerpt: "Discover how small businesses use AI to automate tasks, improve customer service, optimize operations, and boost growth with practical tools and real-world examples.",
    date: "June 13th 2025, 11:47:19 pm",
    readTime: "7 mins",
    category: "AI examples for small businesses",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjIzNDN8MHwxfHNlYXJjaHwxfHxBSSUyMGV4YW1wbGVzJTIwZm9yJTIwc21hbGwlMjBidXNpbmVzc2VzJTJDJTIwaG93JTIwc21hbGwlMjBidXNpbmVzc2VzJTIwdXNlJTIwQUklMkMlMjBBSSUyMHNvbHV0aW9ucyUyMGZvciUyMHJldGFpbCUyRmhlYWx0aGNhcmUlMkZlLWNvbW1lcmNlJTJDJTIwYmVzdCUyMEFJJTIwdG9vbHMlMjBmb3IlMjBzbWFsbCUyMGJ1c2luZXNzJTJDJTIwdXNlJTIwY2FzZXMlMjBvZiUyMEFJJTIwaW4lMjBjdXN0b21lciUyMHNlcnZpY2V8ZW58MHx8fHwxNzQ5ODg0NTM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/blog/ai-examples-small-businesses"
  },
  {
    
    title: "AI Strategy for Small Businesses: A Complete Guide to Success",
    excerpt: "Discover how to develop and implement an effective AI strategy for your small business. Learn about practical solutions, quick wins, and expert guidance to stay competitive in today's market.",
    date: "March 20, 2024",
    readTime: "8 min read",
    category: "Business Strategy",
    image: "https://imagedelivery.net/SZohZ5hDHQrPE1IYbmlzaA/85302a84-632a-4892-214a-8123d1cee900/public",
    link: "/blog/ai-strategy"
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