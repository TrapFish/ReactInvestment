import React, { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestmentAmount: 10000,
    annualInvestmentAmount: 5000,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >=1

  function handleInputChange(event) {
    const { name, value } = event.target;
    // setUserInput({ ...userInput, [name]: value });
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [name]: +value
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleInputChange} userInput={userInput} />
      {!inputIsValid && <p className='center'>Please enter a valid duration (it must be greater than 0)</p>}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  )
}

export default App
