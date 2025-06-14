import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './pages/home';
import { News } from './pages/news';
import { Careers } from './pages/careers';
import { Blog } from './pages/blog';
import { BlogPostAIStrategy } from './pages/blogpost-ai-strategy';
import { BlogPostAIExamplesSmallBusiness } from './pages/SmallBuinessEx';
import { BlogPostMarketingToolsSmallBusiness } from './pages/AIMarketing';
import { BlogPostAISEOForSmallBusiness } from './pages/AIseo';
import { BlogPostBestAIAutomationSoftware } from './pages/AutomationGuide';
import { BlogPostDataInfrastructure } from './pages/DataInfru';
import { BlogPostEnhancingDataQuality } from './pages/DataQuality';
import { BlogPostMachineLearningConsulting } from './pages/MLServices';
import { BlogPostBusinessProcessAutomation } from './pages/ProcessAutomation';
import { BlogPostCustomerSegmentation } from './pages/MLCustomerSuccess';
import { BlogPostBISolutions } from './pages/BusinessGrowth';
import { BlogPostUsingData } from './pages/DataDecisions';

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
