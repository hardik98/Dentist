import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full relative overflow-hidden text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: theme === 'dark' ? 0 : 1,
                    rotate: theme === 'dark' ? 90 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Sun className="w-5 h-5 text-orange-400" />
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    scale: theme === 'dark' ? 1 : 0,
                    rotate: theme === 'dark' ? 0 : -90,
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
            >
                <Moon className="w-5 h-5 text-primary" />
            </motion.div>
        </button>
    );
}
