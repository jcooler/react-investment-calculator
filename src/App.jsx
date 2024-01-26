import Header from "./components/Header";
import Input from "./components/Input";
import Results from "./components/Results";

import { useState } from "react";

function App() {


  const [input, setInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 12,
  });


  const inputIsValid = Object.values(input).every(value => value > 0);

  function handleChange(inputIdentifier, newValue) {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <Input input={input} onChange={handleChange}/>
      {!inputIsValid  && <p className="center">Please enter a duration greater than 0.</p>}
      {inputIsValid && <Results input={input} />}
    </>
  );
}

export default App;
