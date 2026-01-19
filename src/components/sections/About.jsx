import React from 'react';
import { motion } from 'framer-motion';
import officeImg from '../../assets/diagnostic_scanner.png';

export function About() {
    return (
        <section id="about" className="py-32 bg-bg-teal overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-bg-accent)_0%,transparent_50%)] opacity-30 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="rounded-[4rem] overflow-hidden clinical-shadow border border-white/50 bg-white">
                            <img
                                src={officeImg}
                                alt="Advanced Diagnostic Scanner"
                                className="w-full h-[700px] object-contain p-12 hover:scale-105 transition-transform duration-[2s]"
                            />
                        </div>

                        {/* Floating Detail */}
                        <div className="absolute top-12 -right-12 p-8 clinical-card inner-glow max-w-[280px] hidden xl:block backdrop-blur-xl bg-white/70 border-white/80">
                            <p className="section-tag mb-4">The Standard</p>
                            <p className="font-serif text-xl italic mb-4 text-accent-navy">"A sanctuary of health, designed for the most discerning patients."</p>
                            <p className="text-xs text-text-light font-bold tracking-widest uppercase">— Dr. Aris Thorne</p>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="section-tag">Clinical Heritage</span>
                        <h2 className="text-5xl md:text-7xl mb-10 leading-tight">
                            Where Science meets <br />
                            <span className="italic font-normal text-accent-navy tracking-tight">Pure Serenity.</span>
                        </h2>

                        <div className="space-y-8 text-lg text-text-muted leading-relaxed">
                            <p>
                                Founded on the principles of biological integrity and architectural precision, our clinic represents the future of luxury oral healthcare.
                            </p>
                            <p>
                                We believe that the clinical environment should be a sanctuary. Every material, every scent, and every interaction is curated to eliminate anxiety and deliver an experience of profound tranquility.
                            </p>
                        </div>

                        <div className="mt-16 grid grid-cols-2 gap-10">
                            <div>
                                <h4 className="text-3xl font-serif mb-2 italic text-accent-navy">25+</h4>
                                <p className="text-xs font-bold tracking-[0.2em] text-text-light uppercase">Global Awards</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-serif mb-2 italic text-accent-navy">100%</h4>
                                <p className="text-xs font-bold tracking-[0.2em] text-text-light uppercase">Bespoke Protocol</p>
                            </div>
                        </div>

                        <button className="btn-premium mt-16">
                            Discover Our Philosophy
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
