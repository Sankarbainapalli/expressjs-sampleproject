var express=require('express');


var app=express();	
var server=app.listen(8888,function(req,res){
	console.log('server started at port 8888');
	// res.send('hai server');

});
var mongoose=require('mongoose');
var Data=require('../model/User.js');
var url='mongodb://localhost:27017/User';
mongoose.connect(url,function(err){
	if(err) throw err;
	console.log("database created succesfuly");

});
var bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended:true
}));

app.get('/user',function(req,res){
	console.log("welocme to root page");
})

app.get('/user/home',function(req,res){

	console.log("welcome to Homepage")
});

app.post('/user/insert',function(req,res){
	var item=new Data();
	item.username=req.body.username;
	item.password=req.body.password;
	item.confpassword=req.body.confpassword;
	item.name=req.body.name;
	item.email=req.body.email;
	console.log(req.body);	
     console.log(item);
	item.save(function(err,data){
		if (err) throw err;
		res.send(data);
		console.log('successfully inserted records');
	});
});

module.exports=app;