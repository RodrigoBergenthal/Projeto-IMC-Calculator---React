import React, { useState } from 'react';

const Formulario = ({ onCalcular }) => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const handleAlturaChange = (e) => {
    const value = e.target.value;
    // Permite apenas números e ponto decimal
    if (!isNaN(parseFloat(value)) && isFinite(value)) {
      setAltura(value);
    } else if (value === '') {
      setAltura('');
    }
  };

  const handlePesoChange = (e) => {
    const value = e.target.value;
    // Permite apenas números e ponto decimal
    if (!isNaN(parseFloat(value)) && isFinite(value)) {
      setPeso(value);
    } else if (value === '') {
      setPeso('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validação adicional para garantir que ambos os campos estão preenchidos com números válidos
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
        <input type="text" value={altura} onChange={handleAlturaChange} />
      </div>
      <div>
        <label>Peso (kg): </label>
        <input type="text" value={peso} onChange={handlePesoChange} />
      </div>
      <button type="submit">Calcular IMC</button>
    </form>
  );
};

export default Formulario;
