var mongoose=require('mongoose');
 var Schema=mongoose.Schema;
 var records=new Schema({
 	name:{
 		type:String,
 		require:true
 	},
 	email:{
 		type:String,
 		require:true,
 		unique:true
 	},
 	password:{
 		type:String,
 		require:true,
 		unique:true
 	}
 });

 var saidulu=mongoose.model('data',records);
 module.exports=saidulu;