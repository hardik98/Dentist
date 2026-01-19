import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Zap, Activity } from 'lucide-react';

const services = [
    {
        title: "Micro-Aesthetic Reconstruction",
        desc: "Utilizing 8K intraoral scanning and precise robotic milling to craft anatomical restorations that are indistinguishable from natural porcelain.",
        icon: Sparkles
    },
    {
        title: "Biological Restoration",
        desc: "Holistic protocols focusing on biocompatible materials and minimally invasive techniques to preserve the integrity of your clinical health.",
        icon: Shield
    },
    {
        title: "Neural Pain Protocols",
        desc: "State-of-the-art sedation and pain management utilizing neurological feedback to ensure a 100% anxiety-free experience.",
        icon: Zap
    },
    {
        title: "Precision Prophylaxis",
        desc: "Advanced diagnostic maintenance using laser fluorescence to detect and treat structural issues before they become clinical symptoms.",
        icon: Activity
    }
];

export function Services() {
    return (
        <section id="services" className="py-32 bg-bg-accent relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white opacity-40 -z-10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-blue/20 -z-10 blur-3xl rounded-full" />

            <div className="container mx-auto px-4 md:px-12">

                <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
                    <div className="max-w-2xl">
                        <span className="section-tag">Clinical Procedures</span>
                        <h2 className="text-5xl md:text-7xl leading-tight">
                            The Science of <br />
                            <span className="italic font-normal text-accent-navy">Elite Performance</span>.
                        </h2>
                    </div>
                    <div>
                        <p className="text-xl text-text-muted mb-4 max-w-sm">
                            We redefine the boundaries of what is possible in modern oral healthcare through technology.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="clinical-card p-10 group bg-white inner-glow"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-bg-accent flex items-center justify-center mb-8 border border-white group-hover:bg-accent-navy group-hover:text-white transition-all duration-500 shadow-sm">
                                <s.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-serif mb-4 italic group-hover:text-accent-navy transition-colors">{s.title}</h3>
                            <p className="text-sm text-text-muted leading-relaxed group-hover:text-text-main transition-colors">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
