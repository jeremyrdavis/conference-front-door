
const sponsors = {
  platinum: [
    { name: "TechCorp", logo: "https://via.placeholder.com/200x80?text=TechCorp" },
    { name: "InnovateLabs", logo: "https://via.placeholder.com/200x80?text=InnovateLabs" }
  ],
  gold: [
    { name: "DevStream", logo: "https://via.placeholder.com/160x60?text=DevStream" },
    { name: "CloudPeak", logo: "https://via.placeholder.com/160x60?text=CloudPeak" },
    { name: "CodeFusion", logo: "https://via.placeholder.com/160x60?text=CodeFusion" }
  ],
  silver: [
    { name: "DataSphere", logo: "https://via.placeholder.com/140x50?text=DataSphere" },
    { name: "WebNexus", logo: "https://via.placeholder.com/140x50?text=WebNexus" },
    { name: "AppFuture", logo: "https://via.placeholder.com/140x50?text=AppFuture" },
    { name: "TechWave", logo: "https://via.placeholder.com/140x50?text=TechWave" }
  ]
};

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-conference-blue">Our Sponsors</h2>
          <p className="text-conference-darkGray max-w-2xl mx-auto">
            TechForward is made possible by the generous support of our sponsors
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Platinum Sponsors */}
          <div>
            <h3 className="text-xl font-display font-bold text-center mb-8 text-conference-blue">Platinum Sponsors</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {sponsors.platinum.map((sponsor, index) => (
                <div key={index} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg shadow-sm">
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`}
                    className="h-16 md:h-20"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Gold Sponsors */}
          <div>
            <h3 className="text-xl font-display font-bold text-center mb-8 text-conference-blue">Gold Sponsors</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {sponsors.gold.map((sponsor, index) => (
                <div key={index} className="flex items-center justify-center p-5 bg-gray-50 rounded-lg shadow-sm">
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`}
                    className="h-12 md:h-16"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Silver Sponsors */}
          <div>
            <h3 className="text-xl font-display font-bold text-center mb-8 text-conference-blue">Silver Sponsors</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {sponsors.silver.map((sponsor, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow-sm">
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`}
                    className="h-10 md:h-12"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-conference-darkGray">
            Interested in sponsoring TechForward 2025? <a href="#" className="text-conference-blue font-medium hover:underline">View our sponsorship prospectus</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
