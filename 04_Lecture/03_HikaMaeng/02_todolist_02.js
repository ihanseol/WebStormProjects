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
    var isRemoved = false;

    for(var i=0; i < tasks.length ;i++) {
        if (tasks[i].id === id ) {
            tasks.splice(i,1);
            isRemoved = true;
            break;
        }
    }

    if (!isRemoved) {
        console.log('invalid id ...');
    } else {
        render();
    }
};

var changeState = function(id, state) {
    var ID=false;
    var STATE;

    // id validation ...
    
    for(var i=0; i<tasks.length; i++ ) {
        if (tasks[i].id === id) {
            ID=id;
            break;
        }
    }

    if (ID===false) {
        warning(' changeState : invalid id : ' + id);
        return;
    }

    // state validation ...
    if (state !== STATE_P && state !== STATE_C) {
        warning(' changeState : invalud state : ' + state);
        return;
    } else {
        STATE = state;
    }
    
    // SHIELD Pattern -------------------------------------------------


    var toggle_state = function(id) {
        if (tasks[id].state === STATE_P) {
            tasks[id].state = STATE_C;
        } else {
            tasks[id].state = STATE_P;
        }
    };


    for(var i=0; i<tasks.length; i++) {
        if (tasks[i].id === ID) {
            tasks.state = toggle_state(ID);
        }
    }

    render();
};


// var warning = function(message) {
//     console.log(message);
// } 

var warning = console.log;

var render = function() {

    console.log('Progress : ');

    for(var i=0; i<tasks.length; i++) {
        if (tasks[i].state === STATE_P) {
            console.log(' ------------------------------------- ');
            console.log('id    : ' + tasks[i].id );
            console.log('title : ' + tasks[i].title);
            console.log('state : ' + tasks[i].state);
            console.log(' ------------------------------------- ');
        }
    }

    console.log('Complete : ');

    for(var i=0; i<tasks.length; i++) {
        if (tasks[i].state === STATE_C) {
            console.log(' ------------------------------------- ');
            console.log('id    : ' + tasks[i].id );
            console.log('title : ' + tasks[i].title);
            console.log('state : ' + tasks[i].state);
            console.log(' ------------------------------------- ');
        }
    }

    console.log(' 추가 : addTask(todo contents)');
    console.log(' 삭제 : removeTask(id) ');
    console.log(' 상태변경 : changeState(id, state)');

};

