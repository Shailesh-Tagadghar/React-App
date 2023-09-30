var express = require("express");
var app = express();

app.get("/", (req,res)=>{
    res.send("I am from node app...")
});

//sqr webservice //receive it from query param // print its square
app.get("/sqr", (req,res)=>{
    // res.send(req.query)
    // res.send(`Square of 5 is 25`)
    // var x= 7;
    console.log(req.query);

    // var params = req.query;
    var x = req.query.num;
    res.send(`Squre of ${x} is ${x * x}`);
});


//add webservice //receive 2 query param // return additionof it in json format
app.get("/add", (req,res)=>{
    var x = parseInt(req.query.num1);
    var y = parseInt(req.query.num2);
    var z = x + y;
    // res.send(`add of ${x} + ${y} is ${z}`);
    var result = {
        "status" : true,
        "addition" : x + y
    }
    res.send(result);
});

app.listen(8089, () => {
    console.log(`listening to port 8089`);
});