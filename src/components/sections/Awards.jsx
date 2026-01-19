import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Shield, Medal, Badge } from 'lucide-react';
import { GradientOrbs } from '../ui/GradientOrbs';
import { Sparkles } from '../ui/Sparkles';

const awards = [
    {
        id: 1,
        title: "Excellence in Dental Care",
        organization: "American Dental Association",
        year: "2024",
        icon: Trophy,
        color: "from-yellow-400 to-orange-500",
        description: "Recognized for outstanding patient care and clinical excellence"
    },
    {
        id: 2,
        title: "Top Cosmetic Dentist",
        organization: "Dental Excellence Awards",
        year: "2023",
        icon: Star,
        color: "from-blue-400 to-purple-500",
        description: "Awarded for exceptional cosmetic dentistry results"
    },
    {
        id: 3,
        title: "Patient Safety Excellence",
        organization: "Healthcare Quality Institute",
        year: "2024",
        icon: Shield,
        color: "from-green-400 to-teal-500",
        description: "Zero infection rate and highest safety standards"
    },
    {
        id: 4,
        title: "Innovation in Technology",
        organization: "Dental Technology Association",
        year: "2023",
        icon: Award,
        color: "from-pink-400 to-rose-500",
        description: "Leading adoption of advanced dental technologies"
    },
    {
        id: 5,
        title: "Best Orthodontic Practice",
        organization: "Orthodontic Excellence Council",
        year: "2024",
        icon: Medal,
        color: "from-indigo-400 to-blue-500",
        description: "Outstanding results in orthodontic treatment"
    },
    {
        id: 6,
        title: "Community Service Award",
        organization: "Local Health Foundation",
        year: "2023",
        icon: Badge,
        color: "from-cyan-400 to-blue-500",
        description: "Dedicated service to community dental health"
    }
];

export function Awards() {
    return (
        <section id="awards" className="py-32 relative overflow-hidden gradient-services">
            {/* Subtle Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <GradientOrbs />
            </div>
            <div className="absolute inset-0 opacity-30">
                <Sparkles count={15} />
            </div>
            <div className="absolute inset-0 bg-white/60 -z-10" />
            
            <div className="container mx-auto px-4 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="section-tag">Recognition & Excellence</span>
                    <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
                        Awards & <br />
                        <span className="italic font-normal text-accent-navy">Achievements</span>
                    </h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        Our commitment to excellence has been recognized by leading dental organizations and healthcare institutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {awards.map((award, index) => {
                        const IconComponent = award.icon;
                        return (
                            <motion.div
                                key={award.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="clinical-card bg-white/95 backdrop-blur-sm p-8 h-full flex flex-col border-2 border-white/50 hover:border-purple-300/50 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                    {/* Award Badge */}
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${award.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <IconComponent className="w-10 h-10 text-white" />
                                    </div>

                                    {/* Award Content */}
                                    <div className="text-center flex-grow">
                                        <h3 className="text-xl font-serif mb-2 text-accent-navy group-hover:text-purple-600 transition-colors">
                                            {award.title}
                                        </h3>
                                        <p className="text-sm font-semibold text-text-muted mb-3">
                                            {award.organization}
                                        </p>
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-4">
                                            <span className="text-xs font-bold text-accent-navy">{award.year}</span>
                                        </div>
                                        <p className="text-sm text-text-muted leading-relaxed">
                                            {award.description}
                                        </p>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="mt-6 pt-6 border-t border-border-thin flex items-center justify-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" />
                                        <span className="text-[10px] font-bold tracking-widest text-text-light uppercase">Certified</span>
                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 max-w-4xl mx-auto"
                >
                    <div className="clinical-card bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm p-10 border-2 border-white/50">
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-accent-navy mb-2">25+</div>
                                <p className="text-sm font-semibold text-text-muted uppercase tracking-wider">Awards Won</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-accent-navy mb-2">15+</div>
                                <p className="text-sm font-semibold text-text-muted uppercase tracking-wider">Years Excellence</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-accent-navy mb-2">100%</div>
                                <p className="text-sm font-semibold text-text-muted uppercase tracking-wider">Patient Satisfaction</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-accent-navy mb-2">50K+</div>
                                <p className="text-sm font-semibold text-text-muted uppercase tracking-wider">Happy Patients</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

