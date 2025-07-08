import React, { useState } from 'react';
import './Search.css';

export const Search = ({ send, context }) => {
  const [flight, setFlight] = useState('');

  const handleSelectChange = (event) => {
    setFlight(event.target.value);
  };
  const goToPassengers = () => {
    console.log("Enviando evento:", { type: 'CONTINUE', selectedCountry: flight });
    send({ type: 'CONTINUE', selectedCountry: flight });
  };

  console.log("País seleccionado en input:", flight);
  console.log("Contexto actualizado:", context);
  const options = ['Mexico', 'Venezuela', 'Colombia'];

  return (
    <div className='Search'>
      <p className='Search-title title'>Busca tu destino</p>
      <select id="country" className='Search-select' value={flight} onChange={handleSelectChange}>
        <option value="" disabled>Escoge un país</option>
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
      <button onClick={goToPassengers} disabled={flight === ''} className='Search-continue button'>Continuar</button>
    </div>
  );
}; 