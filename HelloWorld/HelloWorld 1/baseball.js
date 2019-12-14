//baseball game ....

var mybody = document.body;
var myword = document.createElement('div');
var myform = document.createElement('form');
var myinput = document.createElement('input');
var mybutton = document.createElement('button');
var myresult = document.createElement('div');


mybutton.textContent = "PressButton";

var endWord;
var saveWord;


var select;
var selectArray = [];


// Method Two ...

selectArray = shuffle_method2();

function shuffle_method2() {
    var seedArray = [0,1,2,3,4,5,6,7,8,9];
    var selectArray = [];

    for (let i = 0; i < 4; i++) {

        select = seedArray.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        selectArray.unshift(select);

    }


    return selectArray;
}

// Method One
//
// for(let i=0; i<4; i++) {
//
//     shuffle(seedArray);
//     selectArray.push(seedArray.pop());
// }

endWord = selectArray.toString();
myresult.textContent = endWord;
myword.textContent = endWord;

console.log(selectArray);

myform.append(myword);
myform.append(myinput);
myform.append(mybutton);
myform.append(myresult);


mybody.append(myform);

myform.addEventListener('submit',function (event) {
    var result;

    event.preventDefault();

    result = myinput.value.split('');
    console.log(myinput.value,'result :', result,'selectArray:', selectArray);

    if (result === selectArray ) {
        myresult.textContent = 'Home Run';
        selectArray = shuffle_method2();
        myword.textContent = selectArray.join('');
        console.log(selectArray);
    } else {
        myinput.value = ''
    }
    console.log(result);

    myinput.focus();
});

function shuffle(o) {
    o.sort(function () {
        return 0.5-Math.random();
    });
    return o;
}

function iif(condition, ifTrue, ifFalse) {

    if (condition) {
        return ifTrue;
    } else {
        return ifFalse;
    }

}
