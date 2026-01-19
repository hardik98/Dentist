import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
            <div className="container mx-auto px-4 md:px-12">
                <div className={`flex items-center justify-between rounded-full px-8 py-3 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg border-white/50 border' : 'bg-transparent'}`}>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-sm bg-accent-navy flex items-center justify-center">
                            <span className="text-white font-serif font-bold text-lg">T</span>
                        </div>
                        <span className="text-[1.1rem] font-bold tracking-tight text-accent-navy">
                            THORNE <span className="font-serif font-normal italic">CLINICAL</span>
                        </span>
                    </div>

                    <div className="hidden lg:flex items-center gap-12">
                        {['Procedures', 'Philosophy', 'Journal', 'Concierge'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-bold tracking-[0.2em] uppercase text-text-muted hover:text-accent-navy transition-colors">{item}</a>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex flex-col items-end">
                            <span className="text-[10px] font-bold text-accent-gold uppercase tracking-[0.2em]">New York</span>
                            <span className="text-[11px] font-medium text-text-light">Private Care Line</span>
                        </div>
                        <button className="btn-premium py-3 px-6 text-sm rounded-full">
                            Book Online
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
