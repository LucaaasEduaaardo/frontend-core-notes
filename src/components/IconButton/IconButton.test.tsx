import React from 'react';
import { render, screen } from '@testing-library/react';
import IconButton from '.';
import { ColorFillIcon } from '../../Icons';

describe('IconButton Component', () => {
    it('renders the icon correctly', () => {
        const { getByRole } = render(
            <IconButton>
                <ColorFillIcon />
            </IconButton>
        );
        const button = getByRole('button');
        expect(button).toBeInTheDocument();
    });
});
