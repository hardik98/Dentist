import React from 'react';
import { motion } from 'framer-motion';

export function AnimatedTooth({ size = 40, className = '' }) {
    return (
        <motion.div
            className={className}
            animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            style={{ width: size, height: size }}
        >
            <svg viewBox="0 0 100 100" className="w-full h-full">
                <motion.path
                    d="M50 10 Q60 20 65 30 Q70 40 68 50 Q66 60 60 70 Q50 80 50 85 Q50 80 40 70 Q34 60 32 50 Q30 40 35 30 Q40 20 50 10 Z"
                    fill="currentColor"
                    animate={{
                        fill: [
                            'rgba(102, 126, 234, 0.8)',
                            'rgba(118, 75, 162, 0.8)',
                            'rgba(240, 147, 251, 0.8)',
                            'rgba(102, 126, 234, 0.8)',
                        ],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </svg>
        </motion.div>
    );
}

