import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { Chatbot } from './components/chatbot/Chatbot';
import { PageLoader } from './components/ui/PageLoader';

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
const Awards = lazy(() => import('./components/sections/Awards').then(m => ({ default: m.Awards })));

// No individual section loaders - using page-level loader instead
const NoLoader = () => null;

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide loader after initial page load
        // Using window load event to ensure all resources are loaded
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 300);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    return (
        <div className="min-h-screen bg-bg-primary">
            {isLoading && <PageLoader />}
            <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
                <Navbar />
                <main>
                    <Suspense fallback={<NoLoader />}>
                        <Hero />
                    </Suspense>
                    <Suspense fallback={<NoLoader />}>
                        <EmergencyCare />
                    </Suspense>
                    <Suspense fallback={<NoLoader />}>
                        <Services />
                    </Suspense>
                    <Suspense fallback={<NoLoader />}>
                        <About />
                    </Suspense>
                    <Suspense fallback={<NoLoader />}>
                        <BeforeAfter />
                    </Suspense>
                    <Suspense fallback={<NoLoader />}>
                        <Testimonials />
                    </Suspense>
                    <Suspense fallback={<NoLoader />}>
                        <Team />
                    </Suspense>
                    <Suspense fallback={<NoLoader />}>
                        <Awards />
                    </Suspense>
                    <Suspense fallback={<NoLoader />}>
                        <OfficeHours />
                    </Suspense>
                    <Suspense fallback={<NoLoader />}>
                        <Insurance />
                    </Suspense>
                    <Suspense fallback={<NoLoader />}>
                        <FAQ />
                    </Suspense>
                    <Suspense fallback={<NoLoader />}>
                        <Booking />
                    </Suspense>
                </main>
                <Suspense fallback={<NoLoader />}>
                    <Contact />
                </Suspense>
                <ScrollToTop />
                <Chatbot />
            </div>
        </div>
    );
}

export default App;
