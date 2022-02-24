const borkfuscator = require('borkfuscator');

if (3 > process.argv.length) {
	console.log("cannot bork: nothing to bork.");
	process.exit(1);
}

console.log(borkfuscator(process.argv[2]));