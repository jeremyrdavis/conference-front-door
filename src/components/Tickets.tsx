
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const ticketPlans = [
  {
    name: "Standard Pass",
    price: "$499",
    description: "Access to all keynotes and sessions",
    features: [
      "All keynote presentations",
      "Access to all sessions",
      "Conference materials",
      "Coffee breaks & lunches",
      "Certificate of attendance"
    ],
    highlighted: false
  },
  {
    name: "Premium Pass",
    price: "$799",
    description: "Everything in Standard plus workshops and VIP events",
    features: [
      "All Standard Pass features",
      "Access to workshops",
      "Networking reception",
      "VIP lounge access",
      "Exclusive speaker Q&A sessions"
    ],
    highlighted: true
  },
  {
    name: "Executive Pass",
    price: "$1299",
    description: "Complete all-access experience with exclusive benefits",
    features: [
      "All Premium Pass features",
      "Private dinner with speakers",
      "Priority seating at keynotes",
      "Recorded sessions post-event",
      "1-year membership to TechForward community"
    ],
    highlighted: false
  }
];

const Tickets = () => {
  return (
    <section id="tickets" className="py-20 bg-conference-blue text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Registration Passes</h2>
          <p className="max-w-2xl mx-auto opacity-80">
            Choose the pass that's right for you and secure your spot at TechForward 2025
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ticketPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`flex flex-col h-full ${
                plan.highlighted 
                  ? "bg-white text-conference-blue border-4 border-conference-accent shadow-xl scale-105" 
                  : "bg-white/10 backdrop-blur-sm border-white/20"
              }`}
            >
              <CardHeader className="text-center pb-2">
                <h3 className={`text-2xl font-display font-bold ${plan.highlighted ? "text-conference-blue" : ""}`}>
                  {plan.name}
                </h3>
                <div className={`text-3xl font-bold mt-2 ${plan.highlighted ? "text-conference-accent" : ""}`}>
                  {plan.price}
                </div>
                <p className={`text-sm mt-2 ${plan.highlighted ? "text-gray-600" : "opacity-80"}`}>
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`h-5 w-5 mr-2 flex-shrink-0 ${plan.highlighted ? "text-conference-accent" : ""}`} />
                      <span className={plan.highlighted ? "text-gray-700" : ""}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? "btn-gradient text-white hover:opacity-90" 
                      : "bg-white/20 hover:bg-white/30"
                  }`}
                >
                  Register Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="opacity-80">
            Group discounts available for teams of 5 or more. <a href="#" className="underline">Contact us</a> for details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
