import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';
import { GradientOrbs } from '../ui/GradientOrbs';
import { Sparkles } from '../ui/Sparkles';

const hours = [
    { day: 'Monday', time: '8:00 AM - 6:00 PM', available: true },
    { day: 'Tuesday', time: '8:00 AM - 6:00 PM', available: true },
    { day: 'Wednesday', time: '8:00 AM - 6:00 PM', available: true },
    { day: 'Thursday', time: '8:00 AM - 6:00 PM', available: true },
    { day: 'Friday', time: '8:00 AM - 5:00 PM', available: true },
    { day: 'Saturday', time: '9:00 AM - 3:00 PM', available: true },
    { day: 'Sunday', time: 'Closed', available: false },
];

export function OfficeHours() {
    const currentDay = new Date().getDay();
    const isOpen = currentDay !== 0 && currentDay !== 6; // Not Sunday
    
    return (
        <section id="office-hours" className="py-32 gradient-hours relative overflow-hidden">
            {/* Subtle Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <GradientOrbs />
            </div>
            <div className="absolute inset-0 opacity-30">
                <Sparkles count={10} />
            </div>
            <div className="absolute inset-0 bg-white/60 -z-10" />
            
            <div className="container mx-auto px-4 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="section-tag">Visit Us</span>
                        <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
                            Office Hours & <br />
                            <span className="italic font-normal text-accent-navy">Location</span>
                        </h2>
                        <p className="text-xl text-text-muted max-w-2xl mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                        </p>
                    </motion.div>
                    
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Office Hours Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="clinical-card bg-white/95 backdrop-blur-sm p-10 border-2 border-white/50 shadow-xl"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-xl bg-bg-accent flex items-center justify-center">
                                    <Clock className="w-7 h-7 text-accent-navy" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif mb-1">Office Hours</h3>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
                                        <span className="text-sm font-semibold text-text-muted">
                                            {isOpen ? 'Open Now' : 'Closed'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                {hours.map((schedule, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                                            currentDay === (i + 1) % 7
                                                ? 'bg-accent-navy text-white'
                                                : schedule.available
                                                ? 'bg-bg-accent hover:bg-bg-accent/80'
                                                : 'bg-gray-50 text-text-light'
                                        }`}
                                    >
                                        <span className={`font-medium ${currentDay === (i + 1) % 7 ? 'text-white' : ''}`}>
                                            {schedule.day}
                                        </span>
                                        <span className={`font-semibold ${currentDay === (i + 1) % 7 ? 'text-white' : 'text-accent-navy'}`}>
                                            {schedule.time}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                            
                            <div className="mt-8 pt-8 border-t border-border-thin">
                                <p className="text-sm text-text-muted mb-4">
                                    <strong className="text-text-main">Note:</strong> Emergency appointments available 24/7. 
                                    Please call our emergency line for urgent care outside regular hours.
                                </p>
                            </div>
                        </motion.div>
                        
                        {/* Location Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="clinical-card bg-white/95 backdrop-blur-sm p-10 border-2 border-white/50 shadow-xl"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-xl bg-bg-accent flex items-center justify-center">
                                    <MapPin className="w-7 h-7 text-accent-navy" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif mb-1">Our Location</h3>
                                    <p className="text-sm text-text-muted">Easy to find, easy to reach</p>
                                </div>
                            </div>
                            
                            <div className="space-y-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 text-accent-navy mt-1 shrink-0" />
                                    <div>
                                        <p className="font-semibold text-text-main mb-1">Address</p>
                                        <p className="text-text-muted leading-relaxed">
                                            123 Main Street, Suite 100<br />
                                            City, State 12345<br />
                                            United States
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <Phone className="w-5 h-5 text-accent-navy mt-1 shrink-0" />
                                    <div>
                                        <p className="font-semibold text-text-main mb-1">Phone</p>
                                        <a href="tel:+15551234567" className="text-accent-navy hover:text-accent-blue transition-colors">
                                            +1 (555) 123-4567
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <Calendar className="w-5 h-5 text-accent-navy mt-1 shrink-0" />
                                    <div>
                                        <p className="font-semibold text-text-main mb-1">Parking</p>
                                        <p className="text-text-muted">
                                            Valet parking available. Street parking and nearby garages also accessible.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-bg-accent rounded-xl p-6 border border-border-thin">
                                <h4 className="font-semibold text-text-main mb-3">Public Transportation</h4>
                                <ul className="space-y-2 text-sm text-text-muted">
                                    <li>• Subway: N, Q, R trains to 5th Avenue Station</li>
                                    <li>• Bus: M1, M2, M3, M4 to 5th Avenue</li>
                                    <li>• Walking distance from Central Park</li>
                                </ul>
                            </div>
                            
                            <button className="btn-premium w-full mt-8">
                                Get Directions
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

