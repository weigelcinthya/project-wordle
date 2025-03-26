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

  return (
    <>
      <Guesses guesses={guesses}/>
      <GuessInput setGuesses={setGuesses} currentGuesses={guesses}/>
    </>
  );
}

export default Game;
