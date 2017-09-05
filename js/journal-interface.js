function Entry() {
}
// Vowel counter
function vowelCount(sentence) {
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
function consonantCount(sentence) {
	var consonantList = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
	var consonantCounter = 0;
	for(var x = 0; x <sentence.length ; x++) {
		if (consonantList.indexOf(sentence[x]) !== -1) {
			consonantCounter += 1;
		}
	}
	return consonantCounter;
}

//
Entry.prototype.getTeaser = function (body) {
  // if ( body.split(" ").length <= 8 ) {
  //   body
  // }
  return body.split(" ").slice(0, 8).join(" ")
};

// Clear input fields of the form
function clearFormFields() {
  $('#titleInput').val('');
  $('#bodyInput').val('');
}


$(document).ready(function () {
  $('form#journal-form').submit(function (event) {
    event.preventDefault();
    // Store title
    var title = $('#titleInput').val();
    // Store body
    var body = $('#bodyInput').val();
    // Get the length of the title by transforming it to an array
    var titleNumberWords = title.split(" ").length;
    // Get the length of the body by transforming it to an array
    var bodyNumberWords = body.split(" ").length;
    // Total length of words
    var totalEntryNumber = titleNumberWords + bodyNumberWords;
    // Store vowels in the title
    var vowelsTitle = vowelCount(title);
    // Store consonants in the title
    var consonantsTitle = consonantCount(title);
    // Store vowels in the body
    var vowelsBody = vowelCount(body);
    // Store consonants in the body
    var consonantsBody = consonantCount(body);
    // Create instance of Entry
    var instanceOfEntry = new Entry();
    // Get first 8 words of the body
    var firstEightWords = instanceOfEntry.getTeaser(body);

    // Test
    // console.log(titleNumberWords);
    // console.log(bodyNumberWords);
    // console.log(totalEntryNumber);
    // console.log(vowelCount(title));
    // console.log(firstEightWords);

    // Clear input fields of the form
    clearFormFields();
    // Number count title
    $('#vowelTitle').text(vowelsTitle);
    $('#consonantTitle').text(consonantsTitle);
    // number count body
    $('#vowelBody').text(vowelsBody);
    $('#consonantBody').text(consonantsBody);
    // NUmber count entry
    $('#totalNumber').text(totalEntryNumber);
    // First 8 words
    $('.eightWords').text(firstEightWords);
    // WHole sentences
    $('.wholeEntry').prepend('<h2>'+title+'</h2>');
    $('.wholeEntry').append('<p>'+body+'</p>');

  });

});
