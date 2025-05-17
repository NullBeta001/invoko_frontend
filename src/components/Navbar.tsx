import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: section,
          offsetY: 80
        },
        ease: "power3.inOut"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="py-4 border-b border-white/10 fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-lg z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold">
            <span className="text-gradient">Invoko</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("#features")} className="text-muted-foreground hover:text-white transition-colors">
            Recursos
          </button>
          <button onClick={() => scrollToSection("#how-it-works")} className="text-muted-foreground hover:text-white transition-colors">
            Como funciona
          </button>
          <button onClick={() => scrollToSection("#pricing")} className="text-muted-foreground hover:text-white transition-colors">
            Preços
          </button>
          <button onClick={() => scrollToSection("#faq")} className="text-muted-foreground hover:text-white transition-colors">
            FAQ
          </button>
          <Button variant="outline" className="border-invoko-purple text-invoko-purple hover:bg-invoko-purple hover:text-white">
            Login
          </Button>
          <Button className="bg-invoko-purple hover:bg-opacity-90">
            Começar Grátis
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/80 backdrop-blur-lg py-4 px-4 shadow-lg absolute top-16 left-0 right-0 z-50 animate-fade-in border-b border-white/10">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection("#features")} className="text-left text-muted-foreground hover:text-white transition-colors">
              Recursos
            </button>
            <button onClick={() => scrollToSection("#how-it-works")} className="text-left text-muted-foreground hover:text-white transition-colors">
              Como funciona
            </button>
            <button onClick={() => scrollToSection("#pricing")} className="text-left text-muted-foreground hover:text-white transition-colors">
              Preços
            </button>
            <button onClick={() => scrollToSection("#faq")} className="text-left text-muted-foreground hover:text-white transition-colors">
              FAQ
            </button>
            <Button variant="outline" className="border-invoko-purple text-invoko-purple hover:bg-invoko-purple hover:text-white w-full">
              Login
            </Button>
            <Button className="bg-invoko-purple hover:bg-opacity-90 w-full">
              Começar Grátis
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
