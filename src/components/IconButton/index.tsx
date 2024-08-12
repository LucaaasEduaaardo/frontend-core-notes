import React, { useState, useRef, useEffect } from 'react';
import { Button, ButtonProps } from 'react-bootstrap';
import styles from './IconButton.module.scss';

interface IconButtonProps extends ButtonProps {
    children: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <Button className={`${styles.IconButton} ${className}`} {...rest}>
            {children}
        </Button>
    );
};

export default IconButton;
