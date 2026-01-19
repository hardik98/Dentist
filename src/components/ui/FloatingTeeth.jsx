import React from 'react';
import { motion } from 'framer-motion';

export function FloatingTeeth() {
    const teeth = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 4,
        size: 20 + Math.random() * 30,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {teeth.map((tooth) => (
                <motion.div
                    key={tooth.id}
                    className="absolute opacity-10"
                    style={{
                        left: `${tooth.x}%`,
                        top: `${tooth.y}%`,
                        width: `${tooth.size}px`,
                        height: `${tooth.size}px`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.sin(tooth.id) * 20, 0],
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: tooth.duration,
                        repeat: Infinity,
                        delay: tooth.delay,
                        ease: "easeInOut",
                    }}
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                            d="M50 10 Q60 20 65 30 Q70 40 68 50 Q66 60 60 70 Q50 80 50 85 Q50 80 40 70 Q34 60 32 50 Q30 40 35 30 Q40 20 50 10 Z"
                            fill="currentColor"
                            className="text-blue-300/30"
                        />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
}

