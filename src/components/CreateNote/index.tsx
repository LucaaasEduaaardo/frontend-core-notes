import React, { useState, useRef, useEffect } from 'react';
import { Card, Navbar, Toast, ToastContainer } from 'react-bootstrap';
import TextEditorModal from '../TextEditorModal';
import styles from './CreateNote.module.scss';
import { createNote, getFirstColor, updateNote } from '../../lib/api';
import { INotes } from '../../types/Notes';
import ColorPicker from '../ColorPicker';
import { usePopper } from 'react-popper';
import IconButton from '../IconButton';
import {
    StarIcon,
    ColorFillIcon,
    CloseIcon,
    PencilIcon,
    TextPlus,
} from '../../Icons';

interface CreateNoteProps {
    noteToEdit: INotes | null;
    onClose: () => void;
    onSave: () => void;
}

const CreateNote: React.FC<CreateNoteProps> = ({
    noteToEdit = null,
    onClose,
    onSave,
}) => {
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [note, setNotes] = useState<INotes | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [footerVisible, setFooterVisible] = useState(true);
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastVariant, setToastVariant] = useState<'success' | 'danger'>(
        'success'
    );

    const createNoteRef = useRef<HTMLDivElement>(null);
    const colorPickerButtonRef = useRef<HTMLButtonElement>(null);
    const [colorPickerPopperElement, setColorPickerPopperElement] =
        useState<HTMLDivElement | null>(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [colorPickerPopperElement]);

    useEffect(() => {
        if (noteToEdit) {
            updateNoteState(noteToEdit);
            console.log(noteToEdit);
            console.log(note);
        }
    }, [noteToEdit]);

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [colorPickerPopperElement]);

    useEffect(() => {
        const fetchColor = async () => {
            getFirstColor().then(({ hex_code }) => {
                updateNoteState({ color: hex_code });
            });
        };

        fetchColor();
    }, []);

    const { styles: popperStyles, attributes } = usePopper(
        colorPickerButtonRef.current,
        colorPickerPopperElement,
        {
            placement: 'top-end',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 8],
                    },
                },
                {
                    name: 'preventOverflow',
                    options: {
                        boundary: 'clippingParents',
                    },
                },
            ],
        }
    );

    const updateNoteState = (updates: Partial<INotes>) => {
        setNotes(prevNote => {
            if (prevNote) {
                return { ...prevNote, ...updates };
            }
            return {
                title: '',
                description: '',
                color: '',
                favorite: false,
                ...updates,
            };
        });
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateNoteState({ title: e.target.value });
    };

    const handleDescriptionChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        updateNoteState({ description: e.target.value });
    };

    const toggleFavorite = () => {
        updateNoteState({ favorite: !note?.favorite });
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleEditorChange = (content: string) => {
        updateNoteState({ description: content });
    };

    const handleClear = () => {
        updateNoteState({ description: '', title: '', id: undefined });
        onClose();
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            colorPickerPopperElement &&
            !colorPickerPopperElement.contains(event.target as Node) &&
            !colorPickerButtonRef.current?.contains(event.target as Node)
        ) {
            setShowColorPicker(false);
        }
    };

    const handleColorSelect = (color: string) => {
        updateNoteState({ color });
        setFooterVisible(true);
    };

    const handleSave = () => {
        if (note?.title.trim() === '' || note?.description.trim() === '') {
            setToastMessage('Por favor, preencha o título e a descrição.');
            setToastVariant('danger');
            setToastVisible(true);
            return;
        }

        const saveNotePromise = note
            ? note.id
                ? updateNote(note.id, note)
                : createNote({
                      title: note.title,
                      description: note.description,
                      color: note.color,
                      favorite: note.favorite,
                  })
            : Promise.reject(new Error('Nota não pode ser nula'));

        saveNotePromise
            .then(() => {
                setToastMessage('Nota salva com sucesso!');
                setToastVariant('success');
                onSave();
            })
            .catch(error => {
                setToastMessage(
                    error.message || 'Não foi possível completar a ação'
                );
                setToastVariant('danger');
            })
            .finally(() => {
                setToastVisible(true);
                handleClear();
            });
    };

    const handleDocumentClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;

        if (
            createNoteRef.current &&
            !createNoteRef.current.contains(target) &&
            !colorPickerButtonRef.current?.contains(target) &&
            !colorPickerPopperElement?.contains(target) &&
            !target.closest('.modal')
        ) {
            setFooterVisible(false);
            setShowColorPicker(false);
        }
    };

    const handleNoteClick = () => {
        setFooterVisible(true);
    };

    return (
        <>
            <Card
                className={`${styles.CreateNote}`}
                style={{ backgroundColor: note?.color || 'var(--color-1)' }}
                onClick={handleNoteClick}
                ref={createNoteRef}
            >
                <Card.Header>
                    <div className={styles.Header}>
                        <input
                            type="text"
                            placeholder="Título"
                            value={note?.title || ''}
                            onChange={handleTitleChange}
                            className={`font-bold ${styles.TitleInput}`}
                            style={{
                                backgroundColor:
                                    note?.color || 'var(--color-1)',
                                border: 'none',
                                padding: '0px 0px 0px 10px',
                            }}
                        />
                        <IconButton onClick={toggleFavorite}>
                            <StarIcon size={20} filled={note?.favorite} />
                        </IconButton>
                    </div>
                </Card.Header>
                <Card.Body>
                    <div className="position-relative">
                        <textarea
                            placeholder="Criar nota..."
                            value={note?.description || ''}
                            onChange={handleDescriptionChange}
                            className={`font-regular ${styles.DescriptionInput}`}
                            style={{
                                backgroundColor:
                                    note?.color || 'var(--color-1)',
                                border: 'none',
                            }}
                        />
                    </div>
                </Card.Body>
                <Card.Footer className={styles.Footer}>
                    <Navbar.Collapse in={footerVisible}>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <IconButton onClick={handleSave}>
                                    <PencilIcon size={20} />
                                </IconButton>
                                <IconButton onClick={handleClear}>
                                    <CloseIcon size={20} />
                                </IconButton>
                                <IconButton
                                    onClick={e => {
                                        e.stopPropagation();
                                        setShowColorPicker(!showColorPicker);
                                    }}
                                >
                                    <span ref={colorPickerButtonRef}>
                                        <ColorFillIcon />
                                    </span>
                                </IconButton>
                            </div>
                            <IconButton onClick={openModal}>
                                <TextPlus size={20} />
                            </IconButton>
                        </div>
                    </Navbar.Collapse>
                    {showColorPicker && (
                        <div
                            ref={setColorPickerPopperElement}
                            style={{ width: '100%', ...popperStyles.popper }}
                            {...attributes.popper}
                        >
                            <ColorPicker onColorSelect={handleColorSelect} />
                        </div>
                    )}
                </Card.Footer>
            </Card>

            <TextEditorModal
                show={showModal}
                handleClose={closeModal}
                value={note?.description || ''}
                onChange={handleEditorChange}
            ></TextEditorModal>
            <ToastContainer position="top-end" className="p-3">
                <Toast
                    bg={toastVariant}
                    onClose={() => setToastVisible(false)}
                    show={toastVisible}
                    delay={3000}
                    autohide
                >
                    <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
};

export default CreateNote;
