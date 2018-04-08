var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var bcrypt=require('bcrypt-nodejs')
var Userdata=new Schema({
	email:{
		type:String,
		require:true

	},
	password:{
		type:String,
		require:true
	}
	// confpassword:{
	// 	type:String,
	// 	require:true
	// },
	// name:{
	// 	type:String,
	// 	require:true
	// },
	// email:{
	// 	type:String,
	// 	require:true
	// }
});
Userdata.methods.encryptPassword=function(password)	{
	return bcrypt.hashSync(password,bcrypt.genSaltSync(5),null);
};
Userdata.methods.validPassword=function(password){
	return bcrypt.compareSync(password,this.password);
};
var Data=module.exports=mongoose.model('Datarecord',Userdata);