import { useState, useEffect } from 'react';

const ShimmerTags = ({ items, className, wrapperClassName, subtle }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % items.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <div className={wrapperClassName || 'flex flex-wrap gap-2'}>
            {items.map((item, i) => {
                const distance = Math.abs(i - activeIndex);
                const brightness = subtle
                    ? (distance === 0 ? 1.3
                        : distance === 1 ? 1.15
                            : distance === 2 ? 1.05
                                : 1)
                    : (distance === 0 ? 1.2
                        : distance === 1 ? 1.05
                            : distance === 2 ? 0.85
                                : distance === 3 ? 0.65
                                    : 0.5);

                return (
                    <span
                        key={item}
                        style={{ filter: `brightness(${brightness})` }}
                        className={className || 'shimmer-tag text-green-300 text-xs font-mono px-3 py-1 rounded-full border border-green-800'}
                    >
                        {item}
                    </span>
                );
            })}
        </div>
    );
};

export default ShimmerTags;