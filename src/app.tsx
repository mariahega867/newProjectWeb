import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { Home } from './pages/home';
import { News } from './pages/news';
import { Careers } from './pages/careers';
import { Blog } from './pages/blog';
import { BlogPost } from './pages/blogpost';
import { BlogPostWildRide } from './pages/blogpostwildride';
import { BlogPostAIStrategy } from './pages/blogpost-ai-strategy';
import { BusinessAutomationBlogPost } from './pages/blogpost-business-automation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/ai-unleashed" element={<BlogPost />} />
          <Route path="/blog/ai-wild-ride" element={<BlogPostWildRide />} />
          <Route path="/blog/ai-strategy" element={<BlogPostAIStrategy />} />
          <Route path="/blog/business-automation" element={<BusinessAutomationBlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;