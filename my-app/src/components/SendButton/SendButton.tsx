import React from 'react';
import './SendButton.css'; 

interface SendButtonProps {
    onClick: () => void;  // Function to be executed when the button is clicked
    children: React.ReactNode; // Content of the button (e.g., text)
}

const CustomButton: React.FC<SendButtonProps> = ({ onClick, children }) => {
    return (
        <button className="SendButton" onClick={onClick}>
            {children}
        </button>
    );
};

export default CustomButton;
