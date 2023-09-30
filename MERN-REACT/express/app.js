var express = require("express");
var app = express();

app.get("/",(req,res)=>{
    res.send("Hello form express")
})

// app.get("/mycalc",(req,res)=>{
//     res.send("My Calc Get")
// })

app.get("/mycalc",(req,res)=>{
    console.log(req.query);
    
    var params = req.query;

    var x = params.num1;
    var y = params.num2;
    var z = x + y;

    res.send(`${x} + ${y} = ${z}`);
})

// app.post("/mycalc",(req,res)=>{
//     res.send("My Calc Post")
// })

app.use(express.json()) // to get data into json format

app.post("/mycalc",(req,res)=>{
    // console.log(req.body);
    // res.send(req.body)
    // var param = req.body;
    var a = req.body.num1;
    var b = req.body.num2;
    var c = a - b;

    // console.log();(`${a} - ${b} = ${c}`)
    res.send(`${a} - ${b} = ${c}`)
})

app.put("/mycalc",(req,res)=>{
    res.send("My Calc Put")
})

app.delete("/mycalc",(req,res)=>{
    res.send("My Calc Delete")
})

app.listen(8989,()=>{
    console.log(`Listening at port 8989`);
})