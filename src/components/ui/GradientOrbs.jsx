import React from 'react';
import { motion } from 'framer-motion';

export function GradientOrbs() {
    const orbs = [
        { color: 'from-blue-200/20 via-indigo-200/20 to-purple-200/20', size: 400, x: '10%', y: '20%', duration: 25 },
        { color: 'from-cyan-200/20 via-blue-200/20 to-teal-200/20', size: 300, x: '80%', y: '60%', duration: 30 },
        { color: 'from-pink-200/20 via-rose-200/20 to-orange-200/20', size: 350, x: '50%', y: '80%', duration: 22 },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {orbs.map((orb, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full bg-gradient-to-r ${orb.color} blur-3xl`}
                    style={{
                        width: `${orb.size}px`,
                        height: `${orb.size}px`,
                        left: orb.x,
                        top: orb.y,
                        transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: orb.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

