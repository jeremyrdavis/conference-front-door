
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Coffee, Martini } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const scheduleData = {
  morningKeynote: {
    time: "9:00 AM - 10:00 AM",
    title: "Opening Keynote: The Future of Domain-Driven Design",
    speaker: "Dr. Sarah Chen, Google",
    location: "Main Hall",
    isKeynote: true
  },
  lunch: {
    time: "12:30 PM - 1:30 PM",
    title: "Lunch Break",
    location: "Dining Hall",
    isBreak: true
  },
  afternoonKeynote: {
    time: "4:15 PM - 5:15 PM",
    title: "Closing Keynote: Implementing DDD in Enterprise Organizations",
    speaker: "Dr. James Lee, DDD Alliance",
    location: "Main Hall",
    isKeynote: true
  },
  reception: {
    time: "5:30 PM - 7:00 PM",
    title: "Reception & Networking Happy Hour",
    location: "Rooftop Garden",
    isBreak: true
  },
  trackA: [
    {
      time: "10:15 AM - 11:00 AM",
      title: "Strategic Design Patterns",
      speaker: "Michael Rodriguez, TechVision",
      location: "Room A"
    },
    {
      time: "11:15 AM - 12:00 PM",
      title: "Bounded Contexts in Microservices",
      speaker: "Emily Washington, Design+",
      location: "Room A"
    },
    {
      time: "1:45 PM - 2:30 PM",
      title: "Event Sourcing Fundamentals",
      speaker: "Alex Johnson, Eventify",
      location: "Room A"
    },
    {
      time: "2:45 PM - 3:30 PM",
      title: "CQRS in Practice",
      speaker: "Lisa Chen, Axon Framework",
      location: "Room A"
    },
    {
      time: "3:45 PM - 4:00 PM",
      title: "Break",
      location: "Atrium",
      isBreak: true
    }
  ],
  trackB: [
    {
      time: "10:15 AM - 11:00 AM",
      title: "Domain Modeling Techniques",
      speaker: "Jennifer Parks, Model First Inc",
      location: "Room B"
    },
    {
      time: "11:15 AM - 12:00 PM",
      title: "Testing Domain Models",
      speaker: "Robert Kim, Test Alliance",
      location: "Room B"
    },
    {
      time: "1:45 PM - 2:30 PM",
      title: "Implementing Aggregates",
      speaker: "David Martinez, DDD Practitioners",
      location: "Room B"
    },
    {
      time: "2:45 PM - 3:30 PM",
      title: "Value Objects vs Entities",
      speaker: "Sandra Wilson, Object Design Co",
      location: "Room B"
    },
    {
      time: "3:45 PM - 4:00 PM",
      title: "Break",
      location: "Atrium",
      isBreak: true
    }
  ]
};

const ScheduleItem = ({ time, title, speaker, location, isKeynote, isBreak }: { 
  time: string, 
  title: string, 
  speaker?: string, 
  location: string,
  isKeynote?: boolean,
  isBreak?: boolean
}) => (
  <div className={`flex flex-col md:flex-row gap-4 md:gap-8 border-b border-gray-200 py-6 ${isKeynote ? 'bg-blue-50/50' : ''} ${isBreak ? 'bg-amber-50/50' : ''}`}>
    <div className="md:w-1/5">
      <p className="text-conference-accent font-medium flex items-center">
        <Clock className="h-4 w-4 mr-2" />
        {time}
      </p>
    </div>
    <div className="md:w-4/5">
      <h3 className={`font-bold text-lg ${isKeynote ? 'text-conference-blue' : ''} ${isBreak ? 'text-amber-600' : (!isKeynote ? 'text-gray-800' : '')}`}>
        {title}
      </h3>
      {speaker && <p className="text-gray-600 mt-1">{speaker}</p>}
      <p className="text-sm text-gray-500 mt-2 flex items-center">
        <MapPinIcon className="h-4 w-4 mr-1" /> {location}
      </p>
      {isBreak && 
        <div className="mt-2">
          {title.includes("Lunch") ? (
            <Coffee className="h-4 w-4 text-amber-600 inline mr-2" />
          ) : title.includes("Reception") ? (
            <Martini className="h-4 w-4 text-amber-600 inline mr-2" />
          ) : null}
          <span className="text-sm text-amber-600">{title.includes("Lunch") ? "Refreshments provided" : title.includes("Reception") ? "Drinks and appetizers served" : ""}</span>
        </div>
      }
    </div>
  </div>
);

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-conference-blue">Conference Schedule</h2>
          <p className="text-conference-darkGray max-w-2xl mx-auto">
            A full day of inspiring talks, workshops, and networking opportunities
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto border rounded-lg p-6 bg-gray-50">
          <h3 className="font-display font-bold text-xl mb-6 text-center text-conference-blue">June 15, 2025</h3>
          
          {/* Opening Keynote */}
          <ScheduleItem {...scheduleData.morningKeynote} />
          
          {/* Parallel Tracks */}
          <div className="my-8">
            <h4 className="text-lg font-bold mb-4 text-center">Parallel Sessions</h4>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/4">Time</TableHead>
                    <TableHead className="w-[37.5%]">Track A (Room A)</TableHead>
                    <TableHead className="w-[37.5%]">Track B (Room B)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {scheduleData.trackA.map((sessionA, index) => {
                    const sessionB = scheduleData.trackB[index];
                    
                    // If this is a break that appears in both tracks, show it as a spanning row
                    if (sessionA.isBreak && sessionB?.isBreak) {
                      return (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{sessionA.time}</TableCell>
                          <TableCell colSpan={2} className="text-center bg-amber-50/50">
                            <div className="flex items-center justify-center">
                              <Coffee className="h-4 w-4 mr-2" />
                              {sessionA.title} - {sessionA.location}
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    }
                    
                    return (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{sessionA.time}</TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{sessionA.title}</p>
                            <p className="text-sm text-gray-600">{sessionA.speaker}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{sessionB.title}</p>
                            <p className="text-sm text-gray-600">{sessionB.speaker}</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
          
          {/* Lunch Break */}
          <ScheduleItem {...scheduleData.lunch} />
          
          {/* Closing Keynote */}
          <ScheduleItem {...scheduleData.afternoonKeynote} />
          
          {/* Reception */}
          <ScheduleItem {...scheduleData.reception} />
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Subject to minor changes. All sessions will be recorded for attendees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
