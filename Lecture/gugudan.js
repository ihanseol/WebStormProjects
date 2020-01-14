var numberOne = Math.ceil(Math.random() * 9);
var numberTwo = Math.ceil(Math.random() * 9);
var result = numberOne * numberTwo;
var word = document.createElement('div');
// word.textContent = ` ${numberOne} * ${numberTwo} = ${result}`;
word.textContent = '  ' + String(numberOne) + ' multiply ' + String(numberTwo) + ' = ? ';
document.body.append(word);
console.log(' hello type script ....');
