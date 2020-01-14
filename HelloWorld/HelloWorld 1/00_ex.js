

function createFunctions() {

    var result = new Array();

    for(var i=0; i<10; i++) {
        result[i] = function() {
            return i;
        };
    }

    return result;
}

var a = createFunctions();
console.log(a);


function createFunctions1() {
    var result = new Array();

    for(var i=0; i< 10; i++) {
        result[i] = function(num) {
            return function() {
                return num;
            };
        }(i);
    }

    return result;
}



var a1 = createFunctions1();
console.log(a1);


