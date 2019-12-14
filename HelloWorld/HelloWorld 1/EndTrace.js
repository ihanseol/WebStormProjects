
var endWord = '끋말잇기';
var saveWord;

while(true) {

    saveWord = prompt(endWord);
    if (endWord[endWord.length-1] === saveWord[0]) {
            endWord = saveWord;
    } else if (saveWord === 'null' ) {
        break;
    }
    else {
    }

}


