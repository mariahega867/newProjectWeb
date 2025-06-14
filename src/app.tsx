import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './pages/home';
import { News } from './pages/news';
import { Careers } from './pages/careers';
import { Blog } from './pages/blog';
import { BlogPostAIStrategy } from './pages/blogpost-ai-strategy';
import { BlogPostAIExamplesSmallBusiness } from './pages/ai_examplessmallbusinesses';
import { BlogPostMarketingToolsSmallBusiness } from './pages/ai-marketing-tools-small-business';
import { BlogPostAISEOForSmallBusiness } from './pages/ai-seo-services-small-business';
import { BlogPostBestAIAutomationSoftware } from './pages/best-ai-automation-software-guide';
import { BlogPostDataInfrastructure } from './pages/data-infrastructure-consulting-smbs';
import { BlogPostEnhancingDataQuality } from './pages/enhancing-data-quality-ai-projects';
import { BlogPostMachineLearningConsulting } from './pages/machine-learning-consulting-services-smbs';
import { BlogPostBusinessProcessAutomation } from './pages/business-process-automation-tools';
import { BlogPostCustomerSegmentation } from './pages/customer-segmentation-machine-learning';
import { BlogPostBISolutions } from './pages/bi-solutions-small-businesses-growth';
import { BlogPostUsingData } from './pages/using-data-for-business-decisions';

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
            <Route path="/blog/ai-marketing-tools-small-business" element={<BlogPostMarketingToolsSmallBusiness />} />
            <Route path="/blog/ai-seo-services-small-business" element={<BlogPostAISEOForSmallBusiness />} />
            <Route path="/blog/ai-strategy" element={<BlogPostAIStrategy />} />
            <Route path="/blog/best-ai-automation-software-guide" element={<BlogPostBestAIAutomationSoftware />} />
            <Route path="/blog/bi-solutions-small-businesses-growth" element={<BlogPostBISolutions />} />
            <Route path="/blog/business-process-automation-tools" element={<BlogPostBusinessProcessAutomation />} />
            <Route path="/blog/customer-segmentation-machine-learning" element={<BlogPostCustomerSegmentation />} />
            <Route path="/blog/data-infrastructure-consulting-smbs" element={<BlogPostDataInfrastructure />} />
            <Route path="/blog/enhancing-data-quality-ai-projects" element={<BlogPostEnhancingDataQuality />} />
            <Route path="/blog/machine-learning-consulting-services-smbs" element={<BlogPostMachineLearningConsulting />} />
            <Route path="/blog/using-data-for-business-decisions" element={<BlogPostUsingData />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;