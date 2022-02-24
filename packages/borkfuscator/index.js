function borkfuscator(inputText) {
	const splitInput = inputText.split("");
	let borkBuffer = "";
	let borked = false;

	const unborked = [".", "?", "!", ","];

	for (let i = 0; i < splitInput.length; i++) {
		if (unborked.includes(splitInput[i])) {
			borkBuffer += splitInput[i];
			borked = false;
		}
		else if (splitInput[i] == " ") {
			borkBuffer += splitInput[i];
			borked = false;
		}
		else {
			if (borked) {
				continue;
			}

			borkBuffer += "bork";
			borked = true;
		}
	}

	return borkBuffer;
}

module.exports = borkfuscator;