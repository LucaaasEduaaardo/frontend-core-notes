import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import styles from './InputSearch.module.scss';
import { SearchIcon } from '../../Icons';

interface InputSearchProps {
    onChange?: (value: string) => void;
}

const InputSearch: React.FC<InputSearchProps> = ({ onChange }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        if (onChange) onChange(value);
    };

    return (
        <InputGroup className={`${styles.InputSearch} flex-grow-1 mx-3`}>
            <Form.Control
                aria-label="Pesquisar notas"
                placeholder="Pesquisar notas"
                className="font-small"
                value={searchTerm}
                onChange={handleChange}
            />
            <InputGroup.Text className={`${styles.icon}`}>
                <SearchIcon size={13} />
            </InputGroup.Text>
        </InputGroup>
    );
};

export default InputSearch;
