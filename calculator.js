const express=require('express');
const bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.urlencoded({extended:true}));
// app.get("/",(req,res)=>{
//     res.send("asd");
// });

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/view/cal.html")
})

// localhost:3000/main 브라우저에 res.sendFile() 내부의 파일이 띄워진다.
app.get('/view', function(req,res) {
    res.sendFile(__dirname + "/view/cal.html")
})

app.post("/",(req,res)=>{
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    res.send("입력한 두 수의 합 : "+result);
});

app.listen(7777);
