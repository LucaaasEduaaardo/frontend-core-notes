import React from 'react';

const CloseIcon = ({
    size = 0,
    width = 14,
    height = 15,
    color = '#51646E',
}) => (
    <svg
        width={size || width}
        height={size || height}
        viewBox={`-3 -3 ${size || width} ${(size || height) + 1}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M13.22 2.29924L11.8964 0.975616L6.64884 6.22319L1.40126 0.975616L0.0776367 2.29924L5.32521 7.54682L0.0776367 12.7944L1.40126 14.118L6.64884 8.87045L11.8964 14.118L13.22 12.7944L7.97247 7.54682L13.22 2.29924Z"
            fill={color}
        />
    </svg>
);

export default CloseIcon;
