import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import TextEditor from '../TextEditor';

interface TextEditorModalProps {
    show: boolean;
    handleClose: () => void;
    value: string;
    onChange: (content: string) => void;
}

const TextEditorModal: React.FC<TextEditorModalProps> = ({
    show,
    handleClose,
    value,
    onChange,
}) => {
    return (
        <Modal show={show} onHide={handleClose} backdrop="static" size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Editor de Texto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TextEditor value={value} onChange={onChange} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TextEditorModal;
