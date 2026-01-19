import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Zap, Activity } from 'lucide-react';
import { GradientOrbs } from '../ui/GradientOrbs';
import { Sparkles as SparkleComponent } from '../ui/Sparkles';

const services = [
    {
        title: "Preventive Care",
        desc: "Regular cleanings, exams, and preventive treatments to keep your smile healthy. We use advanced diagnostic tools to catch issues early and prevent future problems.",
        icon: Shield
    },
    {
        title: "Cosmetic Dentistry",
        desc: "Transform your smile with teeth whitening, veneers, bonding, and Invisalign. Achieve the beautiful, confident smile you've always wanted with our expert cosmetic treatments.",
        icon: Sparkles
    },
    {
        title: "Restorative Dentistry",
        desc: "Comprehensive restoration services including fillings, crowns, bridges, and dental implants. We restore both function and aesthetics using the latest materials and techniques.",
        icon: Activity
    },
    {
        title: "Sedation Dentistry",
        desc: "Comfortable, anxiety-free dental care with multiple sedation options. Perfect for patients with dental anxiety or those needing extensive procedures. Your comfort is our priority.",
        icon: Zap
    },
    {
        title: "Orthodontics",
        desc: "Straighten your teeth with Invisalign clear aligners or traditional braces. We offer personalized orthodontic treatment plans for patients of all ages.",
        icon: Sparkles
    },
    {
        title: "Oral Surgery",
        desc: "Expert surgical procedures including wisdom teeth removal, dental implants, and oral pathology. Performed with precision and care in our state-of-the-art facility.",
        icon: Activity
    },
    {
        title: "Periodontal Care",
        desc: "Comprehensive gum disease treatment and prevention. We offer deep cleanings, scaling, root planing, and advanced periodontal therapies to maintain healthy gums.",
        icon: Shield
    },
    {
        title: "Emergency Care",
        desc: "24/7 emergency dental services for urgent situations. Same-day appointments available for severe pain, trauma, infections, and other dental emergencies.",
        icon: Zap
    }
];

export function Services() {
    return (
        <section id="services" className="py-32 gradient-services relative overflow-hidden">
            {/* Subtle Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <GradientOrbs />
            </div>
            <div className="absolute inset-0 opacity-30">
                <SparkleComponent count={10} />
            </div>
            <div className="absolute inset-0 bg-white/60 -z-10" />

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

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="clinical-card p-8 group bg-white/95 backdrop-blur-sm inner-glow h-full flex flex-col border-2 border-white/50 hover:border-purple-300/50 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-bg-accent flex items-center justify-center mb-8 border border-white group-hover:bg-accent-navy group-hover:text-white transition-all duration-500 shadow-sm">
                                <s.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-serif mb-4 italic group-hover:text-accent-navy transition-colors">{s.title}</h3>
                            <p className="text-sm text-text-muted leading-relaxed group-hover:text-text-main transition-colors flex-grow">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
