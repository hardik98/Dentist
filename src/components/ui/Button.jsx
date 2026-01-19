import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className,
    icon: Icon,
    ...props
}) {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-gradient-to-r from-primary to-primary-hover text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 focus:ring-primary',
        secondary: 'bg-gradient-to-r from-secondary to-secondary-hover text-white shadow-lg shadow-secondary/30 hover:shadow-secondary/50 focus:ring-secondary',
        outline: 'border-2 border-primary text-primary hover:bg-primary/10 focus:ring-primary',
        ghost: 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800',
        white: 'bg-white text-navy-900 shadow-lg hover:bg-slate-50 focus:ring-white',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
            {...props}
        >
            {Icon && <Icon className="w-5 h-5 mr-2" />}
            {children}
        </motion.button>
    );
}
