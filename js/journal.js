function Entry() {

}
Entry.prototype.totalWords = function (entireEntry) {
    return entireEntry.split('').length;
};

exports.entryModule = Entry;
