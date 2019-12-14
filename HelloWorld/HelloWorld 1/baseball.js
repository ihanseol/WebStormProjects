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
    var strike = 0;
    var ball = 0;

    event.preventDefault();

    result = myinput.value.split('');
    result = result.map(Number);
    console.log(myinput.value,'result :', result,'selectArray:', selectArray);

    //if (result.equals(selectArray)) {
   if (myinput.value === selectArray.join('')) {
        myresult.textContent = 'Home Run';
        selectArray = shuffle_method2();
        myword.textContent = selectArray.join('');
        myinput.value='';
        console.log(selectArray);
    } else {
        myinput.value = '';

        for(var i=0; i<4;i++) {
            console.log('loop i :' , i, 'result[i]:', result[i], 'sA[]:', selectArray[i], result[i] == selectArray[i]);
            if (Number(result[i]) === selectArray[i]) {
                strike = strike + 1;
            } else {
                if (selectArray.includes(Number(result[i]))) {
                    ball = ball + 1;
                }
            }
        }

        myresult.textContent = strike + ':strike  ' + ball + ':ball';
    }
    console.log(result);

    myinput.focus();
});

//for array compare ....

if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array

Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
};

// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

//end for


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
