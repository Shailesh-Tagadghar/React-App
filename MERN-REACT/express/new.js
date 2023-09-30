// console.log("Hello World !")

// a = 1;
// b = 2;
// c = a + b;

// console.log(a + " + " + b + " = " + c);

var nums = [1,2,3,4,5];
var sum = 0;

//addition of 5 numbers
for(let i = 0; i< nums.length; i++){
    sum = sum + nums[i];
}
console.log(`Addition of this is ${sum}`);


//adddition of 5 number of (square) 
for(let i = 0; i< nums.length; i++){
    console.log(`Square of Elements ${nums[i]} is ${nums[i] * nums[i]}`);
}

//addition of 5 number using map fumction (square)
arr1 = [1,2,3]
arr2 = arr1.map((x,i) => {
    console.log("i am in ...");
    return x * x;
})
console.log(arr2);