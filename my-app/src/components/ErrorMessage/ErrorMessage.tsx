import React from 'react';
import './ErrorMessage.css'; // Create this CSS file

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <div className="errormessage">
            {message}
        </div>
    );
};

export default ErrorMessage;
