import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface TextEditorProps {
    value: string;
    onChange: (content: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ value, onChange }) => {
    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            ['link'], //'image'
            [{ align: [] }],
            ['clean'],
            ['code-block'],
        ],
        clipboard: {
            matchVisual: false,
        },
    };

    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        // 'image',
        'align',
        'code-block',
    ];

    return (
        <ReactQuill
            value={value}
            onChange={onChange}
            modules={modules}
            formats={formats}
            theme="snow"
        />
    );
};

export default TextEditor;
