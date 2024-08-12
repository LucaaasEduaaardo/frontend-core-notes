import axios from 'axios';
import { INotes } from '../types/Notes';

const API_URL = 'http://localhost:8000/api/';

export const getNotes = async (): Promise<INotes[]> => {
    const response = await axios.get(`${API_URL}notes`);
    return response.data?.data;
};

export const createNote = async (
    note: Omit<INotes, 'id' | 'createdAt'>
): Promise<INotes> => {
    const response = await axios.post(`${API_URL}notes`, note);
    return response.data;
};

export const updateNote = async (
    id: number,
    note: Partial<INotes>
): Promise<INotes> => {
    const response = await axios.put(`${API_URL}notes/${id}`, note);
    return response.data;
};

export const deleteNote = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}notes/${id}`);
};

// ----->

export const getColors = async (): Promise<
    { id: number; name: string; hex_code: string }[]
> => {
    const response = await axios.get(`${API_URL}colors`);
    return response.data?.data;
};

export const getFirstColor = async (): Promise<{
    id: number;
    name: string;
    hex_code: string;
}> => {
    const response = await axios.get(`${API_URL}colors/first`);
    return response.data?.color;
};
