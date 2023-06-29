var exp = require("express");
var bp = require("body-parser");

var app = exp();
app.use(bp.urlencoded({ extended: true }));

app.get('/getform', function (req, res) {
    res.sendFile(__dirname + "/form.html");
})

app.post('/getDataTable', function (req, res) {
    console.log("IN get Data_table")

    // var name = req.query.name;
    var name = req.body.name;
    console.log(name);
    var date = req.body.bdate;
    console.log(date.toString());
    var qualification = req.body.qualification;
    console.log(qualification);
    var email = req.body.email;
    console.log(email);
    
    str=name + " " + date + "" + email + "" + qualification;
    console.log(name + " " + date + "" + email + "" + qualification);
    // res.write(str);
    var str="<table border=1>";
    str+="<th colspan=2>INFO</th>"
    str+="<tr><td>Name</td><td>"+name+"</td></tr>"
    str+="<tr><td>Birth Date</td><td>"+date+"</td></tr>"
    str+="<tr><td>Email</td><td>"+email+"</td></tr>"
    str+="<tr><td>Qualification</td><td>"+qualification+"</td></tr>"
    str+="</table>"
    res.write(str);
    res.end();
});
app.listen(9000, function () {
    console.log("listioning on port: 9000");
})