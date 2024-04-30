import React from 'react';

import { useNavigate } from 'react-router-dom';

function home() {

  const irPara= useNavigate();
  const handleClick = (path) => {
   
    irPara("/");
  };

  return (
    <div>
   
      <h1>Página Inicial</h1>      
      <button onClick= {handleClick}>Deslogar </button>
    </div>
  );
}

export default home;