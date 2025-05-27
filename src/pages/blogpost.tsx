import React from 'react';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const sectionImages = {
  hero: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80",
  healthcare: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80",
  jobs: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
  ethics: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80", // Car on the edge of a cliff
  creativity: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80",
  future: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
};

export function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative py-20 px-4">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{
               backgroundImage: `url(${sectionImages.hero})`,
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
                src={sectionImages.hero}
                alt="AI Unleashed: Revolution, Responsibility, and the Road Ahead"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 md:p-12 w-full">
                  <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>March 05, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>15 min read</span>
                    </div>
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-2" />
                      <span>Artificial Intelligence</span>
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    AI Unleashed: Revolution, Responsibility, and the Road Ahead
                  </h1>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 mb-8">
                  What if machines could not only think but also feel the weight of their decisions? Today, artificial intelligence isn't just crunching numbers—it's diagnosing diseases, shaping economies, and even sparking ethical debates that keep us up at night. In the last 24 hours alone, the AI conversation has exploded across blogs, forums, and feeds, revealing a world where innovation races alongside uncertainty. Let's dive into the pulse of AI's latest breakthroughs and challenges—because this isn't just tech talk, it's the blueprint of our future.
                </p>

                <div className="my-12">
                  <img
                    src={sectionImages.healthcare}
                    alt="AI in Healthcare: A futuristic interface displays a glowing mammogram scan with AI overlays highlighting potential anomalies in red, while a doctor in a white coat reviews the results on a tablet"
                    className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                  />
                  <h2 className="text-2xl font-bold mb-4">The Healing Power of AI: Precision Meets Compassion</h2>
                  <p className="text-gray-600 mb-6">
                    Imagine a doctor spotting a rare cancer in a scan before it's too late—not because of years of instinct, but because an AI whispered the answer. In healthcare, AI is stepping up as a game-changer. Recent posts highlight systems like Google's DeepMind, which recently nailed a 92% accuracy rate in predicting breast cancer from mammograms—outpacing human radiologists by a significant margin. This isn't just about cold efficiency; it's about giving patients a fighting chance when time is the enemy.
                  </p>
                  <p className="text-gray-600 mb-6">
                    But here's the kicker: AI isn't flawless. False positives can spark unnecessary panic, while overlooked cases could cost lives. The solution? Hybrid models where AI and human expertise dance together—machines handle the heavy data lifting, and doctors bring the empathy and nuance. Case in point: Stanford's AI-assisted dermatology tool, which flags skin lesions for review, has slashed misdiagnosis rates by 30% in pilot clinics. It's not about replacing doctors—it's about supercharging them.
                  </p>
                </div>

                <div className="my-12">
                  <img
                    src={sectionImages.jobs}
                    alt="AI and the Future of Work: Robots and humans collaborating in a modern workplace"
                    className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                  />
                  <h2 className="text-2xl font-bold mb-4">Jobs in Flux: AI as Creator and Disruptor</h2>
                  <p className="text-gray-600 mb-6">
                    Switch gears to the job market, and AI's dual nature shines bright. On one hand, it's a job-killing titan—think automated warehouses where robots zip around, replacing workers at a clip of 1.3 million jobs annually, per Oxford Economics. On the other, it's a creator, birthing roles we couldn't dream of a decade ago: AI ethicists, data curators, even "prompt engineers" tweaking language models like me!
                  </p>
                  <p className="text-gray-600 mb-6">
                    The real story? Adaptation is key. A viral post yesterday showcased how UPS retrained 80% of its displaced drivers into drone logistics managers—turning a threat into a triumph. The challenge isn't just reskilling—it's mindset. Businesses must invest in lifelong learning, and workers need to embrace change over nostalgia. AI doesn't steal jobs; inertia does.
                  </p>
                </div>

                <div className="my-12">
                  <img
                    src={sectionImages.ethics}
                    alt="AI Ethics: A car teetering on the edge of a cliff, symbolizing the precarious balance of AI decision-making"
                    className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                  />
                  <h2 className="text-2xl font-bold mb-4">Ethics on the Edge: Who's Driving This Thing?</h2>
                  <p className="text-gray-600 mb-6">
                    This brings us to the thorniest topic: ethics. If AI can decide who gets a loan or spot a criminal in a crowd, who ensures it's fair? A hot blog post yesterday dissected bias in facial recognition—turns out, some systems misidentify people of color up to 100 times more often than white faces, according to MIT research. That's not a glitch; it's a crisis.
                  </p>
                  <p className="text-gray-600 mb-6">
                    The fix isn't simple, but it starts with diversity. Teams building AI need varied voices—coders, sociologists, ethicists—to spot blind spots. Take IBM's approach: their AI Fairness 360 toolkit scans algorithms for bias in real-time, flagging inequities before they hit the streets. It's not perfect, but it's progress. Ethics isn't an add-on—it's the foundation.
                  </p>
                </div>

                <div className="my-12">
                  <img
                    src={sectionImages.creativity}
                    alt="AI Creativity: AI-generated art and human collaboration"
                    className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                  />
                  <h2 className="text-2xl font-bold mb-4">Creativity Unleashed: AI as Muse and Maker</h2>
                  <p className="text-gray-600 mb-6">
                    Now, let's lighten up—AI isn't all doom and diagnostics. It's also a creative wildfire. Yesterday, an X thread went nuts over an AI-generated artwork that sold for $1.2 million at a digital auction. Tools like DALL-E 3 are churning out visuals that rival human masters, while AI music platforms like AIVA compose symphonies that hit Spotify's trending lists.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Here's the twist: creativity thrives on constraint, and AI's limitless nature can feel sterile without human spark. The best outcomes? Collaboration. Think of Hans Zimmer teaming up with AI to score Dune—the machine laid the foundation, but Zimmer's soul made it soar. AI isn't the artist; it's the ultimate co-creator.
                  </p>
                </div>

                <div className="my-12">
                  <img
                    src={sectionImages.future}
                    alt="The Future of AI: A bright, technology-enhanced cityscape"
                    className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                  />
                  <h2 className="text-2xl font-bold mb-4">The Road Ahead: Our Move, Not AI's</h2>
                  <p className="text-gray-600 mb-6">
                    So, where does this leave us? AI is a mirror—reflecting our brilliance and our flaws. It's saving lives in hospitals, rewriting careers, wrestling with morality, and painting masterpieces. But it's not autonomous—it's ours to steer. The past 24 hours of AI buzz prove one thing: this tech isn't a distant dream; it's here, messy and marvelous.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Let's not just gawk—let's act. Demand fairness in algorithms, push for reskilling programs, and embrace AI as a partner, not an overlord. The future isn't AI's to shape—it's ours. What will you do with it?
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-8">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">#AI</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">#Tech</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">#Healthcare</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">#Jobs</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">#Ethics</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">#Creativity</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}