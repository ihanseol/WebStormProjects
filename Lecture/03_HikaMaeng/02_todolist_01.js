var tasks = [];

var STATE_P = '진행';
var STATE_C = '완료';


var addTask = function() { 
    var id=0;
    return function(title) {
        tasks.push( {
            title : title,
            id : id++,
            state : STATE_P
        });
        render();
    };
}();

var removeTask = function(id) {
    for(var i=0; i < tasks.length ;i++) {
        if (tasks[i].id === id ) {
            tasks.splice(i,1);
        }
    }
    render();
};

var updateState = function(id) {
    
    var toggle_state = function(id) {
        if (tasks[id].state === STATE_P) {
            tasks[id].state = STATE_C;
        } else {
            tasks[id].state = STATE_P;
        }
    };

    for(var i=0; i<tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks.state = toggle_state(id);
        }
    }

    render();
};

var render = function() {

    for(var i=0; i<tasks.length; i++) {
        console.log(' ------------------------------------- ')
        console.log('id    : ' + tasks[i].id );
        console.log('title : ' + tasks[i].title);
        console.log('state : ' + tasks[i].state);
        console.log(' ------------------------------------- ')
    }
};

