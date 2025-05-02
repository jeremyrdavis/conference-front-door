import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white text-conference-blue shadow-md py-3" 
          : "bg-transparent text-white py-5"
      }`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center text-2xl font-display font-bold">
            <span>DDD</span>
            <span className="text-conference-accent">Workshop</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-conference-accent transition-colors">About</a>
            <a href="#speakers" className="hover:text-conference-accent transition-colors">Speakers</a>
            <a href="#schedule" className="hover:text-conference-accent transition-colors">Schedule</a>
            <a href="#tickets" className="hover:text-conference-accent transition-colors">Tickets</a>
            <a href="#sponsors" className="hover:text-conference-accent transition-colors">Sponsors</a>
            <a href="#faq" className="hover:text-conference-accent transition-colors">FAQ</a>
          </nav>
          
          {/* Register Button */}
          <div className="hidden md:block">
            <Button 
              className={`${
                isScrolled 
                  ? "bg-conference-blue text-white hover:bg-conference-blue/90" 
                  : "bg-white text-conference-blue hover:bg-white/90"
              }`}
            >
              Register Now
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className={`md:hidden pt-4 pb-4 ${isScrolled ? "bg-white" : "bg-conference-blue"}`}>
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="hover:text-conference-accent transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#speakers" 
                className="hover:text-conference-accent transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Speakers
              </a>
              <a 
                href="#schedule" 
                className="hover:text-conference-accent transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Schedule
              </a>
              <a 
                href="#tickets" 
                className="hover:text-conference-accent transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tickets
              </a>
              <a 
                href="#sponsors" 
                className="hover:text-conference-accent transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sponsors
              </a>
              <a 
                href="#faq" 
                className="hover:text-conference-accent transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="px-4 pt-2">
                <Button 
                  className={`w-full ${
                    isScrolled 
                      ? "bg-conference-blue text-white hover:bg-conference-blue/90" 
                      : "bg-white text-conference-blue hover:bg-white/90"
                  }`}
                >
                  Register Now
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
