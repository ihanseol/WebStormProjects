function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');

    }
}



const circle = new Circle(10);


circle.location = { x : 1};
circle['circle'] = { x : 1};



const propertyName = 'location';
circle[propertyName] = { x: 1};
circle['center location']
circle['center-location']

// in this case bracket notation ...


delete circle.location;
delete circle['location'];






