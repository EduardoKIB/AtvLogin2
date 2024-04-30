// Importa o módulo React do pacote react
import React from 'react';
// Importa módulos específicos do pacote react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importa o componente Home da pasta 'pages'
import Home from './pages/Home';

import Login from './pages/Login';

import Cadastro from './pages/Cadastro';

function App() {
  // Retorna a estrutura de roteamento usando o BrowserRouter
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}
// Exporta o componente App como padrão
export default App;
