import React from 'react';
import { MapPin, Phone, Mail, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { GradientOrbs } from '../ui/GradientOrbs';
import { Sparkles } from '../ui/Sparkles';

export function Contact() {
    return (
        <footer id="contact" className="border-t border-white/30 pt-32 pb-16 relative overflow-hidden gradient-hero">
            {/* Subtle Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <GradientOrbs />
            </div>
            <div className="absolute inset-0 opacity-30">
                <Sparkles count={15} />
            </div>
            <div className="absolute inset-0 bg-white/40 pointer-events-none" />
            <div className="container mx-auto px-4 md:px-12 relative z-10">

                <div className="grid lg:grid-cols-4 gap-20 mb-32">

                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-8 h-8 rounded-sm bg-accent-navy flex items-center justify-center">
                                <span className="text-white font-serif font-bold text-lg">T</span>
                            </div>
                            <span className="text-[1.1rem] font-bold tracking-tight text-accent-navy">
                                DENTAL <span className="font-serif font-normal italic">CARE</span>
                            </span>
                        </div>
                        <h3 className="text-4xl font-serif mb-8 italic max-w-sm">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</h3>
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-full border border-border-thin flex items-center justify-center hover:bg-accent-navy hover:text-white transition-all duration-500">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full border border-border-thin flex items-center justify-center hover:bg-accent-navy hover:text-white transition-all duration-500">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <p className="text-[10px] font-bold tracking-[0.3em] text-text-light uppercase mb-8">Navigation</p>
                        <ul className="space-y-4">
                            {['Procedures', 'Clinical Philosophy', 'Patient Journal', 'Concierge', 'Privacy Protocol'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm font-medium text-text-muted hover:text-accent-navy transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-[10px] font-bold tracking-[0.3em] text-text-light uppercase mb-8">Contact Protocol</p>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start">
                                <MapPin className="w-5 h-5 text-accent-navy shrink-0" />
                                <span className="text-sm text-text-muted">123 Main Street, Suite 100, City, State 12345</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <Phone className="w-5 h-5 text-accent-navy shrink-0" />
                                <span className="text-sm text-text-muted">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <Mail className="w-5 h-5 text-accent-navy shrink-0" />
                                <span className="text-sm text-text-muted">info@dentalcare.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pt-16 border-t border-border-thin flex flex-col md:row items-center justify-between gap-8">
                    <p className="text-xs text-text-light tracking-widest font-bold uppercase">
                        © {new Date().getFullYear()} DENTAL CARE GROUP. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-10">
                        <a href="#" className="text-xs text-text-light tracking-widest font-bold uppercase hover:text-accent-navy transition-colors">Security Details</a>
                        <a href="#" className="text-xs text-text-light tracking-widest font-bold uppercase hover:text-accent-navy transition-colors flex items-center gap-2">
                            Back to Top <ArrowUpRight className="w-3 h-3" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
