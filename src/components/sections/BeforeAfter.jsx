import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import beforeImg from '../../assets/perfect_smile.png';
import afterImg from '../../assets/perfect_smile.png'; // Re-using for demo, normally would be different
import { GradientOrbs } from '../ui/GradientOrbs';
import { Sparkles } from '../ui/Sparkles';

export function BeforeAfter() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const handleMove = useCallback((clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    }, []);

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e) => isDragging && handleMove(e.clientX);
    const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

    return (
        <section id="before-after" className="py-32 relative gradient-hero">
            {/* Subtle Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <GradientOrbs />
            </div>
            <div className="absolute inset-0 opacity-30">
                <Sparkles count={12} />
            </div>
            <div className="absolute inset-0 bg-white/50 -z-10" />
            <div className="container mx-auto px-4 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="section-tag">Case Study</span>
                    <h2 className="text-5xl md:text-7xl mb-6">
                        Clinical <span className="italic font-normal">Symmetry</span>.
                    </h2>
                    <p className="text-xl text-text-muted">
                        Witness the intersection of biological integrity and aesthetic precision. Our results are not just transformations; they are digital restorations.
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-[3rem] overflow-hidden clinical-shadow border border-white/50 cursor-ew-resize select-none"
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleMouseUp}
                >
                    {/* Before Image - Stained, Dark, Less Vibrant */}
                    <div className="absolute inset-0">
                        <div className="relative w-full h-full">
                            <img 
                                src={beforeImg} 
                                alt="Before Treatment" 
                                className="w-full h-full object-cover grayscale brightness-[0.6] contrast-75 saturate-50" 
                                style={{
                                    filter: 'grayscale(80%) brightness(0.6) contrast(0.75) saturate(50%) sepia(20%)',
                                }}
                                loading="lazy"
                                onError={(e) => {
                                    console.error('Failed to load before image');
                                    e.target.style.display = 'none';
                                }}
                            />
                            {/* Overlay to simulate stains/discoloration */}
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-transparent to-brown-900/15 mix-blend-multiply" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent" />
                        </div>
                        <div className="absolute top-8 left-8 bg-red-500/80 backdrop-blur-md px-6 py-2 rounded-full border border-red-300/50 shadow-lg">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">Pre-Clinical</span>
                        </div>
                        {/* Before indicators */}
                        <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg border border-red-200 hidden md:block">
                            <p className="text-[9px] font-bold text-red-600 uppercase tracking-wider mb-1">Before Issues</p>
                            <ul className="text-[8px] text-gray-600 space-y-0.5">
                                <li>• Stained teeth</li>
                                <li>• Misalignment</li>
                                <li>• Discoloration</li>
                            </ul>
                        </div>
                    </div>

                    {/* After Image - Bright, Perfect, Vibrant */}
                    <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <div className="relative w-full h-full">
                            <img 
                                src={afterImg} 
                                alt="After Treatment" 
                                className="w-full h-full object-cover brightness-110 contrast-110 saturate-110" 
                                style={{
                                    filter: 'brightness(1.1) contrast(1.1) saturate(1.1)',
                                }}
                                loading="lazy"
                                onError={(e) => {
                                    console.error('Failed to load after image');
                                    e.target.style.display = 'none';
                                }}
                            />
                            {/* Subtle glow effect for perfect smile */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-100/10" />
                        </div>
                        <div className="absolute top-8 left-8 bg-green-500/80 backdrop-blur-md px-6 py-2 rounded-full border border-green-300/50 shadow-lg">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">Post-Clinical</span>
                        </div>
                        {/* After indicators */}
                        <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg border border-green-200 hidden md:block">
                            <p className="text-[9px] font-bold text-green-600 uppercase tracking-wider mb-1">After Results</p>
                            <ul className="text-[8px] text-gray-600 space-y-0.5">
                                <li>✓ Perfect alignment</li>
                                <li>✓ Bright white smile</li>
                                <li>✓ Restored confidence</li>
                            </ul>
                        </div>
                    </div>

                    {/* Slider Handler */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white/50 backdrop-blur-sm z-20 group"
                        style={{ left: `${sliderPosition}%` }}
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleMouseDown}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl border border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <div className="flex gap-1">
                                <div className="w-1 h-4 bg-accent-navy rounded-full opacity-30" />
                                <div className="w-1 h-4 bg-accent-navy rounded-full" />
                                <div className="w-1 h-4 bg-accent-navy rounded-full opacity-30" />
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-8 right-8 bg-gradient-to-br from-blue-500/90 to-purple-500/90 backdrop-blur-xl px-8 py-5 rounded-3xl border border-white/30 max-w-[280px] hidden md:block text-white shadow-xl">
                        <p className="text-[10px] font-bold tracking-widest text-white/90 mb-2 uppercase">Transformation Results</p>
                        <p className="font-serif text-sm italic leading-relaxed text-white mb-3">"Complete smile restoration with advanced cosmetic dentistry techniques."</p>
                        <div className="flex items-center gap-2 text-xs">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-white/90">100% Patient Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
