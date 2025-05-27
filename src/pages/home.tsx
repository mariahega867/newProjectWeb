import React, { useEffect } from 'react';
import { Brain, Bot, Cpu, LineChart, Shield, Database, Phone, Mail, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const services = [
  {
    icon: <Brain className="w-12 h-12 text-blue-600" />,
    title: "AI Strategy Consulting",
    description: "Develop a comprehensive AI roadmap tailored to your business objectives and market position",
    features: ["AI Readiness Assessment", "Technology Stack Planning", "ROI Analysis"]
  },
  {
    icon: <Bot className="w-12 h-12 text-blue-600" />,
    title: "Process Automation",
    description: "Streamline operations with intelligent automation solutions that reduce costs and improve efficiency",
    features: ["Workflow Optimization", "RPA Implementation", "Custom AI Solutions"]
  },
  {
    icon: <Cpu className="w-12 h-12 text-blue-600" />,
    title: "Machine Learning Solutions",
    description: "Harness the power of ML to unlock insights and drive data-driven decision making",
    features: ["Predictive Analytics", "Pattern Recognition", "Natural Language Processing"]
  },
  {
    icon: <LineChart className="w-12 h-12 text-blue-600" />,
    title: "Business Intelligence",
    description: "Transform raw data into actionable insights with advanced analytics and visualization",
    features: ["Data Analytics", "Performance Metrics", "Custom Dashboards"]
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: "AI-Powered SEO",
    description: "Transform your content strategy with intelligent, automated solutions that drive traffic and boost engagement",
    features: ["AI-Generated Content Creation", "Keyword Research and Optimization", "Automated Content Distribution"]
  },
  {
    icon: <Database className="w-12 h-12 text-blue-600" />,
    title: "Data Infrastructure",
    description: "Build robust data foundations to power your AI initiatives and drive innovation",
    features: ["Data Architecture", "Cloud Integration", "Scalability Planning"]
  }
];

const whyChooseUs = [
  {
    title: "Tailored Solutions",
    description: "Every business is unique, and so are our solutions. We take the time to understand your needs and deliver applications that align with your goals."
  },
  {
    title: "Cutting-Edge Technology",
    description: "From Generative AI to advanced ML models, we leverage the latest technologies to deliver superior results."
  },
  {
    title: "Proven Expertise",
    description: "Our team of AI experts has a track record of delivering successful projects across industries."
  },
  {
    title: "Customer-Centric Approach",
    description: "Your success is our priority. We work closely with you to ensure our solutions exceed your expectations."
  }
];

export function Home() {
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling to section when navigating from another page
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Clear the state to prevent scrolling on subsequent renders
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <header className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: `url('https://imagedelivery.net/SZohZ5hDHQrPE1IYbmlzaA/85302a84-632a-4892-214a-8123d1cee900/public')`,
               backgroundPosition: 'center',
               backgroundSize: 'cover'
             }}>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center px-4 py-20 md:py-0 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Kynos AI</h2>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Innovate. Lead. Succeed.</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            We help businesses transform their digital presence through AI to achieve unprecedented growth.
          </p>
          <a 
            href="https://kynos-ai-consultant.zapier.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Get Started
          </a>
        </div>
      </header>

      <section id="services" className="relative py-20 px-4">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{
               backgroundImage: `url('https://imagedelivery.net/SZohZ5hDHQrPE1IYbmlzaA/afad7856-3392-4988-082a-f7162214bc00/public')`,
               backgroundPosition: 'center',
               backgroundSize: 'cover'
             }}>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Our Services</h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
              Comprehensive AI solutions to transform your business and drive innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-black/30 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 md:p-8 border border-white/10">
                <div className="mb-4 flex items-center justify-center h-16 w-16 rounded-lg bg-blue-600/20">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">{service.title}</h3>
                <p className="text-gray-200 mb-6 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://kynos-ai-consultant.zapier.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative py-20 px-4">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{
               backgroundImage: `url('https://imagedelivery.net/SZohZ5hDHQrPE1IYbmlzaA/dd1f5ea3-c3de-4dbd-b66b-1d63f739ac00/public')`,
               backgroundPosition: 'center',
               backgroundSize: 'cover'
             }}>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Why Choose Us</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8 bg-black/30 p-6 md:p-8 rounded-lg border border-white/10">
              <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-8 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                At Kynos, we don't just develop AI applications; we create transformative solutions that empower businesses to innovate, lead, and succeed. Here's what sets us apart:
              </p>
              {whyChooseUs.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg md:text-xl font-semibold text-white flex items-start drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mr-2 mt-0.5" />
                    {item.title}
                  </h3>
                  <p className="text-gray-200 pl-8 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20 px-4">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{
               backgroundImage: `url('https://imagedelivery.net/SZohZ5hDHQrPE1IYbmlzaA/22246d44-b563-48fa-f323-c18b79a04a00/public')`,
               backgroundPosition: 'center',
               backgroundSize: 'cover'
             }}>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-black/30 rounded-xl p-6 md:p-8 text-center border border-white/10">
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Call Us</h3>
              <p className="text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">(307) 222-8530</p>
            </div>
            <div className="bg-black/30 rounded-xl p-6 md:p-8 text-center border border-white/10">
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Email Us</h3>
              <p className="text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">contact@kynos.ai</p>
            </div>
            <div className="bg-black/30 rounded-xl p-6 md:p-8 text-center border border-white/10">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Visit Us</h3>
              <p className="text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">30 N Gould St Ste N<br />Sheridan, WY 82801</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Kynos AI. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}