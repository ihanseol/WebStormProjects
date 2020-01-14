var name = "the window";

var object = {
    name : "My Object",

    getNameFunc : function() {
        return function() {
            return this.name;
        };
    },

    getName2Func : function() { return this.name; },

    getName3Func : function() {
        var that = this;

        return function() {
            return that.name;
        };
    }
};


console.log(object.name);
console.log(object.getNameFunc());
console.log(object.getNameFunc()());

console.log(object);
console.log(object.getName2Func());

console.log('--------------------------');
console.log(object.getName3Func()());


//--------------------------------------------------------------



function outputNumbers(count) {

    (
     function() {
         for(var i=0; i <count; i++) {
             alert(i);
         }
     }   
    )();

    alert(i); //error occured var is function scope  so i is dissappeared ....
}


// outputNumbers(3);
// in here error occurred then execution is stopped ..
// so next function will now run ...
// next function iife --- immediatly invoked function expressions


(
    function() {
        var now = new Date();
        if (now.getMonth() == 0 && now.getDate() == 14) {
            alert('Happy New Year');
        }
    }

)();


console.log(now);



