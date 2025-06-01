import React from 'react';
import './FormField.css'; 

interface FormFieldProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, value, onChange, name }) => {
    return (
        <div className="Formfield">
            <label htmlFor={name}>{label}</label>
            <input
                type="text"
                id={name}
                className="Forminput"
                value={value}
                onChange={onChange}
                name={name}
            />
        </div>
    );
};

export default FormField;
