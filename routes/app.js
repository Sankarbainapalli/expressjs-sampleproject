var mongoose=require('mongoose');

var Schema=mongoose.Schema;
var userData=new Schema({

 	FirstName:{type:String,require:true},
 	LastName:{type:String,require:true},
 	Email:{type:String,require:true}
 	
 });
module.exports = mongoose.model('krishna',userData);
 // var Test=mongoose.model('students',userData);
 // module.exports=Test;