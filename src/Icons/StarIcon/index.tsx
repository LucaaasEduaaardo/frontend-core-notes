import React from 'react';

interface StarIconProps {
    size?: number;
    width?: number;
    height?: number;
    filled?: boolean;
    color?: string;
}

const StarIcon: React.FC<StarIconProps> = ({
    size = 0,
    width = 17,
    height = 16,
    filled = true,
    color = '#FFA000',
}) => (
    <svg
        width={size || width}
        height={size || height}
        viewBox={`0 0 ${size || width} ${size || height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8.08545 7.56521L2.93164 8.35812L7.49076 12.0253L6.30142 17.5755L10.4641 14.404L15.6179 17.5755L14.2304 12.0253L18.0957 8.35812L12.8428 7.56521L10.4641 2.41141L8.08545 7.56521Z"
            fill={filled ? '#FFA000' : 'none'}
        />
        <path
            d="M10.5437 13.7726L6.90542 15.9691L7.86337 11.8277L4.65085 9.04093L8.88906 8.68291L10.5437 4.7737L12.1983 8.68291L16.4365 9.04093L13.224 11.8277L14.182 15.9691M20.22 7.82172L13.2627 7.23147L10.5437 0.816101L7.82467 7.23147L0.867432 7.82172L6.141 12.3986L4.56377 19.201L10.5437 15.5918L16.5236 19.201L14.9367 12.3986L20.22 7.82172Z"
            fill="#51646E"
        />
    </svg>
);

export default StarIcon;
