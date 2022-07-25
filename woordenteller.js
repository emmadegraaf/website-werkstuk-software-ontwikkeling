function getWordCounts(nodeList) {
    var wordCount = 0;
    for ( var i = 0; i < nodeList.length; i++ ) {
        wordCount += nodeList[i].textContent.trim().split(' ').length;
    }
    return wordCount;
}

document.querySelector('woordenteller').textContent = getWordCounts(document.querySelectorAll('p'));