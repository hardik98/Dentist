// Generate placeholder images using data URIs and reliable services

export const getPlaceholderImage = (width, height, text, bgColor = '4F46E5', textColor = 'FFFFFF') => {
    // Use a reliable placeholder service with fallback
    return `https://placehold.co/${width}x${height}/${bgColor}/${textColor}?text=${encodeURIComponent(text)}`;
};

// SVG-based placeholder for avatars (more reliable)
export const getAvatarPlaceholder = (initials, size = 150) => {
    const colors = {
        'LI': { bg: '6366F1', text: 'FFFFFF' },
        'DS': { bg: '8B5CF6', text: 'FFFFFF' },
        'AC': { bg: 'EC4899', text: 'FFFFFF' }
    };
    const color = colors[initials] || { bg: '6366F1', text: 'FFFFFF' };
    
    const svg = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${size}" height="${size}" fill="#${color.bg}"/>
        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${size * 0.4}" font-weight="bold" fill="#${color.text}" text-anchor="middle" dominant-baseline="middle">${initials}</text>
    </svg>`;
    
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

// Doctor placeholder images - using AI-generated professional headshots
// Multiple fallback options for reliability
export const doctorPlaceholders = {
    // Doctor 1 - Professional male doctor (AI-generated)
    doctor1: 'https://randomuser.me/api/portraits/men/32.jpg',
    // Doctor 2 - Professional female doctor (AI-generated)  
    doctor2: 'https://randomuser.me/api/portraits/women/44.jpg',
    // Doctor 3 - Professional male doctor (AI-generated)
    doctor3: 'https://randomuser.me/api/portraits/men/75.jpg',
};

// Fallback images if primary sources fail
export const doctorFallbacks = {
    doctor1: 'https://i.pravatar.cc/800?img=12',
    doctor2: 'https://i.pravatar.cc/800?img=47', 
    doctor3: 'https://i.pravatar.cc/800?img=33',
};

// Client avatar placeholders - using SVG data URIs
export const clientAvatars = {
    client1: getAvatarPlaceholder('LI', 150),
    client2: getAvatarPlaceholder('DS', 150),
    client3: getAvatarPlaceholder('AC', 150),
};

