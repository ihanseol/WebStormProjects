
// var opassed = 1;

// var addTo = function(passed) {
//     var inner = 2;
//     return passed + inner;
// };

// var addTo1 = function() {

//     var inner=3;

//     return opassed + inner;

// };

// console.log(' hello javascript closure ...');
// console.log(addTo(3));
// console.log(addTo1());
// console.dir(addTo1());

//------------------------------------------------------------


var addTo = function(passed) {
    
    var add = function(inner) {
        return passed + inner;
    }

    return add;
} ;


var addThree = new addTo(3);
var addFour = new addTo(4);


console.log('-----------------------------');
console.log(addThree(1));
console.log(addFour(1));
console.log(addTo(3)('a'));

console.log('---------------------------');













