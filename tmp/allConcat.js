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
