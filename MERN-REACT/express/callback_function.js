//callback function

function add(x,y){
    console.log(x+y);
}

// add(5,6)
// add(4,5)

function calc (a,b,op){
    op(a,b);
}

calc(2,3,add)