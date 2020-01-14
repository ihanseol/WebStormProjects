{
    var numberOne_1 = Math.ceil(Math.random() * 9);
    var numberTwo_1 = Math.ceil(Math.random() * 9);
    var result_1 = numberOne_1 * numberTwo_1;
    var word_1 = document.createElement('div');
    word_1.textContent = String(numberOne_1) + '곱하기' + String(numberTwo_1) + '는?';
    document.body.append(word_1);
    var form = document.createElement('form');
    document.body.append(form);
    var input_1 = document.createElement('input');
    input_1.type = 'number';
    form.append(input_1);
    var button = document.createElement('button');
    button.textContent = '입력!';
    form.append(button);
    var resultDiv_1 = document.createElement('div');
    document.body.append(resultDiv_1);
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (result_1 === Number(input_1.value)) {
            resultDiv_1.textContent = '딩동댕';
            numberOne_1 = Math.ceil(Math.random() * 9);
            numberTwo_1 = Math.ceil(Math.random() * 9);
            result_1 = numberOne_1 * numberTwo_1;
            word_1.textContent = String(numberOne_1) + '곱하기' + String(numberTwo_1) + '는?';
            input_1.value = '';
            input_1.focus();
        }
        else {
            resultDiv_1.textContent = '땡';
            input_1.value = '';
            input_1.focus();
        }
    });
}
