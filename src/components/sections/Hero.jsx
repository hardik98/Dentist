import React from 'react';
import { motion } from 'framer-motion';
import toothImg from '../../assets/premium_tooth.png';

export function Hero() {
    return (
        <section className="relative min-h-screen py-32 overflow-hidden flex items-center bg-bg-primary">
            {/* Background Decor - Refined Clinical Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-bg-accent)_0%,transparent_70%)] opacity-40 -z-20" />
            <div className="absolute top-0 right-0 w-2/3 h-full bg-white opacity-60 -z-10 rounded-l-[20rem] backdrop-blur-3xl" />

            <div className="container mx-auto px-4 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative">

                {/* Left Side: Copy */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    <span className="section-tag animate-pulse">Pioneering Excellence in Care</span>

                    <h1 className="text-6xl md:text-8xl mb-8 leading-[1.05]">
                        Transforming <br />
                        <span className="italic font-normal text-accent-navy drop-shadow-sm">Smiles</span> with <br />
                        Precision <span className="text-gold">Artistry</span>.
                    </h1>

                    <p className="text-xl text-text-muted mb-12 max-w-lg leading-relaxed">
                        Experience the pinnacle of clinical dentistry. We combine master craftsmanship with state-of-the-art technology to craft your perfect aesthetic.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <button className="btn-premium inner-glow">
                            Book Private Consultation
                        </button>
                        <button className="btn-outline-luxury">
                            View Our Gallery
                        </button>
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

                {/* Right Side: Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative h-[650px] w-full flex items-center justify-center"
                >
                    {/* Digital Scan Layer - High Tech Overlay */}
                    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-[4rem]">
                        <motion.div
                            initial={{ top: "-10%" }}
                            animate={{ top: "110%" }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-1 bg-accent-blue/40 shadow-[0_0_15px_rgba(168,218,220,0.8)] backdrop-blur-sm"
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(168,218,220,0.05)_100%)]" />
                    </div>

                    {/* Static High-Res Visual Display */}
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-2xl rounded-[4rem] border border-white/50 clinical-shadow inner-glow overflow-hidden flex items-center justify-center">
                        <motion.img
                            src={toothImg}
                            alt="Thorne Precision Molar"
                            className="w-4/5 h-4/5 object-contain"
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 2, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>

                    {/* Float Detail */}
                    <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute -bottom-6 -left-6 p-8 clinical-card inner-glow max-w-[220px] hidden md:block backdrop-blur-xl border-white/80 z-20"
                    >
                        <p className="text-[10px] font-bold tracking-widest text-text-light mb-3 uppercase">Real-time Visualization</p>
                        <p className="font-serif text-xl leading-tight italic text-accent-navy">Digital Smile <br /> Architecture</p>
                    </motion.div>

                    {/* Decorative Orb */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-blue/20 blur-[80px] -z-10 rounded-full" />
                </motion.div>
            </div>
        </section>
    );
}
