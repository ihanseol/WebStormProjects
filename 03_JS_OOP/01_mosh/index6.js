
// Constructor Function
// private variable ... and private function ....
// example of Abstraction ...


function Circle(radius) {

    this.radius = radius;
    
    let color = 'red';
    let defaultlocation = { x:0, y:0};


    let computeOptimumLocation = function(factor) {
        //
        //
    }


    this.draw = function() {
        let x,y;

        computeOptimumLocation(0.1);
        // this.radius
        // defaultlocation

        

        console.log('draw');
    };
}


const circle = new Circle(10);
circle.draw();


