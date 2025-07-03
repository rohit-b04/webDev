import { useState } from "react";
import { log } from "../../log";

// Using this method also optimizes component function executions like memo()-[inside Counter.jsx]
const ConfigureCounter = ({ onSet }) => {
  log("<ConfigureCounter /> rendered");

  const [enteredNumber, setEnteredNumber] = useState({ chosenNum: 0 });

  function handleChange(event) {
    setEnteredNumber((prevState) => {
      return { ...prevState, chosenNum: +event.target.value };
    });
  }

  function handleSetClick() {
    //console.log(enteredNumber.chosenNum);
    onSet(enteredNumber.chosenNum);
  }

  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input
        type="number"
        onChange={handleChange}
        value={enteredNumber.chosenNum}
      />
      <button onClick={handleSetClick}>Set</button>
    </section>
  );
};

export default ConfigureCounter;
