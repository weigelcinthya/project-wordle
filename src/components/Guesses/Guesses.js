import React from 'react';
import GuessWord from '../GuessWord/GuessWord';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guesses({guesses}) {
  return (
    <div className="guess-results">
      { range(NUM_OF_GUESSES_ALLOWED).map(num => (
        <GuessWord key={num} value={guesses[num]} />
      ))
      }
    </div>
  );
}

export default Guesses;
