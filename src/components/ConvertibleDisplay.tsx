import React, { useState } from 'react';
import { numberToWords, wordsToNumber } from '../utils/numberConverter';

const NumberWordsConverterComponent: React.FC = () => {
  const [number, setNumber] = useState<string>('0');
  const [words, setWords] = useState<string>('zero');

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = e.target.value;
    setNumber(newNumber);
    setWords(numberToWords(parseInt(newNumber.replace(/,/g, ''), 10)));
  };

  const handleWordsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWords = e.target.value;
    setWords(newWords);
    setNumber(wordsToNumber(newWords));
  };

  return (
    <div>
			<h2>Convertible Display</h2>
      <label htmlFor="number-input">Enter a number:</label>
      <input
        id="number-input"
        type="text"
        value={number}
        onChange={handleNumberChange}
      />

      <label htmlFor="words-input">Number in words:</label>
      <input
        id="words-input"
        type="text"
        value={words}
        onChange={handleWordsChange}
      />
    </div>
  );
};

export default NumberWordsConverterComponent;
