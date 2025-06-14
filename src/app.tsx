import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './pages/home';
import { News } from './pages/news';
import { Careers } from './pages/careers';
import { Blog } from './pages/blog';
import { BlogPostAIStrategy } from './pages/blogpost-ai-strategy';
import { BlogPostAIExamplesSmallBusiness } from './pages/ ai_examplessmallbusinesses.tsx';

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
            <Route path="/blog/_ai-examples-small-businesses" element={<BlogPostAIExamplesSmallBusiness />} />
            <Route path="/blog/ai-strategy" element={<BlogPostAIStrategy />} />
            <Route path="/blog/implementing-ai-solutions" element={<BlogPostAIStrategy />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;