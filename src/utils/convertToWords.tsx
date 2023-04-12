//trailing zero and the smallest 19 numbers are assigned from an array.
//when 0 is the ones value and there are multiple digits, leave it blank.
const ones: string[] = [
	'', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
	'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

//the tens values that don't have special cases are evaluated second digit
const tens: string[] = [
	'', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

const scales: string[] = ['', 'thousand', 'million', 'billion'];

const convertToWords = (num: number): string => {
	let words = '';

	if (num < 0) {
		words += 'negative ';
		num = Math.abs(num);
	}

	if (num < 20) {
		words += ones[num];
	} else if (num < 100) {
		words += tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ' ' : '') + ones[num % 10];
	} else if (num < 1000) {
		words += ones[Math.floor(num / 100)] + ' hundred' + (num % 100 !== 0 ? ' ' : '') + convertToWords(num % 100);
	} else {
		for (let i = scales.length - 1; i >= 0; i--) {
			const scaleValue = Math.pow(1000, i);
			if (num >= scaleValue) {
				words += convertToWords(Math.floor(num / scaleValue)) + ' ' + scales[i] + (num % scaleValue !== 0 ? ' ' : '');
				num %= scaleValue;
			}
		}
	}

	return words.trim();
}

export function numberToWords(num: number): string {
	//first check for edge case of 0 by itself
	if (num === 0) {
		return 'zero';
	}

	return convertToWords(num);
}