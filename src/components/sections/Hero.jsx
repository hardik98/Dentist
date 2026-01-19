import React from 'react';
import { motion } from 'framer-motion';
import toothImg from '../../assets/premium_tooth.png';
import { FloatingTeeth } from '../ui/FloatingTeeth';
import { Sparkles } from '../ui/Sparkles';
import { GradientOrbs } from '../ui/GradientOrbs';

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen py-32 overflow-hidden flex items-center gradient-hero">
            {/* Subtle Animated Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <GradientOrbs />
            </div>
            <div className="absolute inset-0 opacity-20">
                <FloatingTeeth />
            </div>
            <div className="absolute inset-0 opacity-40">
                <Sparkles count={15} />
            </div>
            
            {/* Clean white overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/50 to-white/60 -z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent -z-10" />

            <div className="container mx-auto px-4 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative">

                {/* Left Side: Copy */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    <span className="section-tag animate-pulse">Your Trusted Dental Care Partner</span>

                    <h1 className="text-6xl md:text-8xl mb-8 leading-[1.05]">
                        Your Perfect <br />
                        <span className="italic font-normal text-accent-navy drop-shadow-sm">Smile</span> Starts <br />
                        Here <span className="text-gold">Today</span>.
                    </h1>

                    <p className="text-xl text-text-muted mb-12 max-w-lg leading-relaxed">
                        Experience exceptional dental care in a comfortable, modern environment. Our expert team combines advanced technology with compassionate care to help you achieve optimal oral health and a beautiful smile.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <a 
                            href="#booking" 
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn-premium inner-glow text-center"
                        >
                            Book Private Consultation
                        </a>
                        <a 
                            href="#before-after" 
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#before-after')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn-outline-luxury text-center"
                        >
                            View Our Gallery
                        </a>
                    </div>

                    {/* Subtle Trust Indicators */}
                    <div className="mt-16 pt-10 border-t border-border-thin flex items-center gap-10">
                        <div className="group cursor-default">
                            <p className="text-3xl font-bold text-accent-navy group-hover:text-gold transition-colors">99.8%</p>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-text-light font-bold">Accuracy rate</p>
                        </div>
                        <div className="group cursor-default">
                            <p className="text-3xl font-bold text-accent-navy group-hover:text-accent-blue transition-colors">Elite</p>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-text-light font-bold">Clinical status</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: HD Tooth Image with Scanner Effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative h-[650px] w-full flex items-center justify-center"
                >
                    {/* Main Container with Glass Morphism */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-blue-50/30 backdrop-blur-2xl rounded-[4rem] border-2 border-white/80 shadow-2xl overflow-hidden">
                        {/* Grid Overlay - Scanner Grid Effect */}
                        <div className="absolute inset-0 opacity-20" style={{
                            backgroundImage: `
                                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                            `,
                            backgroundSize: '40px 40px'
                        }} />
                        
                        {/* HD Tooth Image */}
                        <div className="relative w-full h-full flex items-center justify-center p-12">
                            <motion.img
                                src={toothImg}
                                alt="Premium Dental Care"
                                className="w-full h-full object-contain max-w-[500px] drop-shadow-2xl"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                onError={(e) => {
                                    console.error('Failed to load tooth image');
                                    e.target.style.display = 'none';
                                }}
                            />
                            
                            {/* Glow Effect Behind Image */}
                            <div className="absolute inset-0 bg-gradient-radial from-blue-400/20 via-purple-400/10 to-transparent blur-3xl" />
                        </div>

                        {/* Multiple Animated Scan Lines */}
                        <motion.div
                            initial={{ top: "-5%" }}
                            animate={{ top: "105%" }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0 }}
                            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_30px_rgba(59,130,246,0.8)] z-20"
                            style={{
                                boxShadow: '0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(59, 130, 246, 0.4)'
                            }}
                        />
                        <motion.div
                            initial={{ top: "-5%" }}
                            animate={{ top: "105%" }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 1 }}
                            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent z-20"
                        />
                        <motion.div
                            initial={{ top: "-5%" }}
                            animate={{ top: "105%" }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
                            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent z-20"
                        />

                        {/* Corner Scanner Indicators */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-blue-400 opacity-60" />
                        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-400 opacity-60" />
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-blue-400 opacity-60" />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-blue-400 opacity-60" />

                        {/* Scanning Status Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute top-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-blue-500/80 backdrop-blur-sm rounded-full border border-blue-300/50 z-30"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-xs font-bold text-white tracking-wider">SCANNING...</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Floating Detail Cards */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="absolute -bottom-6 -left-6 p-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border-2 border-blue-100 max-w-[220px] hidden md:block z-20"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <p className="text-[10px] font-bold tracking-widest text-text-light uppercase">HD Imaging</p>
                        </div>
                        <p className="font-serif text-lg leading-tight italic text-accent-navy">Precision <br /> Diagnostics</p>
                    </motion.div>

                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="absolute top-12 -right-6 p-6 bg-gradient-to-br from-blue-500/90 to-indigo-500/90 backdrop-blur-xl rounded-2xl shadow-xl border-2 border-blue-200/50 max-w-[180px] hidden lg:block z-20 text-white"
                    >
                        <p className="text-[10px] font-bold tracking-widest mb-2 uppercase opacity-90">Advanced Tech</p>
                        <p className="font-serif text-base leading-tight">State-of-the-Art <br /> Equipment</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
