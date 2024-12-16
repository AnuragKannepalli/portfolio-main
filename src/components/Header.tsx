import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            Portfolio
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <SocialLinks />
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center space-y-4 py-4">
              <NavLinks />
              <SocialLinks />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLinks = () => (
  <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
    <a href="#home" className="nav-link">Home</a>
    <a href="#about" className="nav-link">About</a>
    <a href="#projects" className="nav-link">Projects</a>
    <a href="#contact" className="nav-link">Contact</a>
  </div>
);

const SocialLinks = () => (
  <div className="flex space-x-4">
    <a href="https://github.com/AnuragKannepalli" className="social-link">
      <Github size={20} />
    </a>
    <a href="https://www.linkedin.com/in/venkatasaianurag-kannepalli/" className="social-link">
      <Linkedin size={20} />
    </a>
    <a href="mailto:anurag.kannepalli@gmail.com" className="social-link">
      <Mail size={20} />
    </a>
  </div>
);

export default Header;