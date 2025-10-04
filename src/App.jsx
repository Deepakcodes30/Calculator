import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  function handleClick(value) {
    setInput((prev) => prev + value);
  }

  function handleCLear(value) {
    setInput((value = ""));
  }

  function handleDelete() {
    setInput((prev) => prev.slice(0, -1));
  }

  function handleEqual() {
    setInput(eval(input).toString()); // do not pass value as a parameter here becomes that is not a string and we have passed an event in the button
  }

  return (
    <div className="mainContainer">
      <div className="inputDiv">
        <input type="text" className="display" value={input} />
      </div>

      <div className="btnContainer">
        <button className="operatorBtn" onClick={handleCLear}>
          AC
        </button>
        <button className="operatorBtn" onClick={handleDelete}>
          DEL
        </button>
        <button className="operatorBtn" onClick={() => handleClick("%")}>
          %
        </button>
        <button className="operatorBtn" onClick={() => handleClick("/")}>
          /
        </button>

        <button className="numberBtn" onClick={() => handleClick("7")}>
          7
        </button>

        <button className="numberBtn" onClick={() => handleClick("8")}>
          8
        </button>
        <button className="numberBtn" onClick={() => handleClick("9")}>
          9
        </button>
        <button className="operatorBtn" onClick={() => handleClick("*")}>
          *
        </button>
        <button className="numberBtn" onClick={() => handleClick("4")}>
          4
        </button>
        <button className="numberBtn" onClick={() => handleClick("5")}>
          5
        </button>
        <button className="numberBtn" onClick={() => handleClick("6")}>
          6
        </button>
        <button className="operatorBtn" onClick={() => handleClick("-")}>
          -
        </button>
        <button className="numberBtn" onClick={() => handleClick("1")}>
          1
        </button>
        <button className="numberBtn" onClick={() => handleClick("2")}>
          2
        </button>
        <button className="numberBtn" onClick={() => handleClick("3")}>
          3
        </button>
        <button className="operatorBtn" onClick={() => handleClick("+")}>
          +
        </button>
        <button className="numberBtn" onClick={() => handleClick("0")}>
          0
        </button>
        <button className="numberBtn" onClick={() => handleClick("00")}>
          00
        </button>
        <button className="numberBtn" onClick={() => handleClick(".")}>
          .
        </button>
        <button className="operatorBtn" onClick={handleEqual}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
