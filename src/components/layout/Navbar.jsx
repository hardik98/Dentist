import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const navItems = [
        { label: 'Services', href: '#services' },
        { label: 'About', href: '#about' },
        { label: 'Team', href: '#team' },
        { label: 'Hours', href: '#office-hours' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
    ];

    const smoothScroll = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
                <div className="container mx-auto px-4 md:px-12">
                    <div className={`flex items-center justify-between rounded-full px-6 md:px-8 py-3 transition-all duration-500 ${
                        scrolled 
                            ? 'bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-xl shadow-2xl border-2 border-white/60' 
                            : 'bg-gradient-to-r from-white/90 via-white/80 to-white/90 backdrop-blur-md border-2 border-white/40'
                    }`}>
                        <a href="#hero" onClick={(e) => smoothScroll(e, '#hero')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 via-blue-600 to-pink-500 flex items-center justify-center shadow-lg animate-pulse">
                                <span className="text-white font-serif font-bold text-lg">T</span>
                            </div>
                            <span className="text-[1.1rem] font-bold tracking-tight text-accent-navy hidden sm:block">
                                DENTAL <span className="font-serif font-normal italic">CARE</span>
                            </span>
                        </a>

                        <div className="hidden lg:flex items-center gap-8">
                            {navItems.map((item) => (
                                <a 
                                    key={item.label} 
                                    href={item.href} 
                                    onClick={(e) => smoothScroll(e, item.href)}
                                    className="text-[11px] font-bold tracking-[0.2em] uppercase text-text-muted hover:text-accent-navy transition-colors relative group"
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-navy group-hover:w-full transition-all duration-300" />
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <a 
                                href="tel:+15551234567" 
                                className="hidden md:flex items-center gap-2 text-accent-navy hover:text-accent-blue transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                <span className="text-sm font-semibold">(555) 123-4567</span>
                            </a>
                            <button 
                                onClick={(e) => smoothScroll(e, '#booking')}
                                className="btn-premium py-2.5 px-5 text-sm rounded-full hidden sm:block"
                            >
                                Book Online
                            </button>
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="lg:hidden w-10 h-10 flex items-center justify-center text-accent-navy"
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
                        >
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-12">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-navy to-accent-blue flex items-center justify-center">
                                            <span className="text-white font-serif font-bold text-xl">T</span>
                                        </div>
                                        <span className="text-lg font-bold tracking-tight text-accent-navy">
                                            DENTAL <span className="font-serif font-normal italic">CARE</span>
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="w-10 h-10 flex items-center justify-center text-accent-navy hover:bg-bg-accent rounded-lg transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                <nav className="space-y-2 mb-8">
                                    {navItems.map((item, i) => (
                                        <motion.a
                                            key={item.label}
                                            href={item.href}
                                            onClick={(e) => smoothScroll(e, item.href)}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="block py-4 px-4 text-accent-navy font-semibold hover:bg-bg-accent rounded-lg transition-colors"
                                        >
                                            {item.label}
                                        </motion.a>
                                    ))}
                                </nav>

                                <div className="pt-8 border-t border-border-thin space-y-4">
                                    <a
                                        href="tel:+15551234567"
                                        className="flex items-center gap-3 w-full py-4 px-4 bg-accent-navy text-white rounded-lg font-semibold hover:bg-accent-blue transition-colors"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call: (555) 123-4567
                                    </a>
                                    <button
                                        onClick={(e) => {
                                            smoothScroll(e, '#booking');
                                        }}
                                        className="w-full btn-premium py-4"
                                    >
                                        Book Appointment
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
