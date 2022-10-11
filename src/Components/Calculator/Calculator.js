import "./Calculator.css";
import "../../App.css";

import { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [firstArg, setFirstArg] = useState(0);
  const [secondArg, setSecondArg] = useState(0);
  const [operation, setOperation] = useState("");
  const [total, setTotal] = useState("");
  const [containsDecimal, setContainsDecimal] = useState(false);
  const [cButton, setCButton] = useState(false);
  const [operationButton, setOperationButton] = useState();

  ////////////////////// Operation Functions ////////////////////////////

  // Add numbers to the screen upon click
  const addToFunction = (e) => {
    setValue(value + e.target.innerHTML);
    setCButton(true);
  };

  // CLEAR screen using the "AC Button"
  const clearFunction = () => {
    setValue("");
    setFirstArg(0);
    setSecondArg(0);
    setTotal(0);
    setOperation("");
    setContainsDecimal(false);
    setCButton(false);
  };

  // +/- Button Function
  const plusMinus = () => {
    if (value.includes("-")) {
      let newValue = value.split("").slice(1).join("").toString();
      setValue(newValue);
    } else if (value !== "-") {
      if (value === "") {
        setValue(value + "-");
      } else {
        setValue("-" + value);
      }
    }
  };

  // PERCENTAGE Function
  const percentage = () => {
    if (value !== "") {
      setValue((value / 100).toString());
    }
  };

  // ADDITION Function
  const addition = (e) => {
    setOperationButton(e.target);
    if (value.includes(".")) {
      setContainsDecimal(true);
    }
    e.target.classList.toggle("operations-button-selected");
    e.target.disabled = true;
    setFirstArg(parseFloat(value));
    setValue("");
    setOperation("addition");
  };

  // SUBTRACTION Function
  const subtraction = (e) => {
    setOperationButton(e.target);
    if (value.includes(".")) {
      setContainsDecimal(true);
    }
    e.target.classList.toggle("operations-button-selected");
    e.target.disabled = true;
    setFirstArg(parseFloat(value));
    setValue("");
    setOperation("subtraction");
  };

  // MULTIPLICATION Function
  const multiplication = (e) => {
    setOperationButton(e.target);
    if (value.includes(".")) {
      setContainsDecimal(true);
    }
    e.target.classList.toggle("operations-button-selected");
    e.target.disabled = true;
    setFirstArg(parseFloat(value));
    setValue("");
    setOperation("multiplication");
  };

  // DIVISION Function
  const division = (e) => {
    setOperationButton(e.target);
    if (value.includes(".")) {
      setContainsDecimal(true);
    }
    e.target.classList.toggle("operations-button-selected");
    e.target.disabled = true;
    setFirstArg(parseFloat(value));
    setValue("");
    setOperation("division");
  };

  // EQUALS function
  const equals = () => {
    // Changing operations color back to normal
    operationButton.classList.remove("operations-button-selected");
    operationButton.disabled = false;
    // Calculations based of Type of Operation
    if (operation === "addition") {
      setSecondArg(value ? parseFloat(value) : 0);
      setTotal(firstArg + (value ? parseFloat(value) : 0));
      let total = firstArg + (value ? parseFloat(value) : 0);
      containsDecimal ? setValue(total.toFixed(2).toString()) : setValue(total.toString());
    }
    if (operation === "subtraction") {
      setSecondArg(value ? parseFloat(value) : 0);
      setTotal(firstArg - (value ? parseFloat(value) : 0));
      let total = firstArg - (value ? parseFloat(value) : 0);
      containsDecimal ? setValue(total.toFixed(2).toString()) : setValue(total.toString());
    }
    if (operation === "multiplication") {
      setSecondArg(value ? parseFloat(value) : 0);
      setTotal(firstArg * (value ? parseFloat(value) : 0));
      let total = firstArg * (value ? parseFloat(value) : 0);
      containsDecimal ? setValue(total.toFixed(2).toString()) : setValue(total.toString());
    }
    if (operation === "division") {
      setSecondArg(value ? parseFloat(value) : 0);
      setTotal(firstArg / (value ? parseFloat(value) : 0));
      let total = firstArg / (value ? parseFloat(value) : 0);
      containsDecimal ? setValue(total.toFixed(2).toString()) : setValue(total.toString());
    }
  };

  console.log(total);

  ///////////////////////////////////////////////////////////////////////
  return (
    <>
      {/* <div className="calculator-container">
        <h1 className="text-box">{value}</h1>
        <div className="calcButtonsContainer">
          {cButton ? (
            <button onClick={clearFunction} className="top-buttons">
              C
            </button>
          ) : (
            <button onClick={clearFunction} className="top-buttons">
              AC
            </button>
          )}

          <button onClick={plusMinus} className="top-buttons">
            +/-
          </button>
          <button onClick={percentage} className="top-buttons">
            %
          </button>
          <button onClick={(e) => division(e)} className="operations-button">
            ÷
          </button>
          <button onClick={(e) => addToFunction(e)}>7</button>
          <button onClick={(e) => addToFunction(e)}>8</button>
          <button onClick={(e) => addToFunction(e)}>9</button>
          <button onClick={(e) => multiplication(e)} className="operations-button">
            x
          </button>
          <button onClick={(e) => addToFunction(e)}>4</button>
          <button onClick={(e) => addToFunction(e)}>5</button>
          <button onClick={(e) => addToFunction(e)}>6</button>
          <button onClick={(e) => subtraction(e)} className="operations-button">
            -
          </button>
          <button onClick={(e) => addToFunction(e)}>1</button>
          <button onClick={(e) => addToFunction(e)}>2</button>
          <button onClick={(e) => addToFunction(e)}>3</button>
          <button onClick={(e) => addition(e)} className="operations-button">
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
      </div> */}
      <div className="col-10 col-sm-6 col-md-5 col-lg-4 px-2 mx-auto calculator-container-1">
        <div className="">
          <div className="row calcButtonsContainer-1 w-100 mx-auto overflow-hidden">
          {/* TEXT SCREEN */}
            <h1 className="text-box-1 mb-0 pt-3 overflow-hidden">{value}</h1>
          {/* FIRST ROW */}
          {cButton ? (
              <button onClick={clearFunction} className="col-3 top-buttons-1">
                C
              </button>
            ) : (
              <button onClick={clearFunction} className="col-3 top-buttons-1">
                AC
              </button>
            )}
            <button onClick={plusMinus} className="col-3 top-buttons-1">
              +/-
            </button>
            <button onClick={percentage} className="col-3 top-buttons-1">
              %
            </button>
            <button onClick={(e) => division(e)} className="col-3 top-buttons-1">
              ÷
            </button>
          {/* SECOND ROW */}
            <button onClick={(e) => addToFunction(e)} className="col-3">7</button>
            <button onClick={(e) => addToFunction(e)} className="col-3">8</button>
            <button onClick={(e) => addToFunction(e)} className="col-3">9</button>
            <button onClick={(e) => multiplication(e)} className="col-3 operations-buttons-1">x</button>
          {/* THIRD ROW */}
            <button onClick={(e) => addToFunction(e)} className="col-3">4</button>
            <button onClick={(e) => addToFunction(e)} className="col-3">5</button>
            <button onClick={(e) => addToFunction(e)} className="col-3">6</button>
            <button onClick={(e) => subtraction(e)} className="col-3 operations-buttons-1">-</button>
          {/* FOURTH ROW */}
            <button onClick={(e) => addToFunction(e)} className="col-3">1</button>
            <button onClick={(e) => addToFunction(e)} className="col-3">2</button>
            <button onClick={(e) => addToFunction(e)} className="col-3">3</button>
            <button onClick={(e) => addition(e)} className="col-3 operations-buttons-1">+</button>
          {/* FIFTH ROW */}
            <button onClick={(e) => addToFunction(e)} className="col-6 rounded">0</button>
            <button onClick={(e) => addToFunction(e)} className="col-3">.</button>
            <button onClick={equals} className="col-3 operations-buttons-1">=</button>
          </div> 
        </div>
      </div>
    </>
  );
};

export default Calculator;
