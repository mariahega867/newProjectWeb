import React from 'react';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPostContent } from './_data-infrastructure-consulting-smbs';

export function BlogPostDataInfrastructure() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative py-20 px-4">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://imagedelivery.net/SZohZ5hDHQrPE1IYbmlzaA/1ef8f1b8-92ad-4156-7e79-178e1ec1c24c/public')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center text-white mb-8 hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>

          <article className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="relative h-96">
              <img
                src="https://imagedelivery.net/SZohZ5hDHQrPE1IYbmlzaA/1ef8f1b8-92ad-4156-7e79-178e1ec1c24c/public"
                alt="Data Infrastructure Consulting for Small Business: Unlock Growth With Cloud, AI & Analytics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 md:p-12 w-full">
                  <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>April 28, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>10 min read</span>
                    </div>
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-2" />
                      <span>Modern Data</span>
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    Data Infrastructure Consulting for Small Business: Unlock Growth With Cloud, AI &amp; Analytics
                  </h1>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: blogPostContent }} />

                <div className="flex flex-wrap gap-2 mt-8">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">#DataInfrastructure</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">#CloudStorage</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">#AI</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">#ETL</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">#SMB</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
