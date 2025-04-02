import React from 'react';
import GuessWord from '../GuessWord/GuessWord';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guesses({guesses, answer, win}) {

  
 
  return (
    <>
    { win && 
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guesses.length} guesses</strong>.
        </p>
      </div>
    }
    { !win && guesses.length > NUM_OF_GUESSES_ALLOWED && 
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    }
    <div className="guess-results">
      { range(NUM_OF_GUESSES_ALLOWED).map(num => (
        <GuessWord key={num} value={guesses[num]} answer={answer}/>
      ))
      }
    </div>
    </>
  );
}

export default Guesses;
