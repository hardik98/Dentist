import React from 'react';
import { motion } from 'framer-motion';

const masters = [
    {
        name: "Dr. Aris Thorne",
        role: "Principal clinical Director",
        specialty: "Aesthetic Macro-Restoration",
        img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Dr. Elara Vance",
        role: "Senior Orthodontist",
        specialty: "AI-Driven Structural Alignment",
        img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Dr. Marcus Reed",
        role: "Lead biological Surgeon",
        specialty: "High-Precision implantology",
        img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

export function Team() {
    return (
        <section id="team" className="py-32 bg-bg-accent">
            <div className="container mx-auto px-4 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="section-tag">The Masters</span>
                    <h2 className="text-5xl md:text-7xl mb-6">
                        Elite Clinical <br />
                        <span className="italic font-normal text-accent-navy">Staff</span>.
                    </h2>
                    <p className="text-xl text-text-muted">
                        Our practitioners are recognized globally for their contributions to aesthetic medicine and restorative science.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {masters.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] mb-8 clinical-shadow grayscale hover:grayscale-0 transition-all duration-[1s] ease-in-out">
                                <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                            </div>
                            <div className="px-2">
                                <p className="text-[10px] font-bold tracking-[0.3em] text-accent-gold uppercase mb-3">{m.role}</p>
                                <h3 className="text-3xl font-serif mb-2 italic">{m.name}</h3>
                                <p className="text-sm text-text-light font-medium tracking-wide">{m.specialty}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
