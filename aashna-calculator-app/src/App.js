import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="heading">Aashna Calc App</div>
      <div className="display">{input}</div>
      <div className="buttons">
        <button className="number" onClick={() => handleClick('7')}>
          7
        </button>
        <button className="number" onClick={() => handleClick('8')}>
          8
        </button>
        <button className="number" onClick={() => handleClick('9')}>
          9
        </button>
        <button className="operator" onClick={() => handleClick('/')}>
          /
        </button>
        <button className="number" onClick={() => handleClick('4')}>
          4
        </button>
        <button className="number" onClick={() => handleClick('5')}>
          5
        </button>
        <button className="number" onClick={() => handleClick('6')}>
          6
        </button>
        <button className="operator" onClick={() => handleClick('*')}>
          *
        </button>
        <button className="number" onClick={() => handleClick('1')}>
          1
        </button>
        <button className="number" onClick={() => handleClick('2')}>
          2
        </button>
        <button className="number" onClick={() => handleClick('3')}>
          3
        </button>
        <button className="operator" onClick={() => handleClick('+')}>
          +
        </button>
        <button className="number" onClick={() => handleClick('0')}>
          0
        </button>
        <button className="number" onClick={() => handleClick('.')}>
          .
        </button>
        <button className="equal" onClick={handleEvaluate}>
          =
        </button>
        <button className="clear" onClick={handleClear}>
          C
        </button>
      </div>
    </div>
  );
};

export default App;
