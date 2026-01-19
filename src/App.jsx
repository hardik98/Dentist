import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/layout/Navbar';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { Chatbot } from './components/chatbot/Chatbot';

// Lazy load components for better performance
const Hero = lazy(() => import('./components/sections/Hero').then(m => ({ default: m.Hero })));
const Services = lazy(() => import('./components/sections/Services').then(m => ({ default: m.Services })));
const About = lazy(() => import('./components/sections/About').then(m => ({ default: m.About })));
const BeforeAfter = lazy(() => import('./components/sections/BeforeAfter').then(m => ({ default: m.BeforeAfter })));
const Testimonials = lazy(() => import('./components/sections/Testimonials').then(m => ({ default: m.Testimonials })));
const Team = lazy(() => import('./components/sections/Team').then(m => ({ default: m.Team })));
const Booking = lazy(() => import('./components/sections/Booking').then(m => ({ default: m.Booking })));
const Contact = lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })));
const EmergencyCare = lazy(() => import('./components/sections/EmergencyCare').then(m => ({ default: m.EmergencyCare })));
const OfficeHours = lazy(() => import('./components/sections/OfficeHours').then(m => ({ default: m.OfficeHours })));
const Insurance = lazy(() => import('./components/sections/Insurance').then(m => ({ default: m.Insurance })));
const FAQ = lazy(() => import('./components/sections/FAQ').then(m => ({ default: m.FAQ })));

// Loading component
const SectionLoader = () => (
    <div className="min-h-[400px] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-accent-navy border-t-transparent rounded-full animate-spin"></div>
    </div>
);

function App() {
    return (
        <div className="min-h-screen bg-bg-primary">
            <Navbar />
            <main>
                <Suspense fallback={<SectionLoader />}>
                    <Hero />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <EmergencyCare />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <Services />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <About />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <BeforeAfter />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <Testimonials />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <Team />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <OfficeHours />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <Insurance />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <FAQ />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                    <Booking />
                </Suspense>
            </main>
            <Suspense fallback={<SectionLoader />}>
                <Contact />
            </Suspense>
            <ScrollToTop />
            <Chatbot />
        </div>
    );
}

export default App;
