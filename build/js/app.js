(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

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
    // Create instance of Entry
    var instanceOfEntry = new Entry();
    // Store vowels in the title
    var vowelsTitle = instanceOfEntry.vowelCount(title);
    // Store consonants in the title
    var consonantsTitle = instanceOfEntry.consonantCount(title);
    // Store vowels in the body
    var vowelsBody = instanceOfEntry.vowelCount(body);
    // Store consonants in the body
    var consonantsBody = instanceOfEntry.consonantCount(body);
    // Get first 8 words of the body
    var firstEightWords = instanceOfEntry.getTeaser(body);

    // Test
    // console.log(titleNumberWords);
    // console.log(bodyNumberWords);
    // console.log(totalEntryNumber);
    // console.log(vowelCount(title));
    // console.log(firstEightWords);

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

},{"./../js/journal.js":1}]},{},[2]);
