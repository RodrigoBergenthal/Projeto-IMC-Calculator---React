import React, { useState } from 'react';

const Formulario = ({ onCalcular }) => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNaN(altura) && !isNaN(peso)) {
      onCalcular({ altura: parseFloat(altura), peso: parseFloat(peso) });
    } else {
      alert('Por favor, insira números válidos para altura e peso.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Altura (cm): </label>
        <input type="text" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </div>
      <div>
        <label>Peso (kg): </label>
        <input type="text" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </div>
      <button type="submit">Calcular IMC</button>
    </form>
  );
};

export default Formulario;
