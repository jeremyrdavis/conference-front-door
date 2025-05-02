
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80')",
          filter: "brightness(0.4)"
        }}
      />
      
      {/* Content */}
      <div className="container relative z-10 px-6 md:px-12 text-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
            TECH<span className="text-conference-accent">FORWARD</span> 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
            Shaping the Future of Technology and Innovation
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>June 15-17, 2025</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>San Francisco, CA</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="btn-gradient text-white hover:opacity-90 transition-opacity">
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-conference-blue transition-colors">
              View Schedule
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
