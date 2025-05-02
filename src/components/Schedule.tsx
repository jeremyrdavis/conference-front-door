
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "lucide-react";

const scheduleData = {
  day1: [
    {
      time: "9:00 AM",
      title: "Opening Keynote",
      speaker: "Dr. Sarah Chen, Google",
      location: "Main Hall"
    },
    {
      time: "10:30 AM",
      title: "The Future of Web Development",
      speaker: "Michael Rodriguez, TechVision",
      location: "Room A"
    },
    {
      time: "1:00 PM",
      title: "AI in Business: Practical Applications",
      speaker: "Emily Washington, Design+",
      location: "Room B"
    },
    {
      time: "3:30 PM",
      title: "Building Secure Systems",
      speaker: "Dr. James Lee, Blockchain Innovator",
      location: "Room C"
    },
  ],
  day2: [
    {
      time: "9:00 AM",
      title: "Innovation in Cloud Computing",
      speaker: "Michael Rodriguez, TechVision",
      location: "Main Hall"
    },
    {
      time: "10:30 AM",
      title: "Design Systems for Scale",
      speaker: "Emily Washington, Design+",
      location: "Room A"
    },
    {
      time: "1:00 PM",
      title: "Machine Learning Workshop",
      speaker: "Dr. Sarah Chen, Google",
      location: "Workshop Room"
    },
    {
      time: "3:30 PM",
      title: "The Future of Digital Privacy",
      speaker: "Panel Discussion",
      location: "Main Hall"
    },
  ],
  day3: [
    {
      time: "9:00 AM",
      title: "Web3 and Decentralized Applications",
      speaker: "Dr. James Lee, Blockchain Innovator",
      location: "Main Hall"
    },
    {
      time: "11:00 AM",
      title: "Accessibility in Modern Applications",
      speaker: "Emily Washington, Design+",
      location: "Room A"
    },
    {
      time: "1:30 PM",
      title: "Future Tech Panel",
      speaker: "All Keynote Speakers",
      location: "Main Hall"
    },
    {
      time: "4:00 PM",
      title: "Closing Remarks & Networking",
      speaker: "Conference Team",
      location: "Main Hall"
    },
  ]
};

const ScheduleItem = ({ time, title, speaker, location }: { time: string, title: string, speaker: string, location: string }) => (
  <div className="flex flex-col md:flex-row gap-4 md:gap-8 border-b border-gray-200 py-6">
    <div className="md:w-1/5">
      <p className="text-conference-accent font-medium">{time}</p>
    </div>
    <div className="md:w-4/5">
      <h3 className="font-bold text-lg text-conference-blue">{title}</h3>
      <p className="text-gray-600 mt-1">{speaker}</p>
      <p className="text-sm text-gray-500 mt-2 flex items-center">
        <MapPinIcon className="h-4 w-4 mr-1" /> {location}
      </p>
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
            Three days packed with inspiring talks, workshops, and networking opportunities
          </p>
        </div>
        
        <Tabs defaultValue="day1" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="day1" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Day 1</span>
              <span className="hidden md:inline ml-1 text-xs opacity-70">June 15</span>
            </TabsTrigger>
            <TabsTrigger value="day2" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Day 2</span>
              <span className="hidden md:inline ml-1 text-xs opacity-70">June 16</span>
            </TabsTrigger>
            <TabsTrigger value="day3" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Day 3</span>
              <span className="hidden md:inline ml-1 text-xs opacity-70">June 17</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="day1" className="border rounded-lg p-6 bg-gray-50">
            <h3 className="font-display font-bold text-xl mb-6 text-center text-conference-blue">Day 1 - June 15, 2025</h3>
            <div className="space-y-0">
              {scheduleData.day1.map((item, index) => (
                <ScheduleItem key={index} {...item} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="day2" className="border rounded-lg p-6 bg-gray-50">
            <h3 className="font-display font-bold text-xl mb-6 text-center text-conference-blue">Day 2 - June 16, 2025</h3>
            <div className="space-y-0">
              {scheduleData.day2.map((item, index) => (
                <ScheduleItem key={index} {...item} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="day3" className="border rounded-lg p-6 bg-gray-50">
            <h3 className="font-display font-bold text-xl mb-6 text-center text-conference-blue">Day 3 - June 17, 2025</h3>
            <div className="space-y-0">
              {scheduleData.day3.map((item, index) => (
                <ScheduleItem key={index} {...item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Full schedule with all sessions and workshops will be available soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
