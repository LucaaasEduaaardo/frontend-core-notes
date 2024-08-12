import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.module.scss';
import { Nav } from 'react-bootstrap';
import InputSearch from '../InputSearch';
import CloseIcon from '../../Icons/CloseIcon';

interface NavigationBarProps {
    onChange?: (value: string) => void;
}
const NavigationBar: React.FC<NavigationBarProps> = ({ onChange }) => {
    const handleChangeInput = (v: any) => {
        if (onChange) onChange(v);
    };
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            className="bg-body-tertiary"
            sticky="top"
        >
            <div className="d-flex justify-content-between flex-fill px-5">
                <div className="d-flex justify-content-start align-items-center flex-fill">
                    <Navbar.Brand
                        href="/"
                        className="d-flex align-items-center align-self-center"
                    >
                        <img
                            src="/logo.svg"
                            className="d-inline-block align-top"
                            alt="CoreNotes Logo"
                            style={{ height: '40px', marginRight: '10px' }}
                        />
                        <span>CoreNotes</span>
                    </Navbar.Brand>
                    <InputSearch onChange={handleChangeInput} />
                </div>
                <Nav className="ms-auto align-self-center flex-fill d-flex justify-content-end">
                    <Nav.Link href="/">
                        <CloseIcon width={20} height={20} />
                    </Nav.Link>
                </Nav>
            </div>
        </Navbar>
    );
};

export default NavigationBar;
