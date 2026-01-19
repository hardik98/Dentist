import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import beforeImg from '../../assets/perfect_smile.png';
import afterImg from '../../assets/perfect_smile.png'; // Re-using for demo, normally would be different

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
        <section className="py-32 bg-bg-primary relative">
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
                    {/* Before Image */}
                    <div className="absolute inset-0">
                        <img src={beforeImg} alt="Before" className="w-full h-full object-cover grayscale brightness-75" />
                        <div className="absolute top-8 left-8 bg-white/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/30">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent-navy">Pre-Clinical</span>
                        </div>
                    </div>

                    {/* After Image */}
                    <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <img src={afterImg} alt="After" className="w-full h-full object-cover" />
                        <div className="absolute top-8 left-8 bg-accent-navy/80 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">Post-Clinical</span>
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

                    <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-xl px-8 py-5 rounded-3xl border border-white max-w-[240px] hidden md:block">
                        <p className="text-[10px] font-bold tracking-widest text-text-light mb-2 uppercase">Diagnostic Note</p>
                        <p className="font-serif text-sm italic leading-relaxed text-accent-navy">"Restoration of vertical dimension with full-arch porcelain refinement."</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
