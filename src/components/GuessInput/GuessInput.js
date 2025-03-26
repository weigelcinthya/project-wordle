import React from 'react';

function GuessInput({setGuesses, currentGuesses}) {
  const [ guess, setGuess ] = React.useState('');

  const submitGuess = (e) => {
    e.preventDefault();
    const updatedGuesses = [...currentGuesses, guess];
    setGuesses(updatedGuesses)
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={submitGuess}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" 
            type="text"
            minLength={5}
            maxLength={5}
            pattern='[a-zA-Z]{5}'
            value={guess}
            onChange={(e) => {
                const nextGuess = e.target.value.toUpperCase();
                setGuess(nextGuess);
            }} />
    </form>
  );
}

export default GuessInput;
