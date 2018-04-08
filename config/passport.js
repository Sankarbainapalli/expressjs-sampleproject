var passport=require('passport');
var student=require('../model/userLogin.js');
var Data=require('../model/User.js');
// var config=require('../config/passport.js');
var LocalStrategy=require('passport-local').Strategy;

passport.serializeUser(function(user,done){
	done(null,user.id);
})

passport.deserializeUser(function(id,done){
	Data.findById(id,function(err,user){
		done(err,user);
	});
});

passport.use('local.signup',new LocalStrategy({
	usernameField:'email',
	passwordField:'password',
	 passReqToCallback:true
},function(req,email,password,done){
	Data.findOne({'email':email},function(err,user){
		if(err){
			return done(err);
		}
		if(user){
			return done(null,false,{message: 'user alredy find'});
		}
		var newuser=new Data();
		newuser.email=email;
		newuser.password=newuser.encryptPassword(password);
		newuser.save(function(err,result){
			if(err){
				return done(err);
			}
			return done(null,newuser);
		});
	});

}));

passport.use('local.signin',new LocalStrategy({
	usernameField:'email',
	passwordField:'password',
	passReqToCallback:true
},function(req,email,password,done){
	Data.findOne({'email':email},function(err,user){
		if(err){
			return done(err);
		}
		if(!user){
			return done(null,false,{message: 'cannot find user'});
		}
		if(!user.validPassword(password)){
			return done(null,false,{message: 'cannot find password'});
		}
		return done(null,user);
	});
}));	

module.exports=passport;				