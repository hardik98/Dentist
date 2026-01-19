import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, AlertCircle, Heart } from 'lucide-react';
import { GradientOrbs } from '../ui/GradientOrbs';
import { Sparkles } from '../ui/Sparkles';

export function EmergencyCare() {
    return (
        <section className="py-20 gradient-emergency relative overflow-hidden">
            {/* Subtle Animated Background Elements */}
            <div className="absolute inset-0 opacity-25">
                <GradientOrbs />
            </div>
            <div className="absolute inset-0 opacity-30">
                <Sparkles count={12} />
            </div>
            <div className="absolute inset-0 bg-white/70 -z-10" />
            
            <div className="container mx-auto px-4 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="clinical-card bg-white/95 backdrop-blur-sm p-8 md:p-12 relative overflow-hidden border-2 border-white/50 shadow-2xl">
                        {/* Urgency Indicator */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-bl-full -z-10" />
                        
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                                        <AlertCircle className="w-6 h-6 text-red-600" />
                                    </div>
                                    <span className="section-tag text-red-600">Emergency Dental Care</span>
                                </div>
                                
                                <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                                    24/7 Emergency <br />
                                    <span className="italic font-normal text-accent-navy">Dental Services</span>
                                </h2>
                                
                                <p className="text-lg text-text-muted mb-8 leading-relaxed">
                                    Dental emergencies don't wait. We're here when you need us most, providing immediate care for severe pain, trauma, and urgent dental issues.
                                </p>
                                
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-4">
                                        <Clock className="w-5 h-5 text-accent-navy mt-1 shrink-0" />
                                        <div>
                                            <p className="font-semibold text-text-main mb-1">Immediate Response</p>
                                            <p className="text-sm text-text-muted">Same-day emergency appointments available</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Heart className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                                        <div>
                                            <p className="font-semibold text-text-main mb-1">Compassionate Care</p>
                                            <p className="text-sm text-text-muted">Expert pain management and trauma care</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <a 
                                    href="tel:+15551234567" 
                                    className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    <Phone className="w-5 h-5" />
                                    Call Emergency Line: (555) 123-4567
                                </a>
                            </div>
                            
                            <div className="bg-gradient-to-br from-red-50 to-blue-50 rounded-2xl p-8 border border-red-100">
                                <h3 className="text-2xl font-serif mb-6 text-accent-navy">Common Emergencies We Treat</h3>
                                <ul className="space-y-4">
                                    {[
                                        'Severe toothache or pain',
                                        'Knocked-out or loose teeth',
                                        'Broken or chipped teeth',
                                        'Lost fillings or crowns',
                                        'Dental abscess or infection',
                                        'Bleeding or trauma',
                                        'Jaw pain or injury'
                                    ].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-center gap-3 text-text-muted"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

