import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { BeforeAfter } from './components/sections/BeforeAfter';
import { Testimonials } from './components/sections/Testimonials';
import { Team } from './components/sections/Team';
import { Booking } from './components/sections/Booking';
import { Contact } from './components/sections/Contact';

function App() {
    return (
        <div className="min-h-screen bg-bg-primary">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <About />
                <BeforeAfter />
                <Testimonials />
                <Team />
                <Booking />
            </main>
            <Contact />
        </div>
    );
}

export default App;
