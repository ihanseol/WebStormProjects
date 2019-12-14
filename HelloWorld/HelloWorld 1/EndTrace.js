

var mybody = document.body;
var myword = document.createElement('div');
var myform = document.createElement('form');
var myinput = document.createElement('input');
var mybutton = document.createElement('button');
var myresult = document.createElement('div');


mybutton.textContent = "PressButton";


var endWord = '끝말잇기';
var saveWord;
myresult.textContent = endWord;

myword.textContent = endWord;


myform.append(myword);
myform.append(myinput);
myform.append(mybutton);
myform.append(myresult);


mybody.append(myform);

myform.addEventListener('submit',function (event) {

    event.preventDefault();

    saveWord = myinput.value;

    if (endWord[endWord.length-1] === saveWord[0]) {
        endWord = saveWord;
        myword.textContent = endWord;
        myresult.textContent = 'OK' ;
    } else {
        myresult.textContent = 'No OK';
        myinput.value = '';
    }

    myinput.focus();
})

// //function --> call back function
// mybutton.addEventListener('click', function () {
//     saveWord = myinput.value;
//
//
//     if (endWord[endWord.length-1] === saveWord[0]) {
//         endWord = saveWord;
//         myword.textContent = endWord;
//         myresult.textContent = 'OK';
//     } else {
//         myresult.textContent = 'No OK';
//         myinput.value = '';
//         myinput.focus();
//     }
//
// });

// while(true) {
//
//     saveWord = prompt(endWord);
//     if (endWord[endWord.length-1] === saveWord[0]) {
//             endWord = saveWord;
//             myword.textContent = endWord;
//             alert('딩동댕');
//     } else if (saveWord === 'null' ) {
//         break;
//     } else {
//         alert('땡');
//     }
//
// }
//

