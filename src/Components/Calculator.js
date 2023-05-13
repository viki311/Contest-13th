import React, { useState } from "react";

const Calculator = () => {
  //state variables for storing data
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  //function to validate input fields
  const validateInputs = () => {
    if (num1 === "") {
      setError("Error :  Num1 cannot be empty");
      setResult("");
      return false;
    }
    if (num2 === "") {
      setError("Error :  Num2 cannot be empty");
      setResult("");
      return false;
    }

    if (isNaN(num1) || isNaN(num2)) {
      setError("Please enter valid numbers");
      setResult("");
      return false;
    }

    setError("");
    return true;
  };

  //function to calculate result
  const handleOperation = (operation) => {
    if (validateInputs()) {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);

      let res;
      switch (operation) {
        case "+":
          res = number1 + number2;
          break;
        case "-":
          res = number1 - number2;
          break;
        case "*":
          res = number1 * number2;
          break;
        case "/":
          res = number1 / number2;
          break;
        default:
          break;
      }

      setResult(`Result= ${res}`);
    } else {
      setResult("");
    }
  };

  return (
    <div className="main">
      <h1>React Calculator</h1>
      <div className="inputs">
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter number 1"
        />
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter number 2"
        />
      </div>
      <div className="btn">
        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("*")}>*</button>
        <button onClick={() => handleOperation("/")}>/</button>
      </div>

      <div className="result">
        {error && <div style={{ color: "red" }}>{error}</div>}
        {result && (
          <>
            <div>{result}</div>
            <div style={{ color: "green" }}>
              Success : Your result is shown above!
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Calculator;
