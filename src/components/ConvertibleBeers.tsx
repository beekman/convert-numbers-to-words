import React, { useState } from 'react';
import { numberToWords, wordsToNumber } from '../utils/numberConverter';

const ConvertibleBeers: React.FC = () => {
  const [bottles, setBottles] = useState<number>(99);
  const [input, setInput] = useState<string>('99');

  const handleClick = () => {
    setBottles(bottles - 1);
  };

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInput(event.target.value);

  const parsedNumber = parseInt(event.target.value);
  if (!isNaN(parsedNumber)) {
    setBottles(parsedNumber);
  } else {
    const parsedWords = parseInt(wordsToNumber(event.target.value));
    if (!isNaN(parsedWords)) {
      setBottles(parsedWords);
    }
  }
};

  const bottlesWordRepresentation = numberToWords(bottles).charAt(0).toUpperCase() + numberToWords(bottles).slice(1);
  const bottlesPhrase = bottles > 0 ? `🎵 ${bottlesWordRepresentation} bottle${bottles === 1 ? '' : 's'} of beer on the wall. ${bottlesWordRepresentation} bottle${bottles === 1 ? '' : 's'} of beer... 🎶` : '🎵 No more bottles of beer on the wall. 🎶';

  return (
    <section>
			<h2>Convertible Ninety-Nine Bottles of Beer</h2>
      <p>{bottlesPhrase}</p>
      <button onClick={handleClick} disabled={bottles === 0}>
        Take one down, pass it around
      </button>
      <div>
        <label>Set initial number using either numbers or words: </label>
        <input type="text" value={input} onChange={handleInputChange} />
      </div>
    </section>
  );
};

export default ConvertibleBeers;
