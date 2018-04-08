var express=require('express');

 var saidulu=require('../model/schema.js');
 var bodyparser=require('body-parser');
var mongoose=require('mongoose');
var url='mongodb://localhost:27017/senapati';
mongoose.connect(url);
var app=express.Router();


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended:true
}));


app.get('/home',function(req,res){
	res.send('Home page');
});

////////////Find the records from databse/////////

app.get('crud/getdata/:id', function(req, res) {
	saidulu.find({_id:req.params.id}).then(function(err,doc){
		if (err) {
			console.log(err);
		}
		// res.render({items:doc});
		 res.send({items:doc});
		 res.json(doc);
		 // console.log({items:doc})
    });
 });



//////////insert into records//////////////////////

app.post('/insert/records', function(req, res) {
	var item=new saidulu();
	item.name=req.body.name;
	item.email=req.body.email;
	item.password=req.body.password;
		// console.log(req.body);	
    // console.log(item);
	  item.save(function(err,ite){
	    if (err) throw err;
	  		 res.send(ite);
	  		console.log('successfully inserted data');
	  	 

	 });
	});
////////////End here///////////////////


///////////updating the records////////////////

app.put('/update/:id',function(req,res){
	// var id=req.params.id;
	// saidulu.findById({_id:req.params.id},function(err,data){
	// 	if(err) throw err;
	// 	console.log(req.body.FirstName);
	// 	data.FirstName=req.body.FirstName;
	// 	data.save(function(err,Data){
	// 		if (err) throw err;
	// 		res.send(Data);
	// 	});
	// });

	saidulu.findByIdAndUpdate({_id:req.params.id}, { $set: {name:req.body.name}}, { upsert: true }, function (err, data) {
if (err) {
	console.log('error happend');
}else{
	console.log(data);
	res.status(204);
}
});

});
////////////End here/////////////////

 /////////delete the records///////////////
 app.delete('remove1/:id',function(req,res){
 	saidulu.findOneAndRemove({_id:req.params.id},function(err,data){
      if(err) throw err;
      console.log("delete the data");
    
      res.send(data); 		

 	});
 });
///////////////////////////////End here///////////

  


app.get('/about',function(req,res){
	res.send('about page');
});

app.get('/contact',function(req,res){
	res.send('Contact page');
});
// app.listen(8667,function(){
// 	console.log('server started at port 8667');
// });


module.exports = app;