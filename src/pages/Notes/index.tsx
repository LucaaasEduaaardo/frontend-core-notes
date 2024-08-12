import { useEffect, useState } from 'react';
import { getNotes, createNote, updateNote, deleteNote } from '../../lib/api';
import styles from './Notes.module.scss';
import { INotes } from '../../types/Notes';
import { Container, Row, Col } from 'react-bootstrap';
import {
    CreateNote,
    CardNotes,
    NavigationBar,
    ColorPicker,
} from '../../components';

const NotesPage = () => {
    const [notes, setNotes] = useState<INotes[]>([]);
    const [selectedNote, setSelectedNote] = useState<INotes | null>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [selectedFilterColors, setSelectedFilterColors] = useState<string[]>(
        []
    );

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const notesResponse = await getNotes();
            if (Array.isArray(notesResponse)) {
                setNotes(notesResponse);
            } else {
                console.error('API', notesResponse);
                setNotes([]);
            }
        } catch (error) {
            console.error('Failed to fetch notes:', error);
            setNotes([]);
        }
    };

    const handleDeleteNote = (id: number) => {
        deleteNote(id)
            .finally(() => {
                setNotes(notes.filter(n => n.id !== id));
            })
            .catch(error => {
                console.error('Failed to delete note:', error);
            });
    };

    const handleEditNote = (id: number) => {
        const noteToEdit = notes.find(note => note.id === id);
        if (noteToEdit) {
            setSelectedNote(noteToEdit);
            setIsEditing(true);
        }
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setSelectedNote(null);
    };

    const handleColorChange = (id: number, color: string) => {
        const noteToUpdate = notes.find(note => note.id === id);
        if (noteToUpdate) {
            const updatedNote = { ...noteToUpdate, color };
            updateNote(id, updatedNote)
                .then(() => {
                    setNotes(
                        notes.map(note => (note.id === id ? updatedNote : note))
                    );
                })
                .catch(error => {
                    console.error('Failed to update note color:', error);
                });
        }
    };

    const handleToggleFavorite = (id: number) => {
        const noteToUpdate = notes.find(note => note.id === id);
        if (noteToUpdate) {
            const updatedNote = {
                ...noteToUpdate,
                favorite: !noteToUpdate.favorite,
            };
            updateNote(id, updatedNote)
                .then(() => {
                    setNotes(
                        notes
                            .map(note => (note.id === id ? updatedNote : note))
                            .sort((a, b) => {
                                if (b?.favorite === undefined) return -1;
                                if (a?.favorite === undefined) return 1;
                                return +b.favorite - +a.favorite;
                            })
                    );
                })
                .catch(error => {
                    console.error('Failed to update favorite status:', error);
                });
        }
    };

    const filterNotes = (v: string) => {
        const searchTerm = v.toLowerCase();
        const sortedNotes = [...notes].sort((a, b) => {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            const containsA = titleA.includes(searchTerm);
            const containsB = titleB.includes(searchTerm);

            if (containsA !== containsB) return containsA ? -1 : 1;
            if (a.favorite !== b.favorite) return a.favorite ? -1 : 1;

            const scoreA = (titleA.match(new RegExp(searchTerm, 'g')) || [])
                .length;
            const scoreB = (titleB.match(new RegExp(searchTerm, 'g')) || [])
                .length;

            return scoreB - scoreA;
        });

        setNotes(sortedNotes);
    };

    const handleColorFiltred = (v: string) => {
        setSelectedFilterColors(prevColors =>
            prevColors.includes(v)
                ? prevColors.filter(c => c !== v)
                : [...prevColors, v]
        );
    };

    const filteredNotes = selectedFilterColors.length
        ? notes.filter(note => selectedFilterColors.includes(note.color))
        : notes;

    return (
        <>
            <NavigationBar onChange={filterNotes} />
            <Container className={`${styles.Notes}`}>
                <Row>
                    <Col className="d-flex flex-column align-items-center mb-3 mx-1 p-0 flex-fill">
                        <CreateNote
                            noteToEdit={selectedNote}
                            onClose={handleCancelEdit}
                            onSave={() => fetchNotes()}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className="d-flex justify-content-center">
                        <h4>Filtrar Cores</h4>
                    </Col>
                    <Col sm={12} className="d-flex justify-content-center">
                        <ColorPicker
                            onColorSelect={handleColorFiltred}
                            selectedColors={selectedFilterColors}
                        />
                    </Col>
                </Row>
                <Row className="justify-content-start g-3 mt-3">
                    {filteredNotes.map(note => (
                        <Col
                            sm={12}
                            md={6}
                            lg={6}
                            xl={4}
                            key={note.id}
                            className="d-flex justify-content-center"
                        >
                            <div className="w-100 d-flex flex-column align-items-center rounded">
                                <CardNotes
                                    id={note.id || 0}
                                    title={note.title}
                                    favorite={note.favorite}
                                    backgroundColor={note.color}
                                    onClose={id => handleDeleteNote(id)}
                                    onEdit={id => handleEditNote(id)}
                                    onColorChange={(id, color) =>
                                        handleColorChange(id, color)
                                    }
                                    onFavoriteToggle={handleToggleFavorite}
                                    isEditing={
                                        isEditing
                                            ? selectedNote?.id === note.id
                                            : false
                                    }
                                >
                                    <div>{note.description}</div>
                                </CardNotes>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default NotesPage;
