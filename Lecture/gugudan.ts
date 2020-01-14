let numberOne = Math.ceil(Math.random() * 9);
let numberTwo = Math.ceil(Math.random() * 9);


let result = numberOne * numberTwo;

const word = document.createElement('div');
// word.textContent = ` ${numberOne} * ${numberTwo} = ${result}`;
word.textContent = '  ' + String(numberOne) + ' multiply ' + String(numberTwo) + ' = ? ';


document.body.append(word);

console.log(' hello type script ....');


