var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var userLogin=new Schema({

    Username:{
      type:String,
      unique:true

    },
    Password:{
    	type:String,
    	unique:true
    }


});

var student=mongoose.model('userdata',userLogin);
module.exports=student;

// module.exports.getUserByUsername=function(Usernme,callback){
// 	var query={Usernme:Username};
// 	student.findOne(query,callback);
// }
// module.exports.getUserById=function(id,callback){

// 	student.findById(id,callback);
// }
// module.exports.getUserByPassword=function(Password,callback){
// 	var query={Password:Password};
// 	student.findOne(query,callback);
// }