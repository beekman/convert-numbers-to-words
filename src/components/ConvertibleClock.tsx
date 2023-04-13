import React, { useState, useEffect } from 'react';
import { numberToWords, wordsToNumber } from '../utils/numberConverter';

const RealTimeClock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [words, setWords] = useState<string>('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourText = hours > 0 ? numberToWords(hours) + ' hour' + (hours === 1 ? '' : 's') : '';
    const minuteText = minutes > 0 ? numberToWords(minutes) + ' minute' + (minutes === 1 ? '' : 's') : '';
    const secondText = seconds > 0 ? numberToWords(seconds) + ' second' + (seconds === 1 ? '' : 's') : '';

    setWords([hourText, minuteText, secondText].filter(part => part !== '').join(' '));
  }, [time]);

  const onWordsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWords(event.target.value);
    const numericTime = wordsToNumber(event.target.value);
    setTime(new Date(numericTime));
  };

  return (
    <section>
			<h2>Convertible Clock</h2>
      <div>
        <label>Arabic Number: </label>
        <input type="text" value={time.toLocaleTimeString()} readOnly />
      </div>
      <div>
        <label>English Words: </label>
        <input type="text" value={words} onChange={onWordsChange} />
      </div>
    </section>
  );
};

export default RealTimeClock;