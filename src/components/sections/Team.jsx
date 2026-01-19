import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GradientOrbs } from '../ui/GradientOrbs';
import { Sparkles } from '../ui/Sparkles';
import { doctorPlaceholders, doctorFallbacks } from '../../utils/placeholders';

const masters = [
    {
        name: "Dr. Lorem Ipsum",
        role: "Principal Clinical Director",
        specialty: "Aesthetic Macro-Restoration",
        img: doctorPlaceholders.doctor1
    },
    {
        name: "Dr. Dolor Sit",
        role: "Senior Orthodontist",
        specialty: "AI-Driven Structural Alignment",
        img: doctorPlaceholders.doctor2
    },
    {
        name: "Dr. Amet Consectetur",
        role: "Lead Biological Surgeon",
        specialty: "High-Precision Implantology",
        img: doctorPlaceholders.doctor3
    }
];

export function Team() {
    return (
        <section id="team" className="py-32 relative overflow-hidden gradient-about">
            {/* Subtle Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <GradientOrbs />
            </div>
            <div className="absolute inset-0 opacity-30">
                <Sparkles count={12} />
            </div>
            <div className="absolute inset-0 bg-white/60 -z-10" />
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
                            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] mb-8 clinical-shadow grayscale hover:grayscale-0 transition-all duration-[1s] ease-in-out bg-gradient-to-br from-blue-100 to-purple-100">
                                <img 
                                    src={m.img} 
                                    alt={m.name} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" 
                                    loading="lazy"
                                    onError={(e) => {
                                        // Try fallback image first
                                        const fallbackKey = `doctor${i + 1}`;
                                        if (doctorFallbacks[fallbackKey] && e.target.src !== doctorFallbacks[fallbackKey]) {
                                            e.target.src = doctorFallbacks[fallbackKey];
                                        } else {
                                            // Final fallback - SVG placeholder
                                            e.target.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
                                                <svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg">
                                                    <defs>
                                                        <linearGradient id="grad${i}" x1="0%" y1="0%" x2="100%" y2="100%">
                                                            <stop offset="0%" style="stop-color:#${i === 0 ? '4F46E5' : i === 1 ? '7C3AED' : 'EC4899'};stop-opacity:1" />
                                                            <stop offset="100%" style="stop-color:#${i === 0 ? '6366F1' : i === 1 ? '8B5CF6' : 'F472B6'};stop-opacity:1" />
                                                        </linearGradient>
                                                    </defs>
                                                    <rect width="800" height="1000" fill="url(#grad${i})"/>
                                                    <circle cx="400" cy="350" r="120" fill="rgba(255,255,255,0.3)"/>
                                                    <circle cx="400" cy="450" r="80" fill="rgba(255,255,255,0.2)"/>
                                                    <text x="50%" y="750" font-family="Arial" font-size="36" font-weight="bold" fill="white" text-anchor="middle">${m.name.split(' ')[1]}</text>
                                                </svg>
                                            `)}`;
                                        }
                                    }}
                                />
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
