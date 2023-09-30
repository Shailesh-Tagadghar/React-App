//callback function

function add(x,y){
    console.log(x+y);
}

function sub(x,y){
    console.log(x-y);
}


// add(5,6)
// sub(4,5)

function calc (a,b,op){
    op(a,b);
}

calc(2,3,add)
calc(3,1,sub)

calc(5,5,function(x,y){
    console.log(x*y);
});


// division of 2 number using fat arrow with callback func

calc(25,5,(x,y)=>{
    console.log(`division is ${x/y}`);
});
