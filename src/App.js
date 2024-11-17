import React from 'react';
import { Button } from "./components/ui/button";
import { Check, Shield, Home, BookOpen } from "lucide-react";

// Reusable CTA Component
const SectionCTA = ({ message = "Book a Home Visit" }) => {
  const handleBookVisit = () => {
    window.open('https://tally.so/r/nPX0rP', '_blank');
  };

  return (
    <div className="mt-12 text-center">
      <Button 
        onClick={handleBookVisit}
        className="bg-black text-white hover:bg-gray-800 transition-colors inline-flex items-center gap-2 px-6 py-3"
      >
        <span>{message}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Button>
    </div>
  );
};

function App() {
  const handleBookVisit = () => {
    window.open('https://tally.so/r/nPX0rP', '_blank');
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F4]">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between bg-gradient-to-br from-[#FFF4E6] to-[#FFECD1]">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">behalf.me</span>
        </a>
        <nav className="flex space-x-4 sm:space-x-8">
          <a className="text-sm font-medium hover:text-yellow-500" href="#pricing">
            Pricing
          </a>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 bg-[#F5F5F4]">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 z-10">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Your Parents' Personal Tech Expert
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Because you can't always be there to help
              </p>
              <Button 
                className="bg-black text-white hover:bg-gray-800 flex items-center" 
                onClick={handleBookVisit}
              >
                Book a Home Visit
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
                  className="ml-2 h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent z-10" />
                <img
                  src="images/behalf_hero.png"
                  alt="Senior using technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sounds Familiar Section */}
        <section className="bg-[#FFFBF5] py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              Sounds Familiar?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Home className="w-12 h-12" />,
                  title: '"Beta, WhatsApp is not working again!"',
                  description: "No more lengthy phone calls trying to explain tech support to your parents. We'll handle it in person."
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: '"Is this UPI request genuine?"',
                  description: "Protect your parents from online scams. We'll teach them digital safety while solving their tech issues."
                },
                {
                  icon: <BookOpen className="w-12 h-12" />,
                  title: '"Can you come home and fix this?"',
                  description: "Can't take time off work for tech support? Let us be your parents' go-to tech person."
                }
              ].map((card, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-yellow-500">
                      {card.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
            <SectionCTA message="Get Help With Your Tech Issues" />
          </div>
        </section>

        {/* Daily Digital Challenges Section */}
        <section className="bg-[#F5F5F4] py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              We Help With Daily Digital Challenges
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Essential Services Card */}
              <div className="bg-white rounded-lg p-8 shadow-md flex-1">
                <h3 className="text-xl font-semibold mb-6">Essential Services</h3>
                <div className="space-y-4">
                  {[
                    "Setting up UPI payments for daily needs",
                    "Troubleshooting video calls with family",
                    "Managing online medicine orders",
                    "Booking cab services safely"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-600">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Digital Safety Card */}
              <div className="bg-white rounded-lg p-8 shadow-md flex-1">
                <h3 className="text-xl font-semibold mb-6">Digital Safety</h3>
                <div className="space-y-4">
                  {[
                    "Identifying and avoiding online scams",
                    "Secure password management",
                    "Safe online banking practices",
                    "Understanding which apps to trust"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-600">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <SectionCTA message="Schedule Your Tech Support Visit" />
          </div>
        </section>

        {/* Peace of Mind Section */}
        <section className="bg-[#FFFBF5] py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              Peace of Mind for You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  number: "1",
                  title: "Save Time",
                  description: "No more long explanation calls or weekend visits for tech support"
                },
                {
                  number: "2",
                  title: "Stay Safe",
                  description: "Protect your parents from digital frauds and scams"
                },
                {
                  number: "3",
                  title: "Be Independent",
                  description: "Help your parents become digitally confident"
                }
              ].map((card, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {card.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
            <SectionCTA message="Book Your First Visit Today" />
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p>&copy; 2024 behalf.me. All rights reserved.</p>
          <nav className="flex space-x-4">
            <a href="/terms" className="hover:text-yellow-400">Terms</a>
            <a href="/privacy" className="hover:text-yellow-400">Privacy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;