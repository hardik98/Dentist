import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { GradientOrbs } from '../ui/GradientOrbs';
import { Sparkles } from '../ui/Sparkles';
import { clientAvatars } from '../../utils/placeholders';

const journals = [
    {
        author: "Lorem Ipsum",
        role: "Private Client",
        title: "The Aesthetic Journey",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        rating: 5,
        img: clientAvatars.client1
    },
    {
        author: "Dolor Sit",
        role: "Restorative Patient",
        title: "Biological Integrity",
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
        rating: 5,
        img: clientAvatars.client2
    },
    {
        author: "Amet Consectetur",
        role: "Orthodontic Client",
        title: "Seamless Innovation",
        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.",
        rating: 5,
        img: clientAvatars.client3
    }
];

export function Testimonials() {
    const [active, setActive] = useState(0);

    return (
        <section id="testimonials" className="py-32 relative overflow-hidden gradient-services">
            {/* Subtle Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <GradientOrbs />
            </div>
            <div className="absolute inset-0 opacity-30">
                <Sparkles count={10} />
            </div>
            <div className="absolute inset-0 bg-white/60 -z-10" />
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    <div>
                        <span className="section-tag">Patient Archive</span>
                        <h2 className="text-5xl md:text-7xl mb-10 leading-tight">
                            Reflections on <br />
                            <span className="italic font-normal text-accent-navy text-6xl md:text-8xl">Excellence.</span>
                        </h2>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setActive((active - 1 + journals.length) % journals.length)}
                                className="w-14 h-14 rounded-full border border-border-thin flex items-center justify-center hover:bg-accent-navy hover:text-white transition-all duration-500"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setActive((active + 1) % journals.length)}
                                className="w-14 h-14 rounded-full border border-border-thin flex items-center justify-center hover:bg-accent-navy hover:text-white transition-all duration-500"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                className="clinical-card p-12 md:p-16 relative bg-white/95 backdrop-blur-sm inner-glow border-2 border-white/50 shadow-2xl"
                            >
                                <p className="text-accent-gold font-bold tracking-[0.2em] uppercase text-xs mb-6">
                                    Journal Entry #{journals[active].author.split(' ')[0]}
                                </p>
                                <h4 className="text-3xl font-serif mb-8 italic">"{journals[active].title}"</h4>
                                <p className="text-xl text-text-muted leading-relaxed mb-12 font-light">
                                    {journals[active].content}
                                </p>

                                <div className="flex items-center gap-5 pt-10 border-t border-border-thin">
                                    <img 
                                        src={journals[active].img} 
                                        alt={journals[active].author} 
                                        className="w-16 h-16 rounded-full grayscale object-cover" 
                                        loading="lazy"
                                        onError={(e) => {
                                            const initials = journals[active].author.split(' ').map(n => n[0]).join('');
                                            e.target.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
                                                <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="150" height="150" fill="#${active === 0 ? '6366F1' : active === 1 ? '8B5CF6' : 'EC4899'}"/>
                                                    <text x="50%" y="50%" font-family="Arial" font-size="40" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">${initials}</text>
                                                </svg>
                                            `)}`;
                                        }}
                                    />
                                    <div>
                                        <p className="font-bold text-accent-navy">{journals[active].author}</p>
                                        <p className="text-xs text-text-light font-bold tracking-widest uppercase">{journals[active].role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
