//build arrays for the pieces that make up a numeric word representation

//store the first 20 numeric word representations in a ones array. zeroes are silent.
const ones: string[] = [
	'', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
	'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

//store the tens word representations starting at 20 in a tens array.
const tens: string[] = [
	'', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

//store the numeric word representations for each power of 1000 in a scales array
const scales: string[] = ['', 'thousand', 'million', 'billion'];

const convertToWords = (num: number): string => {
	// Start building the word representation
	let words = '';

	// If the number is negative, add 'negative' to the words and make the number positive
	if (num < 0) {
		words += 'negative ';
		num = Math.abs(num);
	}

	// If the number is less than 20, use the ones array to get the word representation
	if (num < 20) {
		words += ones[num];
	}
	// If the number is between 20 and 99, use the tens array and ones array to get the word representation
	else if (num < 100) {
		words += tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ' ' : '') + ones[num % 10];
	}
	// If the number is between 100 and 999, use the ones array for the hundreds place,
	// and recursively call convertToWords for the remainder (tens and ones places)
	else if (num < 1000) {
		words += ones[Math.floor(num / 100)] + ' hundred' + (num % 100 !== 0 ? ' ' : '') + convertToWords(num % 100);
	}
	// If the number is 1000 or greater, iterate through the scales array (thousand, million, billion) 
	// and use recursion to build the word representation for each scale
	else {
		for (let i = scales.length - 1; i >= 0; i--) {
			const scaleValue = Math.pow(1000, i);
			if (num >= scaleValue) {
				words += convertToWords(Math.floor(num / scaleValue)) + ' ' + scales[i] + (num % scaleValue !== 0 ? ' ' : '');
				num %= scaleValue;
			}
		}
	}

	// Return the final word representation with any leading/trailing spaces removed
	return words.trim();
}

export function numberToWords(num: number): string {
	// Evaluate 0 first because it's not silent
	if (num === 0) {
		return 'zero';
	}

	return convertToWords(num);
}

export const wordsToNumber = (words: string): string => {
  // Split the input string into an array of words and remove punctuation
  const wordList = words.toLowerCase().replace(/[\.,]/g, '').split(/[\s-]+/);
  // Check if the input contains the word 'negative'
  const negative = wordList.includes('negative');
  // Filter out the word 'negative' from the word list
  const filteredWords = wordList.filter(word => word !== 'negative');

  // Initialize variables for keeping track of the total and current value
  let total = 0;
  let currentValue = 0;

  // Iterate through the filtered words
  filteredWords.forEach((word, index) => {
    // If the current word is in the ones array, add its value to currentValue
    if (ones.indexOf(word) > -1) {
      currentValue += ones.indexOf(word);
    } 
    // If the current word is in the tens array, add its value times 10 to currentValue
    else if (tens.indexOf(word) > -1) {
      currentValue += tens.indexOf(word) * 10;
    } 
    // If the current word is 'hundred', multiply currentValue by 100
    else if (word === 'hundred') {
      currentValue *= 100;
    } 
    // If the current word is in the scales array, multiply currentValue by the corresponding scale value
    // and add the result to the total, then reset currentValue
    else if (scales.indexOf(word) > -1) {
      currentValue *= Math.pow(1000, scales.indexOf(word));
      total += currentValue;
      currentValue = 0;
    }
  });

  // Add the remaining currentValue to the total
  total += currentValue;

  // If the input was negative, negate the total
  if (negative) {
    total = -total;
  }

  // Return the total as a formatted string
  return total.toLocaleString();
}
