// primitive --- value type - Numberm String, Boolean, Symbol, undefined, null
// deritive --- reference type - object, function, array




let x = 10;
let y = x;

x = 20


// completely seperate each other



let x = { value : 10 };
let y = x;

x.value = 20



let number = 10;

function increase(number) {
    number++;
}

increase(obj);
console.log(obj);

