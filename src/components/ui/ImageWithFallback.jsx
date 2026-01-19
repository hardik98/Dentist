import React, { useState } from 'react';

export function ImageWithFallback({ src, alt, className, fallback, ...props }) {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        if (!hasError && fallback) {
            setHasError(true);
            setImgSrc(fallback);
        } else if (!hasError) {
            // Default fallback - simple colored square
            setHasError(true);
            setImgSrc(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
                <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
                    <rect width="400" height="400" fill="#e5e7eb"/>
                    <text x="50%" y="50%" font-family="Arial" font-size="20" fill="#6b7280" text-anchor="middle" dominant-baseline="middle">Image</text>
                </svg>
            `)}`);
        }
    };

    return (
        <img
            src={imgSrc}
            alt={alt}
            className={className}
            onError={handleError}
            {...props}
        />
    );
}

