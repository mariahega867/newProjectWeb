import React from 'react';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BlogPostWildRide() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative py-20 px-4">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{
               backgroundImage: `url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485')`,
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
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
                alt="AI's Wild Ride: Top Insights from March 6, 2025"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 md:p-12 w-full">
                  <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>March 07, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>3 min read</span>
                    </div>
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-2" />
                      <span>Technology Trends</span>
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    AI's Wild Ride: Top Insights from March 6, 2025
                  </h1>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-gray-600 mb-8">
                  Buckle up, tech fans! The AI world is buzzing louder than ever, and we've scooped up the hottest insights from the last 24 hours. Smarter bots, wild tools, and game-changing ideas—here's your daily dose of AI magic, served fresh and feisty.
                </p>

                <div className="my-12">
                  <img
                    src="https://www.dropbox.com/scl/fi/xo58m8blfspofavbyu7f1/Leonardo_Kino_XL_AI_brain_sketch_purple_glow_minimalist_style_3.jpg?rlkey=z2hhhkc7ypdkqkixpuleelsat&st=87jwdqs5&dl=1"
                    alt="AI brain sketch with purple glow"
                    className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                  />
                  <h2 className="text-2xl font-bold mb-4">Yesterday's AI Scene: Full Throttle Ahead</h2>
                  <p className="text-gray-600 mb-6">
                    March 6 was an AI whirlwind. X lit up with chatter about a model that codes like it's got a deadline and a triple espresso—faster than you can blink. A blog dropped a stunner: AI's weather predictions are now so spot-on, it's like it's got a crystal ball.
                  </p>
                  <p className="text-gray-600 mb-6">
                    And a tech site raved about AI design tools churning out visuals that'd make a pro artist sweat. Bottom line? AI's not here to play—it's here to dominate.
                  </p>
                </div>

                <div className="my-12">
                  <img
                    src="https://www.dropbox.com/scl/fi/9rrbrc9ob7ooqzhlz36m4/Leonardo_Kino_XL_Circuit_board_pattern_green_lines_futuristic_1.jpg?rlkey=i7l3178ga96j20ka5mthg9vwo&st=w98hb99q&dl=1"
                    alt="Circuit board pattern with green lines"
                    className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                  />
                  <h2 className="text-2xl font-bold mb-4">Looking Ahead: Buckle Up for More</h2>
                  <p className="text-gray-600 mb-6">
                    That's your AI fix, straight from the source! These leaps aren't just tech flexes—they're rewiring how we roll. Check back tomorrow, because this AI party's just warming up!
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-8">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">#AI</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">#Tech</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">#Innovation</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}