import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Relatorio from "./Pages/Relatorio"
import Autenticar from './Pages/Autenticar';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Relatorio/>}/>
        <Route path="/Autenticar" element={<Autenticar/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
