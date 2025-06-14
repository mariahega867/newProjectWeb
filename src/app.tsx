import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './pages/home';
import { News } from './pages/news';
import { Careers } from './pages/careers';
import { Blog } from './pages/blog';
import { Best AI Automation Software: Transform Your Business with Intelligent Automation } from './pages/best-ai-automation-software-guide';
import { BlogPostAIStrategy } from './pages/blogpost-ai-strategy';
import { BlogPostAIExamplesSmallBusiness } from './pages/ ai_examplessmallbusinesses.tsx';
import { Machine Learning Consulting Services: Empowering Small Business Success } from './pages/machine-learning-consulting-services-smbs';
import { Transform Your Small Business with Business Process Automation Tools } from './pages/business-process-automation-tools';
import { Unlocking Business Growth with Customer Segmentation Using Machine Learning } from './pages/customer-segmentation-machine-learning';

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
            <Route path="/blog/ai-examples-small-businesses" element={<BlogPostAIExamplesSmallBusiness />} />
            <Route path="/blog/ai-strategy" element={<BlogPostAIStrategy />} />
            <Route path="/blog/best-ai-automation-software-guide" element={< Best AI Automation Software: Transform Your Business with Intelligent Automation/>} />
            <Route path="/blog/business-process-automation-tools" element={< Transform Your Small Business with Business Process Automation Tools/>} />
            <Route path="/blog/customer-segmentation-machine-learning" element={< Unlocking Business Growth with Customer Segmentation Using Machine Learning/>} />
            <Route path="/blog/machine-learning-consulting-services-smbs" element={< Machine Learning Consulting Services: Empowering Small Business Success/>} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;