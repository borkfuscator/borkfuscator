function borkfuscator(inputText, word) {
	const _word = typeof word != "undefined" ? word : "bork";
	const splitInput = inputText.split("");
	let borkBuffer = "";
	let borked = false;

	const unborked = "~!@#$%^&*()_+`-={}[]|\\;:'\",./<>?".split("");
	const quotechars = "nst".split("");

	for (let i = 0; i < splitInput.length; i++) {
		if (unborked.includes(splitInput[i])) {
			borkBuffer += splitInput[i];
			borked = false;
		}
		else if (i != 0 && (quotechars.includes(splitInput[i].toLowerCase()) && splitInput[i - 1] == "'")) {
			borkBuffer += splitInput[i];
			borked = false;
		}
		else if (splitInput.length > i + 3 && (splitInput[i].toLowerCase() == "t" && splitInput[i + 1].toLowerCase() == "h" && splitInput[i + 2].toLowerCase() == "e" && splitInput[i + 3].toLowerCase() == " ")) {
			borkBuffer += "the";
			i += 2;
			borked = false;
			continue
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