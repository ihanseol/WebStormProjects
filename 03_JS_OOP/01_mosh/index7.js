// Constructor Function
// private variable ... and private function ....
// example of Abstraction ...


function Circle(radius) {

    this.radius = radius;
    
    let defaultlocation = { x:0, y:0};

    this.getDefaultLocation = function() {
        return defaultlocation;

    }


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

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultlocation;
        },

        set: function(value) {
            if (!value.x || !value.y) 
                throw new Error('Invalid Location');
            
            defaultlocation = value;
        }
    });
}


const circle = new Circle(10);
circle.defaultlocation = 0; // error ....
circle.getDefaultLocation();
circle.draw();