import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './pages/home';
import { News } from './pages/news';
import { Careers } from './pages/careers';
import { Blog } from './pages/blog';
import { BlogPost } from './pages/blogpost';
import { BlogPostAIStrategy } from './pages/blogpost-ai-strategy';
import { BlogPostWildRide } from './pages/blogpostwildride';
import { BusinessAutomationBlogPost } from './pages/blogpost-business-automation';
import { MachineLearningBlogPost } from './pages/ machine-learning-consulting-services-guides';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/ai-unleashed" element={<BlogPost />} />
            <Route path="/blog/ai-wild-ride" element={<BlogPostWildRide />} />
            <Route path="/blog/ai-strategy" element={<BlogPostAIStrategy />} />
            <Route path="/blog/business-automation" element={<BusinessAutomationBlogPost />} />
            <Route path="/blog/implementing-ai-solutions" element={<BlogPost />} />
            <Route path="/blog/machine-learning-consulting-services-guide" element={<MachineLearningBlogPost />} />
            <Route path="/blog/machine-learning-guide" element={<BlogPost />} />
            <Route path="/blog/ai-trends-2024" element={<BlogPost />} />
            <Route path="/blog/ai-security-guide" element={<BlogPost />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;