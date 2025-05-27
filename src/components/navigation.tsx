import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white font-bold text-xl">Kynos AI</Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/blog" className="text-white hover:text-blue-400 transition-colors">Blog</Link>
            <Link to="/news" className="text-white hover:text-blue-400 transition-colors">AI News</Link>
            <Link to="/careers" className="text-white hover:text-blue-400 transition-colors">Careers</Link>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-white hover:text-blue-400 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-white hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              to="/careers"
              className="hidden md:flex items-center bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-400/30 hover:bg-blue-600/30 transition-colors"
            >
              We're Hiring
            </Link>
            <a 
              href="https://kynos-ai-consultant.zapier.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-black/90">
          <div className="px-4 py-4 space-y-4">
            <Link
              to="/"
              className="block text-white hover:text-blue-400 transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="block text-white hover:text-blue-400 transition-colors"
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              to="/news"
              className="block text-white hover:text-blue-400 transition-colors"
              onClick={closeMenu}
            >
              AI News
            </Link>
            <Link
              to="/careers"
              className="block text-white hover:text-blue-400 transition-colors"
              onClick={closeMenu}
            >
              Careers
            </Link>
            <button
              onClick={() => scrollToSection('services')}
              className="block text-white hover:text-blue-400 transition-colors w-full text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block text-white hover:text-blue-400 transition-colors w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block text-white hover:text-blue-400 transition-colors w-full text-left"
            >
              Contact
            </button>
            <Link
              to="/careers"
              className="block text-blue-400 hover:text-blue-300 transition-colors font-medium"
              onClick={closeMenu}
            >
              We're Hiring
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}