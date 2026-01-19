import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const journals = [
    {
        author: "Eleanor Vance",
        role: "Private Client",
        title: "The Aesthetic Journey",
        content: "The attention to detail at Thorne Clinical is unparalleled. They didn't just fix my teeth; they restored my confidence with a surgical precision that felt more like art than medicine.",
        rating: 5,
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
        author: "Julian Thorne (No Relation)",
        role: "Restorative Patient",
        title: "Biological Integrity",
        content: "A transformative experience. The biological approach to dentistry here gave me peace of mind that my long-term systemic health was being prioritized alongside my smile.",
        rating: 5,
        img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
        author: "Clara S.",
        role: "Orthodontic Client",
        title: "Seamless Innovation",
        content: "The digital workflow is so smooth. From the 3D scans to the final result, I felt I was in the hands of true visionaries. The clinic itself is a haven of tranquility.",
        rating: 5,
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
];

export function Testimonials() {
    const [active, setActive] = useState(0);

    return (
        <section id="testimonials" className="py-32 bg-bg-teal">
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
                                className="clinical-card p-12 md:p-16 relative bg-white inner-glow"
                            >
                                <p className="text-accent-gold font-bold tracking-[0.2em] uppercase text-xs mb-6">
                                    Journal Entry #{journals[active].author.split(' ')[0]}
                                </p>
                                <h4 className="text-3xl font-serif mb-8 italic">"{journals[active].title}"</h4>
                                <p className="text-xl text-text-muted leading-relaxed mb-12 font-light">
                                    {journals[active].content}
                                </p>

                                <div className="flex items-center gap-5 pt-10 border-t border-border-thin">
                                    <img src={journals[active].img} alt={journals[active].author} className="w-16 h-16 rounded-full grayscale object-cover" />
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
