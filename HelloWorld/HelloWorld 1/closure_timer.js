//https://youtu.be/-jysK0nlz7A
//closure explain with timer function
//function inside function
//2020/1/14 Tuesday


const timer1 = document.createElement('div');
const timer2 = document.createElement('div');


document.body.append(timer1);
document.body.append(timer2);

makeTimer(timer1, 1500);
makeTimer(timer2, 1000);

function makeTimer(elt, wait) {

    var counter = 0;

    setInterval(timeIt, wait);

    function timeIt() {
        elt.textContent = counter;
        counter++;
        //document.body.append(elt);
    }
}






