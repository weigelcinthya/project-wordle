import React from 'react';
import GuessInput from '../GuessInput';
import Guesses from '../Guesses/Guesses';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState([]);
  const [ win, setWin ] = React.useState(false);


  const submitGuess = (tentativeGuess) => {
    setGuesses([...guesses, tentativeGuess]);
    setWin(tentativeGuess === answer);
  }

  return (
    <>
      <Guesses guesses={guesses} answer={answer} win={win}/>
      <GuessInput setGuesses={setGuesses} currentGuesses={guesses} handleSubmit={submitGuess}/>
    </>
  );
}

export default Game;
