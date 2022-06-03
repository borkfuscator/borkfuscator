function borkfuscator(inputText, word) {
	const _word = typeof word != "undefined" ? word : "bork";
	const splitInput = inputText.split("");
	let borkBuffer = "";
	let borked = false;

	const unborked = "~!@#$%^&*()_+`-={}[]|\\;:'\",./<>?".split("");

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

			borkBuffer += _word;
			borked = true;
		}
	}

	return borkBuffer;
}

module.exports = borkfuscator;