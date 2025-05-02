
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "When and where will TechForward 2025 take place?",
    answer: "TechForward 2025 will be held on June 15-17, 2025, at the San Francisco Convention Center in San Francisco, California."
  },
  {
    question: "What's included in my conference registration?",
    answer: "Your registration includes access to all sessions and keynotes (as per your ticket type), conference materials, coffee breaks, lunches, and access to the networking reception (for Premium and Executive pass holders)."
  },
  {
    question: "Are there any hotel accommodations available?",
    answer: "Yes, we have negotiated special rates with several hotels near the convention center. Once you register, you'll receive information about booking discounted accommodations."
  },
  {
    question: "Is there a virtual attendance option?",
    answer: "Yes, we offer a virtual attendance option that gives you access to livestreams of all keynotes and selected sessions, plus on-demand recordings after the event. Details can be found on the registration page."
  },
  {
    question: "What is the refund policy?",
    answer: "Refunds are available up to 45 days before the event with a 15% processing fee. Within 45 days, tickets can be transferred to another attendee but are non-refundable. All ticket transfers must be completed at least 7 days before the event."
  },
  {
    question: "Will presentations be available after the conference?",
    answer: "Presentation slides and recordings will be made available to all attendees after the conference. Executive pass holders receive lifetime access to all content, while other ticket holders receive access for 6 months."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-conference-lightGray">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-conference-blue">Frequently Asked Questions</h2>
          <p className="text-conference-darkGray max-w-2xl mx-auto">
            Everything you need to know about the conference
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-conference-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-conference-darkGray">
            Have more questions? <a href="#" className="text-conference-blue font-medium hover:underline">Contact our team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
