import React, { useState } from 'react';
import { numberToWords } from '../utils/convertToWords';

const ConvertibleDisplay: React.FC = () => {
  const [number, setNumber] = useState<number>(0);
  const [words, setWords] = useState<string>('zero');

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = parseInt(e.target.value, 10);
    if (!isNaN(newNumber)) {
      setNumber(newNumber);
      setWords(numberToWords(newNumber));
    }
  };

  return (
    <>
			<h2>Convertible Display</h2>
			<div>
	      <label htmlFor="number-input">Enter a number:</label>
	      <input
	        id="number-input"
	        type="number"
	        value={number}
	        onChange={handleNumberChange}
	      />
			</div>
      <label htmlFor="words-output">Number in words:</label>
      <input
        id="words-output"
        type="text"
        value={words}
        readOnly
      />
    </>
  );
};

export default ConvertibleDisplay;