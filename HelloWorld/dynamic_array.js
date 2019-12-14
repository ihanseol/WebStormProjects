function test() {
    var count = 1;
    var twoDimensionalArray = [];

    for (var i = 0; i < 2; i++) {
        var data = [];
        for (var j = 0; j < 5; j++) {
            data.push('test : ' + count);
            count++;
        }

        twoDimensionalArray.push(data);
    }

    console.log(twoDimensionalArray);
}


function TestArray() {

  var outterArray = [];

  var outterArray = $('.something').map(function () {
        //find somethingElse inside current element
      return [$(this).find('.somethingElse').map(function () {
                return $(this).text();
          
      }).get()];
  }).get();

  alert(outterArray);

  alert(outterArray[0]);

  console.log(outterArray);
}
