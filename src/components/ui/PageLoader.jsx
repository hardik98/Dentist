import React from 'react';
import { motion } from 'framer-motion';

export function PageLoader() {
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 z-50 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
            >
                <div className="relative">
                    {/* Main spinner */}
                    <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-6"></div>
                    
                    {/* Pulsing circles */}
                    <motion.div
                        className="absolute inset-0 w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-accent-navy font-semibold mt-4"
                    >
                        Loading...
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
}

