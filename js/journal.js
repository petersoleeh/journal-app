function Entry() {
}

// Vowel counter
Entry.prototype.vowelCount = function (sentence) {
	var vowelList = "aeiouAEIOU";
	var vowelCounter= 0;
	for(var x = 0; x <sentence.length ; x++) {
		if (vowelList.indexOf(sentence[x]) !== -1) {
			vowelCounter += 1;
		}
	}
	return vowelCounter;
}

// Consonant counter
 Entry.prototype.consonantCount = function(sentence) {
	var consonantList = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
	var consonantCounter = 0;
	for(var x = 0; x <sentence.length ; x++) {
		if (consonantList.indexOf(sentence[x]) !== -1) {
			consonantCounter += 1;
		}
	}
	return consonantCounter;
}

// Get first eight words of the body
Entry.prototype.getTeaser = function (body) {
  return body.split(" ").slice(0, 8).join(" ")
};

exports.entryModule = Entry;
