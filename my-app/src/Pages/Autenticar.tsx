import React, {useState} from 'react';
import FormField from '../components/FormField/FormField'

function Autenticar() {
    const [inputValue, setInputValue] = useState('');
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
      };
  return (
    <div>
        <FormField
                label=":"
                value={inputValue}
                onChange={handleChange}
                name="Usuario"
            />
      {/* Add content for your homepage here */}
    </div>
  );
}

export default Autenticar;
