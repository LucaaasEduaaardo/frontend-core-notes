import React from 'react';

interface TextPlusProps {
    size?: number;
    width?: number;
    height?: number;
    color?: string;
    strokeWidth?: number;
}

const TextPlus: React.FC<TextPlusProps> = ({
    size = 0,
    width = 20,
    height = 20,
    color = '#51646E',
    strokeWidth = 2,
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || width}
        height={size || height}
        viewBox={`0 0 ${size || width} ${size || height}`}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M19 10H5" />
        <path d="M5 6h14" />
        <path d="M14 14H5" />
        <path d="M5 18h6" />
        <path d="M18 15v6" />
        <path d="M15 18h6" />
    </svg>
);

export default TextPlus;
