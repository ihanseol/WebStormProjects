//gugudan.js

var mybody = document.body;
var myword = document.createElement('div');
var myform = document.createElement('form');
var myinput = document.createElement('input');
myinput.type = 'number';
var mybutton = document.createElement('button');
var myresult = document.createElement('div');


mybutton.textContent = "PressButton";


var n1 =  Math.floor(Math.random()*9);
var n2 = Math.floor(Math.random()*9);

//n1 = n1 === 0 ? 1 : n1;
//n2 = n2 === 0 ? 1 : n2;

n1 = iif(n1===0,1,n1);
n2 = iif(n2===0,1,n2);

var endWord = n1 + " * " + n2;
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

    console.log(myinput.value)

    if (Number(myinput.value) === n1*n2) {
        myresult.textContent = 'ok';
        n1 =  Math.floor(Math.random()*9);
        n2 = Math.floor(Math.random()*9);
        myword.textContent = n1 + " * " + n2;
    } else {
        myinput.value='';
        myresult.textContent = 'no ok';
    }
    myinput.focus();
});

function iif(condition, ifTrue, ifFalse) {

    if (condition) {
        return ifTrue;
    } else {
        return ifFalse;
    }

}
