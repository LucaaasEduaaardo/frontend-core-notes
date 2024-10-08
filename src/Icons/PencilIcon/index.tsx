import React from 'react';

const PencilIcon = ({
    size = 0,
    width = 25,
    height = 24,
    color = '#51646E',
}) => (
    <svg
        width={size || width}
        height={size || height}
        viewBox={`0 0 ${(size || width) + 1} ${size || height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M14.5498 9.16667L15.4376 10.0544L6.86203 18.6111H5.99314V17.7422L14.5498 9.16667ZM17.9498 3.5C17.7137 3.5 17.4681 3.59444 17.2887 3.77389L15.5604 5.50222L19.102 9.04389L20.8304 7.31556C21.1987 6.94722 21.1987 6.33333 20.8304 5.98389L18.6204 3.77389C18.4315 3.585 18.1954 3.5 17.9498 3.5ZM14.5498 6.51278L4.10425 16.9583V20.5H7.64591L18.0915 10.0544L14.5498 6.51278Z"
            fill={color}
        />
    </svg>
);

export default PencilIcon;
