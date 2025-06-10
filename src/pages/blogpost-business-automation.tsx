import React from 'react';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPostContent = `
  <h2>Business Process Automation Tools: A Guide for Small Businesses</h2>
  <p>In today's fast-changing world, small businesses need to find ways to work smarter, not harder. Business process automation tools are key to this shift. These innovative software solutions help automate small business operations, making workflows faster, cheaper, and more accurate.</p>
  <!-- Add more content here -->
`;

export function BusinessAutomationBlogPost() {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative py-20 px-4">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{
               backgroundImage: imageError 
                 ? 'linear-gradient(to bottom right, #1e40af, #3b82f6)'
                 : `url('https://images.unsplash.com/photo-1518186285589-2f7649de83e0')`,
               backgroundPosition: 'center',
               backgroundSize: 'cover'
             }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/blog" className="inline-flex items-center text-white mb-8 hover:text-blue-400 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>

          <article className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0"
                alt="Business Process Automation Tools: A Guide for Small Businesses"
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 md:p-12 w-full">
                  <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>March 25, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>12 min read</span>
                    </div>
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-2" />
                      <span>Business Automation</span>
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    Business Process Automation Tools: A Guide for Small Businesses
                  </h1>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blogPostContent }} />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
} 