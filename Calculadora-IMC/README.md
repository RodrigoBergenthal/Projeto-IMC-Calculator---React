 # Projeto Publicado na vercel em: https://projeto-imc-calculator-react.vercel.app/
 
 # Calculadora de Índice de Massa Corporal (IMC)

Este é um projeto simples de uma calculadora de Índice de Massa Corporal (IMC), desenvolvido como parte de um estudo ou aplicação prática. O IMC é uma medida que utiliza a altura e o peso de uma pessoa para determinar se ela está em um peso saudável.

## Estrutura do Projeto

```
/project-root
|-- /src
    |-- /components
        |-- Formulario.jsx          # Componente para entrada de dados (altura e peso)
        |-- Calculadora.jsx         # Componente para exibir o resultado do IMC
    |-- App.jsx                     # Ponto de entrada da aplicação React
    |-- global.css                  # Estilos globais para o aplicativo
|-- package.json                   # Gerenciamento de pacotes e dependências
|-- README.md                      # Documentação do projeto
```

## Como Usar

1. **Instalação das Dependências**:
   Certifique-se de ter o Node.js instalado na sua máquina. Em seguida, clone este repositório e instale as dependências:

   ```sh
   git clone https://github.com/your-repo/calculadora-imc.git
   cd calculadora-imc
   npm install
   ```

2. **Executar a Aplicação**:
   Após instalar as dependências, você pode iniciar o servidor de desenvolvimento:

   ```sh
   npm start
   ```

   Isso abrirá uma nova janela do navegador com a aplicação em `http://localhost:3000`.

## Componentes Principais

### 1. Formulario.jsx

Este componente é responsável pela entrada de dados para altura e peso. Ele utiliza um formulário HTML para coletar os valores inseridos pelo usuário e envia-os ao componente pai (`App`) quando o botão de envio é clicado.

```jsx
import React, { useState } from 'react';

const Formulario = ({ onCalcular }) => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const handleAlturaChange = (e) => {
    setAltura(e.target.value);
  };

  const handlePesoChange = (e) => {
    setPeso(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalcular({ altura, peso });
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
```

### 2. Calculadora.jsx

Este componente exibe o resultado do cálculo do IMC. Ele recebe os valores de altura e peso via props e calcula o IMC usando a fórmula `IMC = peso / (altura * altura)`.

```jsx
import React from 'react';

const Calculadora = ({ imc }) => {
  return (
    <div>
      <h2>Resultado do IMC</h2>
      <p>IMC: {imc.toFixed(2)}</p>
      {/* Aqui você pode adicionar mais informações ou lógica para exibir o resultado */}
    </div>
  );
};

export default Calculadora;
```

### 3. App.jsx

Este é o componente principal que utiliza os componentes `Formulario` e `Calculadora`. Ele gerencia a lógica de cálculo do IMC e passa os valores para o componente `Calculadora` após o envio do formulário.

```jsx
import React from 'react';
import Formulario from './components/Formulario';
import Calculadora from './components/Calculadora';

const App = () => {
  const handleCalcularIMC = ({ altura, peso }) => {
    // Lógica para calcular o IMC
    const imc = parseFloat(peso) / ((parseFloat(altura) / 100) ** 2);
    console.log(`Altura: ${altura} cm, Peso: ${peso} kg`);
    console.log(`IMC: ${imc.toFixed(2)}`);
    // Aqui você pode adicionar a lógica real para exibir o resultado
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <Formulario onCalcular={handleCalcularIMC} />
      <Calculadora imc={0} />
    </div>
  );
};

export default App;
```

## Estilos Globais

Estilos globais são definidos no arquivo `global.css`. Este arquivo inclui regras de mídia para ajustar o tamanho da fonte e outros elementos conforme necessário para dispositivos móveis.

```css
/* src/global.css */
body, html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}
```

## Considerações Finais

Este projeto é um exemplo básico de como criar uma calculadora de IMC usando React. Você pode expandir este projeto adicionando mais funcionalidades, validação de formulário, estilos mais avançados e outras melhorias conforme necessário.

---
