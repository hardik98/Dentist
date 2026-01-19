import React from 'react';
import { motion } from 'framer-motion';

export function Sparkles({ count = 20 }) {
    const sparkles = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 1.5 + Math.random() * 1.5,
        size: 4 + Math.random() * 6,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {sparkles.map((sparkle) => (
                <motion.div
                    key={sparkle.id}
                    className="absolute rounded-full bg-gradient-to-r from-blue-200/40 via-purple-200/40 to-pink-200/40"
                    style={{
                        left: `${sparkle.x}%`,
                        top: `${sparkle.y}%`,
                        width: `${sparkle.size}px`,
                        height: `${sparkle.size}px`,
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                    }}
                    transition={{
                        duration: sparkle.duration,
                        repeat: Infinity,
                        delay: sparkle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

