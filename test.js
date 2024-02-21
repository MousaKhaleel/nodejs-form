console.log('test');

const express= require('express');

var app=express();

app.get('/',function(req,res)
{
    res.send('server started');
});
// ////////////////
app.get('/form',function(req,res){
    res.sendFile(__dirname+'/form.html');
});
// ////////////

var bodyParser=require('body-parser');
var urlEncoded=bodyParser.urlencoded({extended:false});

app.post('/submit',urlEncoded,function(req,res){
    res.send('the data is'+req.body.email+req.body.password+req.body.search)
});

var server=app.listen(7000,function(){
    var host=server.address().address;
    var port=server.address().port;
});