function sortString(input) {
	let outputString = ""
	let inputArray = input.split("")

	let i = 0;
	while (i < inputArray.length) {
		let charCount = 1
		let currentChar = inputArray[i]

		while (i < inputArray.length - 1 && inputArray[i] === inputArray[i + 1]) {
			charCount++;
			i++;
		}
		if (charCount === 1) {
			outputString += currentChar
		} else {
			outputString += currentChar + charCount
		}
		i++;
	}
	return outputString
}

console.log(sortString("aaaabbbccd"))
