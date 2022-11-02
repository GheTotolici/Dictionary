const words = [];
function inputWord() {
    var currWord = document.getElementById("wordToAdd").value;
    if (!words.includes(currWord)) {
        words.push(currWord);
    }
    document.getElementById("wordToAdd").value = "";
}
function searchingWord() {
    var wordToSearch = document.getElementById("searchedWord").value;
    if (!(words.includes(wordToSearch))) {
        alert("The word " + wordToSearch +  " is not in the Dictionary");
    } else {
        alert("The word " + wordToSearch + " is in the Dictionary");
    }
    document.getElementById("searchedWord").value = "";
}
function reset() {
    document.location.reload();
}
