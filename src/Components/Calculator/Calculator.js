import "./Calculator.css";
import { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [firstArg, setFirstArg] = useState(0);
  const [secondArg, setSecondArg] = useState(0);
  const [operation, setOperation] = useState("");
  const [total, setTotal] = useState("");

  ////////////////////// Operation Functions ////////////////////////////

  // Add numbers to the screen upon click
  const addToFunction = (e) => {
    setValue(value + e.target.innerHTML);
  };

  // CLEAR screen using the "AC Button"
  const clearFunction = () => {
    setValue("");
    setFirstArg(0);
    setSecondArg(0);
    setTotal(0);
    setOperation("");
  };

  // ADDITION Function
  const addition = () => {
    setFirstArg(parseInt(value));
    setValue("");
    setOperation("addition");
  };

  // EQUALS function
  const equals = () => {
    setTotal((value ? parseInt(value) : 0) + firstArg);
    setValue(total);
  };

  // console.log(value);
  // console.log(typeof value);
  // console.log(firstArg);
  // console.log(typeof firstArg);
  // console.log(secondArg);
  // console.log(typeof secondArg);

  console.log(total);
  // console.log(firstArg + operation + secondArg);
  // console.log(parseInt(firstArg + operation + secondArg));

  ///////////////////////////////////////////////////////////////////////
  return (
    <>
      <div className="calculator-container">
        <h1 className="text-box">{value}</h1>
        <div className="calcButtonsContainer">
          <button onClick={clearFunction} className="top-buttons">
            AC
          </button>
          <button className="top-buttons">+/-</button>
          <button className="top-buttons">%</button>
          <button className="operations-button">÷</button>
          <button onClick={(e) => addToFunction(e)}>7</button>
          <button onClick={(e) => addToFunction(e)}>8</button>
          <button onClick={(e) => addToFunction(e)}>9</button>
          <button className="operations-button">x</button>
          <button onClick={(e) => addToFunction(e)}>4</button>
          <button onClick={(e) => addToFunction(e)}>5</button>
          <button onClick={(e) => addToFunction(e)}>6</button>
          <button className="operations-button">-</button>
          <button onClick={(e) => addToFunction(e)}>1</button>
          <button onClick={(e) => addToFunction(e)}>2</button>
          <button onClick={(e) => addToFunction(e)}>3</button>
          <button onClick={addition} className="operations-button">
            +
          </button>
          <button onClick={(e) => addToFunction(e)} className="button-0">
            0
          </button>
          <button onClick={(e) => addToFunction(e)}>.</button>
          <button onClick={equals} className="operations-button">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
