import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './pages/home';
import { News } from './pages/news';
import { Careers } from './pages/careers';
import { Blog } from './pages/blog';
import { BlogPostAIStrategy } from './pages/blogpost-ai-strategy';
import { BlogPostAIExamplesSmallBusiness } from './pages/SmallBusinessEx';
import { BlogPostMarketingToolsSmallBusiness } from './pages/AIMarketing';
import { BlogPostAISEOForSmallBusiness } from './pages/AIseo';
import { BlogPostAIAutomationSoftware } from './pages/AutomationGuide';
import { BlogPostDataInfrastructure } from './pages/DataInfru';
import { BlogPostDataQualitySMB } from './pages/DataQuality';
import { BlogPostMLConsulting } from './pages/MLServices';
import { BlogPostBusinessProcessAutomation } from './pages/ProcessAutomation';
import { BlogPostMLBusinessGrowth } from './pages/MLCustomerSuccess';
import { BlogPostBISMB } from './pages/BusinessGrowth';
import { BlogPostDataDrivenDecisions } from './pages/DataDecisions';

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
            <Route path="/blog/best-ai-automation-software-guide" element={<BlogPostAIAutomationSoftware />} />
            <Route path="/blog/bi-solutions-small-businesses-growth" element={<BlogPostBISMB />} />
            <Route path="/blog/business-process-automation-tools" element={<BlogPostBusinessProcessAutomation />} />
            <Route path="/blog/customer-segmentation-machine-learning" element={<BlogPostMLBusinessGrowth />} />
            <Route path="/blog/data-infrastructure-consulting-smbs" element={<BlogPostDataInfrastructure />} />
            <Route path="/blog/enhancing-data-quality-ai-projects" element={<BlogPostDataQualitySMB />} />
            <Route path="/blog/machine-learning-consulting-services-smbs" element={<BlogPostMLConsulting />} />
            <Route path="/blog/using-data-for-business-decisions" element={<BlogPostDataDrivenDecisions />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
