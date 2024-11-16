// src/App.js
// This is the main component for the behalf.me landing page

// ... (rest of your code follows)

import React from 'react';
import { Button } from "./components/ui/button";
import { Calendar, Home, Smartphone, BookOpen, PhoneCall, Users } from "lucide-react";



function App() {
  
  const handleBookVisit = () => {
    // Replace 'YOUR_TALLY_FORM_URL' with your actual Tally form URL
    window.open('https://tally.so/r/nPX0rP', '_blank');
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F4]">
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
        <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center bg-[#F5F5F4]">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Empower your parents
              <br />
              digitally
            </h1>
            <p className="text-xl mb-8 text-gray-600 max-w-md">
              Empowering seniors with personalized, in-home tech support. We solve your tech challenges so you can stay connected.
            </p>
            <Button className="bg-black text-white hover:bg-gray-800 flex items-center" onClick={handleBookVisit}>
              Get Started
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
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-gray-300 flex items-center justify-center">
                <img
                src="images/behalf_hero.png"
                alt="senior woman using a tablet"
                className='object-cover w-full h-full rounded-lg'
                />
            </div>
          </div>
        </section>

        <section id="features" className="bg-[#FFFBF5] py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose behalf.me?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Home className="h-12 w-12 text-yellow-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Personalized In-Home Support</h3>
                <p className="text-gray-600">Experience one-on-one tech guidance in your familiar environment with behalf.me experts</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Smartphone className="h-12 w-12 text-yellow-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
                <p className="text-gray-600">Get solutions customized to your specific devices and needs, on your behalf</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <BookOpen className="h-12 w-12 text-yellow-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Patience and Understanding</h3>
                <p className="text-gray-600">Our behalf.me experts take the time to explain things at your pace</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#F5F5F4] py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our behalf.me Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
                <Calendar className="h-12 w-12 text-yellow-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Scheduled Home Visits</h3>
                <p className="text-gray-600">Book a time that works for you - behalf.me will be there</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
                <Smartphone className="h-12 w-12 text-yellow-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Comprehensive Device Support</h3>
                <p className="text-gray-600">From smartphones to smart homes, behalf.me has got you covered</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
                <BookOpen className="h-12 w-12 text-yellow-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Follow-up Resources</h3>
                <p className="text-gray-600">Take-home guides and resources to reinforce what you've learned with behalf.me</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
                <PhoneCall className="h-12 w-12 text-yellow-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                <p className="text-gray-600">behalf.me is just a call away for future questions or challenges</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
                <Users className="h-12 w-12 text-yellow-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Family Involvement</h3>
                <p className="text-gray-600">Option to involve family members in the learning process with behalf.me</p>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="bg-[#FBBF24] py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started with behalf.me?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book your first session or get in touch with us for more information about how we can help on your behalf.
            </p>
            <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-3">
              Book a Visit Now
            </Button>
          </div>
        </section>
      </main>
            <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2024 behalf.me. All rights reserved.</p>
          <nav className="flex space-x-4">
            <a href="/terms" className="hover:text-yellow-400">
              Terms
            </a>
            <a href="/privacy" className="hover:text-yellow-400">
              Privacy
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;