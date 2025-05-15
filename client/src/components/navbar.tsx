import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { CloudIcon, MenuIcon, XIcon } from "@/lib/icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 bg-white shadow-md z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <CloudIcon className="text-primary text-3xl h-8 w-8" />
              <span className="font-inter font-bold text-2xl text-primary">TechSphere</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="font-medium text-neutral-700 hover:text-primary transition-colors">Services</a>
            <a href="#pricing" className="font-medium text-neutral-700 hover:text-primary transition-colors">Pricing</a>
            <a href="#about" className="font-medium text-neutral-700 hover:text-primary transition-colors">About</a>
            <a href="#testimonials" className="font-medium text-neutral-700 hover:text-primary transition-colors">Testimonials</a>
            <a href="#faq" className="font-medium text-neutral-700 hover:text-primary transition-colors">FAQ</a>
            <Button className="ml-4" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200 mt-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="font-medium text-neutral-700 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Services
              </a>
              <a 
                href="#pricing" 
                className="font-medium text-neutral-700 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Pricing
              </a>
              <a 
                href="#about" 
                className="font-medium text-neutral-700 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                About
              </a>
              <a 
                href="#testimonials" 
                className="font-medium text-neutral-700 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Testimonials
              </a>
              <a 
                href="#faq" 
                className="font-medium text-neutral-700 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                FAQ
              </a>
              <Button className="w-full" asChild>
                <a href="#contact" onClick={closeMenu}>Contact Us</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
