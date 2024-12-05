import React, { useState } from 'react';
import Formulario from './Formulario';
import Resultado from './Resultado';

const Calculadora = () => {
  const [resultado, setResultado] = useState(null);

  const calcularIMC = ({ altura, peso }) => {
    if (altura > 0 && peso > 0) {
      let imc = peso / ((altura / 100) ** 2);
      setResultado(imc);
    } else {
      alert('Por favor, insira valores positivos para altura e peso.');
    }
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <Formulario onCalcular={calcularIMC} />
      {resultado !== null && <Resultado imc={resultado} />}
    </div>
  );
};

export default Calculadora;
