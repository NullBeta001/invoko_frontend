
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 border-b border-white/10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold">
            <span className="text-gradient">Invoko</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-white transition-colors">Recursos</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-white transition-colors">Como funciona</a>
          <a href="#pricing" className="text-muted-foreground hover:text-white transition-colors">Preços</a>
          <a href="#faq" className="text-muted-foreground hover:text-white transition-colors">FAQ</a>
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
        <div className="md:hidden bg-background py-4 px-4 shadow-lg absolute top-16 left-0 right-0 z-50 animate-fade-in border-b border-white/10">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-muted-foreground hover:text-white transition-colors"
               onClick={() => setIsMenuOpen(false)}>
              Recursos
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-white transition-colors"
               onClick={() => setIsMenuOpen(false)}>
              Como funciona
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-white transition-colors"
               onClick={() => setIsMenuOpen(false)}>
              Preços
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-white transition-colors"
               onClick={() => setIsMenuOpen(false)}>
              FAQ
            </a>
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
