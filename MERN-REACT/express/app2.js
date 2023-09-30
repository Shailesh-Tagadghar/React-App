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


app.use(express.json())

//sub webservice //receive 2 raw json // return sub of it // use post method
app.post("/sub", (req,res)=>{
    console.log(req.body);

    var x = req.body.num1;
    var y = req.body.num2;
    var z = req.body.num3;
    var result = {
        "status" : true,
        "substraction" : x - y - z
    }
    res.send(result);
});

//put request for mul
app.put("/mul", (req,res)=>{
    console.log(req.body);

    var x = req.body.num1;
    var y = req.body.num2;
    var result = {
        "status" : true,
        "multiplication" : x * y
    }
    res.send(result);
});

//delete request for division
app.delete("/div", (req,res)=>{
    console.log(req.body);

    var x = req.body.num1;
    var y = req.body.num2;
    var result = {
        "status" : true,
        "division" : x / y
    }
    res.send(result);
});


app.listen(8089, () => {
    console.log(`listening to port 8089`);
});