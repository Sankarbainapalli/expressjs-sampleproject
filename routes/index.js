// var express = require('express');
//  var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });




var express=require('express');
var Data=require('../model/User.js');
 var student=require('../model/userLogin.js');
 var passport=require('../config/passport.js');
 var bodyparser=require('body-parser');
 var mongoose=require('mongoose');
var url='mongodb://localhost:27017/User';
mongoose.connect(url);

var router=express.Router();
var csrf=require('csurf');
var csrfPtrotect=csrf();
router.use(csrfPtrotect);
var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;


router.use(bodyparser.json());
router.use(bodyparser.urlencoded({
	extended:true
}));

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',success:req.session.sucess,errors:req.session.errors });
 req.session.errors=null; 
});    

router.get('/home',function(req,res){
	res.render('user/home');
});


router.get('/about',function(req,res){
	res.render('user/about');
});

router.get('/contact',function(req,res){
	res.render('user/contact');
});


router.get('/user/profile',function(req,res){
	res.render('user/profile',{csrfToken:req.csrfToken()});

});
	

router.get('/user/signin',function(req,res,next){

res.render('user/signin',{csrfToken:req.csrfToken()});
});

router.get('/user/signup',function(req,res,next){

	
	res.render('user/signup',{csrfToken:req.csrfToken()});

});

///////////////traversery media/////////////////////

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//    student.getUserByUsername(Username,function(err,user){
//    	if (err) throw error
//    	if (!user){
//    		return done(null,false,{messge:'user not know'});
//    	}
//    	 student.getUserByPassword(Password,function(err,user){
//    	if (err) throw error
//    	if (!user){
//    		return done(null,false,{messge:'password not know'});
//    	}
// 	   	})

//    })
//   }
// ));


// passport.serializeUser(function(user,done){
// 	done(null,user.id);
// })

// passport.deserializeUser(function(id,done){
// 	student.getUserById(id,function(err,user){
// 		done(err,user);
// 	});
// });

router.post('/signinpost',passport.authenticate('local.signin',{
  
 successRedirect:'/user/profile',
 failureRedirect:'/user/signin',	
 failureFlash:true
}));
  
     /////////////traversery media///////////////

// router.post('/signinpost',function(req,res,next){


// var Username=req.body.Username;
// var Password=req.body.Password;	

	
// 		req.check('Username','invalid username').notEmpty();
// 	req.check('Password','invalid Password').notEmpty();
// 	var errors=req.validationErrors();
// 	if(errors){
// 		// req.session.errors=errors;
// 		// req.session.success=false;
// 		 res.render('user/signin',{
// 		errors:errors
// 		});
	
// 	}
// });

// router.post('/signin',function(req,res){
// 	var Username=req.body.Username;
// 	var Password=req.body.Password;

// 	 student.findOne({Username:Username,Password:Password}, function(err,user){
// 	 	if (err){
// 	 		console.log('cant signin');
// 	 	}
// 	 	if(!user){
// 	 		console.log('cont find user');
// 	 	}
// 	 	 console.log("succesull login");
// 	 });
// });
  /////////////////signin close///////		




////////////Find the records from databse/////////

// router.get('/getdata/:id', function(req, res) {
// 	saidulu.find({_id:req.params.id},function(err,doc){
// 		if (err) {
// 			console.log(err);
// 		}
// 		// res.render({items:doc});
// 		 res.send({items:doc});
// 		 res.json(doc);
// 		 // console.log({items:doc})
//     });
//  });



//////////insert into records//////////////////////


router.post('/userpost',
	// function(req,res){


						
    passport.authenticate('local.signup',{
	successRedirect:'/user/signin',
	failureRedirect:'/user/signup',		
	failureFlash:true
						
						
	}));
						// function(req,res){
						// 	// res.redirect('/');
						// 	console.log("inserted data");
						// 	console.log(req.body);	
						// });
						
	// var item=new student();
	// item.Username=req.body.Username;
	// item.Password=req.body.Password;
	// console.log(req.body);	
 //     console.log(item);
	// item.save(function(err,data){
	// 	if (err) throw err;
	//    res.render('user/signin',{csrfToken:req.csrfToken()});
	// 	console.log('successfully inserted records');

	// });		
// 

// router.post('/insert', function(req, res) {
// 	var item=new saidulu();
// 	item.FirstName=req.body.FirstName;
// 	item.LastName=req.body.LastName;
// 	item.Email=req.body.Email;
// 	console.log(req.body);	
//      console.log(item);
// 	  item.save(function(err,data){
// 	    if (err) throw err;

// 	  		 res.send(data);
// 	  		console.log('successfully inserted data');
	  	 

// 	 });
// 	});
////////////End here///////////////////


///////////updating the records////////////////

// router.put('/update/:id',function(req,res){
// 	// var id=req.params.id;
// 	// saidulu.findById({_id:req.params.id},function(err,data){
// 	// 	if(err) throw err;
// 	// 	console.log(req.body.FirstName);
// 	// 	data.FirstName=req.body.FirstName;
// 	// 	data.save(function(err,Data){
// 	// 		if (err) throw err;
// 	// 		res.send(Data);
// 	// 	});
// 	// });

// 	saidulu.findOneAndUpdate({_id:req.params.id}, { $set: {FirstName:req.body.FirstName}}, { upsert: true }, function (err, data) {
// if (err) {
// 	console.log('error happend');
// }else{
// 	console.log(req.body.FirstName);
// 	console.log(data);
// 	res.status(204);
// }
// });

// });
////////////End here/////////////////

 /////////delete the records///////////////
 // router.delete('/remove/:id',function(req,res){
 // 	saidulu.findOneAndRemove({_id:req.params.id},function(err,data){
 //      if(err) throw err;
 //      res.send(data);

 //      console.log("delete the record successfully"); 	
      

 // 	});
 // });
///////////////////////////////End here///////////

  





module.exports = router;
