import { ReactNode } from 'react';

export interface ICard {
    title?: string;
    children: ReactNode;
    favorite?: boolean;
}
