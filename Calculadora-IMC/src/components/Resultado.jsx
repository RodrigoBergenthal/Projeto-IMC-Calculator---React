import React from 'react';

const Resultado = ({ imc }) => {
  return (
    <div>
      <h2>Seu Índice de Massa Corporal (IMC) é: {imc.toFixed(2)}</h2>
      <p>{imc < 18.5 ? 'Abaixo do Peso' : imc >= 18.5 && imc <= 24.9 ? 'Peso Normal' : imc >= 25 && imc <= 29.9 ? 'Sobrepeso' : 'Obesidade'}</p>
    </div>
  );
};

export default Resultado;
