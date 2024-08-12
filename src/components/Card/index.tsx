import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import styles from './Card.module.scss';
import ColorPicker from '../ColorPicker';
import { StarIcon, ColorFillIcon, CloseIcon, PencilIcon } from '../../Icons';
import { ICard } from '../../types/Card';
import IconButton from '../IconButton';

interface CardNotesProps extends ICard {
    id: number;
    backgroundColor?: string;
    onClose: (id: number) => void;
    onEdit: (id: number) => void;
    onColorChange: (id: number, color: string) => void;
    isEditing: boolean;
    onFavoriteToggle: (id: number) => void;
}

const CardNotes: React.FC<CardNotesProps> = ({
    id,
    title,
    children,
    favorite = false,
    backgroundColor = '#FFF',
    onClose,
    onEdit,
    onColorChange,
    isEditing = false,
    onFavoriteToggle,
}) => {
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [bgColor, setBgColor] = useState<string>(backgroundColor);

    const handleColorSelect = (color: string) => {
        setBgColor(color);
        setShowColorPicker(false);
        onColorChange(id, color);
    };

    const renderContent = () => {
        if (
            React.isValidElement(children) &&
            typeof children.props.children === 'string'
        ) {
            return (
                <div
                    dangerouslySetInnerHTML={{
                        __html: children.props.children,
                    }}
                />
            );
        }
        return children;
    };

    return (
        <div className={styles.CardContainer}>
            <div
                className={styles.Overlay}
                style={{ display: isEditing ? 'block' : 'none' }}
            />
            <Card
                className={`${styles.Card} ${favorite ? styles.favorite : ''}`}
                style={{ backgroundColor: bgColor }}
            >
                <Card.Header className={`p-4 pb-0`}>
                    <div className="d-flex justify-content-between align-items-center align-self-center">
                        <h2>{title}</h2>
                        <IconButton onClick={() => onFavoriteToggle(id)}>
                            <StarIcon size={20} filled={favorite} />
                        </IconButton>
                    </div>
                </Card.Header>
                <Card.Body>
                    <div className="px-2">{renderContent()}</div>
                    {/* 
                    AHAHAHAHAHAHHAHAHAHAHAHAHAHA VOI FICA MLAUCO COM ISSO AHAHAHAHAHAHJAHAHAHAHAHAH
                    <div
                        className="px-2"
                        dangerouslySetInnerHTML={{ __html: String(children) }}
                    /> */}
                    {/* <div className="px-2">{children}</div> */}
                </Card.Body>
                <Card.Footer
                    className={`
                        px-4 py-2
                        d-flex justify-content-between 
                        align-items-center 
                        ${styles['card-border-none']} 
                    `}
                >
                    <div className="m-0 mb-2 p-0 p-2 pb-0 d-flex align-items-center">
                        <IconButton onClick={() => onEdit(id)}>
                            <PencilIcon width={20} height={20} />
                        </IconButton>
                        <IconButton
                            onClick={() => setShowColorPicker(!showColorPicker)}
                        >
                            <ColorFillIcon size={20} />
                        </IconButton>
                    </div>
                    <IconButton onClick={() => onClose(id)}>
                        <CloseIcon size={20} />
                    </IconButton>
                </Card.Footer>
                {showColorPicker && (
                    <div className={styles.ColorPickerWrapper}>
                        <ColorPicker onColorSelect={handleColorSelect} />
                    </div>
                )}
            </Card>
        </div>
    );
};

export default CardNotes;
