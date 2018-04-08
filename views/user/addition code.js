

/////validation for each loop////////////////

{{# if success}}
		<section class="success">
		<h1>suceeful validation</h1>
		</section>
		{{ else }}
		{{# if errors}}
		<section class="errors">
		<ul>
		{{# each errors}}
		<li>{{ this.msg }}</li>
		{{/each}}
		</ul>
		
		</section>
		{{/if}}		
{{/if}}

//////////////////end foreach loop///////////////////




/////////////////////////validation////////////////////////


var Username=req.body.Username;
var Password=req.body.Password;	

	
		req.check('Username','invalid username').notEmpty();
	req.check('Password','invalid Password').notEmpty();
	var errors=req.validationErrors();
	if(errors){
		// req.session.errors=errors;
		// req.session.success=false;
		 res.render('user/signup',{
		errors:errors
		});
	
	}

///////////////////////validation end /////////////////////////////////////




	// else{
		// req.session.success=true;
		// console.log('yes');
	// 	var newuser=new student({						
	// 	Username:Username,
	// 	Password:Password
	// });
	// 	student.createUser(newuser,function(err,data){
	// 		if(err) throw err;
	// 		console.log(data);
	// 	})
	// 	res.redirect('/user/signin');
	// }
	