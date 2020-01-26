var eachDan = function(n) {
    for (var i=1;i<=9;i++) {
        console.log(n,'x',i,'=',n*i);
    }
};

var printDan = function(dan)  {
    
    for(var i=0; i < dan.length; i++) {
        eachDan(dan[i]);
    } 

};

var rangeDan = function(min, max) {
    var arr = [];
    for(var i=min; i<=max; i++) arr.push(i);
    
    printDan(arr);
};


printDan([1,3,9]);

console.log('---------------------------');

rangeDan(2,5);


console.log('---------------------------');