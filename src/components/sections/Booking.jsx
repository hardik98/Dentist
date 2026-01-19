import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';

export function Booking() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <section id="booking" className="py-32 bg-bg-primary overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-bg-accent)_0%,transparent_50%)] opacity-30 pointer-events-none" />
            <div className="container mx-auto px-4 md:px-12">
                <div className="max-w-6xl mx-auto clinical-card bg-white p-8 md:p-20 overflow-hidden relative">

                    {/* Background Texture */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8fafc] -z-10 translate-x-20 rotate-12" />

                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        <div>
                            <span className="section-tag">Concierge Request</span>
                            <h2 className="text-5xl md:text-7xl mb-10 leading-tight">
                                Apply for a <br />
                                <span className="italic font-normal text-accent-navy">Consultation</span>.
                            </h2>
                            <p className="text-xl text-text-muted mb-12">
                                We accept a limited number of new private clients each month to ensure the highest standard of personalized care.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4 items-center">
                                    <div className="w-10 h-10 rounded-full border border-border-thin flex items-center justify-center text-accent-gold">
                                        <Calendar className="w-4 h-4" />
                                    </div>
                                    <p className="text-sm font-bold tracking-widest text-text-light uppercase">Priority Scheduling Available</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className="w-10 h-10 rounded-full border border-border-thin flex items-center justify-center text-accent-gold">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                    <p className="text-sm font-bold tracking-widest text-text-light uppercase">24/7 Clinical Support</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            {!submitted ? (
                                <form
                                    className="space-y-8"
                                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                                >
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold tracking-widest uppercase text-text-light">Full Name</label>
                                            <input type="text" className="w-full bg-transparent border-b border-border-thin py-3 focus:outline-none focus:border-accent-navy transition-colors font-serif text-xl italic" placeholder="Aris Thorne" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold tracking-widest uppercase text-text-light">Electronic Mail</label>
                                            <input type="email" className="w-full bg-transparent border-b border-border-thin py-3 focus:outline-none focus:border-accent-navy transition-colors font-serif text-xl italic" placeholder="aris@luxury.com" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold tracking-widest uppercase text-text-light">Clinical Interest</label>
                                        <select className="w-full bg-transparent border-b border-border-thin py-3 focus:outline-none focus:border-accent-navy transition-colors font-serif text-xl italic cursor-pointer appearance-none">
                                            <option>Bespoke Aesthetic Remodeling</option>
                                            <option>Biological Restoration</option>
                                            <option>Precision Orthodontics</option>
                                            <option>Proactive Maintenance</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold tracking-widest uppercase text-text-light">Additional Context</label>
                                        <textarea className="w-full bg-transparent border-b border-border-thin py-3 focus:outline-none focus:border-accent-navy transition-colors font-serif text-xl italic h-24 resize-none" placeholder="Briefly describe your goals..."></textarea>
                                    </div>

                                    <button type="submit" className="btn-premium w-full flex items-center justify-center gap-3">
                                        Submit Clinical Application
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-20"
                                >
                                    <div className="w-20 h-20 rounded-full bg-accent-navy text-white flex items-center justify-center mx-auto mb-8">
                                        <ChevronRight className="w-10 h-10 rotate-[-90deg]" />
                                    </div>
                                    <h4 className="text-3xl font-serif mb-4 italic">Request Received.</h4>
                                    <p className="text-text-muted">Our concierge department will review your application and contact you within 48 clinical hours.</p>
                                </motion.div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
