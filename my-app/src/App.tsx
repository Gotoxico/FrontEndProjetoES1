import React, { useState } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import FormField from './components/FormField/FormField';
import SendButton from './components/SendButton/SendButton'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import ReportTable from './components/ReportTable/ReportTable'
import EmployeesTable from './components/EmployeesTable/EmployeesTable';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    alert('Button clicked!');
  };

  const ReportData = {
    nomeProduto: "Pilha Duracell AA 4 unidades",
    codigoBarras: "09133915017",
    nomeFornecedor: "P&G",
    quantidade: 100,
  };

  const operatorData = {
        nomeOperador: "Alberto Carlos Silva",
        cpf: "347.916.308-09",
    };

  return (
    <div className="App">
      <Header/>
      <Footer/>

      <h1>My Form</h1>
            <FormField
                label="Enter Text:"
                value={inputValue}
                onChange={handleChange}
                name="myInput"
            />
            <p>You entered: {inputValue}</p>
      <SendButton onClick={handleClick}> Enviar </SendButton>
      <ErrorMessage message="Erro Autenticação" />

      <ReportTable productData={ReportData}/>
      <br/>
      <EmployeesTable operatorData={operatorData} />
    </div>
    
  );
}

export default App;
