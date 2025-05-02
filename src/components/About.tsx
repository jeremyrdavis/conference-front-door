
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" 
              alt="Conference session" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-conference-blue">
              About The Conference
            </h2>
            <p className="text-conference-darkGray mb-6">
              TechForward 2025 brings together the brightest minds and innovative leaders from across the tech industry. 
              Over three inspiring days, you'll experience keynotes, workshops, and networking opportunities that will 
              shape the future of technology.
            </p>
            <p className="text-conference-darkGray mb-8">
              Whether you're a developer, designer, executive, or entrepreneur, this conference is designed to provide 
              you with cutting-edge insights and practical knowledge that you can implement immediately.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-conference-lightGray p-4 rounded-lg text-center">
                <h3 className="font-bold text-conference-blue text-2xl md:text-3xl mb-1">50+</h3>
                <p className="text-sm text-conference-darkGray">Speakers</p>
              </div>
              <div className="bg-conference-lightGray p-4 rounded-lg text-center">
                <h3 className="font-bold text-conference-blue text-2xl md:text-3xl mb-1">30+</h3>
                <p className="text-sm text-conference-darkGray">Sessions</p>
              </div>
              <div className="bg-conference-lightGray p-4 rounded-lg text-center">
                <h3 className="font-bold text-conference-blue text-2xl md:text-3xl mb-1">10+</h3>
                <p className="text-sm text-conference-darkGray">Workshops</p>
              </div>
              <div className="bg-conference-lightGray p-4 rounded-lg text-center">
                <h3 className="font-bold text-conference-blue text-2xl md:text-3xl mb-1">2000+</h3>
                <p className="text-sm text-conference-darkGray">Attendees</p>
              </div>
            </div>
            <Button className="bg-conference-blue hover:bg-conference-blue/90">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
