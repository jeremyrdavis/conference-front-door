
import { Card, CardContent } from "@/components/ui/card";

const speakersData = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Research Director, Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&h=256&q=80",
    topic: "The Future of Machine Learning"
  },
  {
    name: "Michael Rodriguez",
    role: "CTO, TechVision",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&h=256&q=80",
    topic: "Building Scalable Systems"
  },
  {
    name: "Emily Washington",
    role: "UX Director, Design+",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80",
    topic: "User-Centered Design Principles"
  },
  {
    name: "Dr. James Lee",
    role: "Blockchain Innovator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&h=256&q=80",
    topic: "Web3 and the Future of Finance"
  },
];

const Speakers = () => {
  return (
    <section id="speakers" className="py-20 bg-conference-lightGray">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-conference-blue">Featured Speakers</h2>
          <p className="text-conference-darkGray max-w-2xl mx-auto">
            Learn from industry leaders and innovators who are shaping the future of technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakersData.map((speaker, index) => (
            <Card key={index} className="overflow-hidden transition-transform hover:-translate-y-1 duration-300 bg-white">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-display font-bold text-xl text-conference-blue">{speaker.name}</h3>
                <p className="text-conference-accent font-medium mt-1">{speaker.role}</p>
                <p className="text-sm text-gray-600 mt-4">{speaker.topic}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 font-medium">
            ...and 40+ more industry experts. Full speaker lineup will be announced soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
