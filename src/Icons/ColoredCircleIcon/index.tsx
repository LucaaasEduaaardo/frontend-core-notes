import React from 'react';

const ColoredCircleIcon = ({
    size = 0,
    width = 36.708,
    height = 36.708,
    color = '#51646E',
    cx = '18.354',
    cy = '18.354',
}) => (
    <svg
        width={size || width}
        height={size || height}
        viewBox={`0 0 ${size || width} ${size || height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx={cx} cy={cy} r="18.354" fill={color} />
    </svg>
);

export default ColoredCircleIcon;
