import React, { useEffect, useState } from 'react';
import styles from './ColorPicker.module.scss';
import { getColors } from '../../lib/api';
import IColor from '../../types/Colors';

interface ColorPickerProps {
    onColorSelect: (color: string) => void;
    selectedColors?: string[];
}

const ColorPicker: React.FC<ColorPickerProps> = ({
    onColorSelect,
    selectedColors = [],
}) => {
    const [colors, setColors] = useState<IColor[]>([]);

    useEffect(() => {
        const fetchColors = async () => {
            try {
                const colorsResponse = await getColors();
                if (Array.isArray(colorsResponse)) {
                    setColors(colorsResponse);
                } else {
                    console.error('Retorno inválido', colorsResponse);
                    setColors([]);
                }
            } catch (error) {
                console.error('FalHA ao pegar as cores:', error);
                setColors([]);
            }
        };

        fetchColors();
    }, []);

    const isSelected = (color: string) => selectedColors.includes(color);

    return (
        <div className={styles.ColorPicker}>
            {colors.map(color => (
                <div
                    key={color.id}
                    className={`${styles.ColorOption} ${isSelected(color.hex_code) ? styles.Selected : ''}`}
                    style={{ backgroundColor: color.hex_code }}
                    onClick={() => {
                        onColorSelect(color.hex_code);
                    }}
                />
            ))}
        </div>
    );
};

export default ColorPicker;
