import { useState } from "react";
import { PropTypes } from "prop-types";

const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value);

  // handleAdd
  const handleAdd = () => {
    // setCounter((c) => c + 1);
    setCounter(counter + 1);
  }

  // handleSubstract
  const handleSubstract = () => {
    setCounter(counter - 1);
  }

  // handleReset
  const handleReset = () => {
    setCounter(value);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <div>
        <button onClick={handleSubstract}>- 1</button>
        <h2> {counter} </h2>
        <button onClick={handleAdd}>+ 1</button>
      </div>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

export default CounterApp;

