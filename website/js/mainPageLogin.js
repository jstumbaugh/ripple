$(function(){
	$('#loginForm').on('submit', function(event){

		event.preventDefault();
		console.log("Sup bitch!");
		var user = new Object();
		user.email = $("#loginEmail").val();
		user.password = $("#loginPassword").val();
		
		sessionStorage.name = user.email;
		sessionStorage.password = user.password;
	
			    		
			    		
			$.ajax({
				type: "POST",
			    url: 'http://private-f89294-ripple3.apiary-mock.com/users/email',
			    content: 'application/json',

			    data: JSON.stringify(user),
			    success: function(data, status, request) {

			    	if(data === "Successfully Logged In"){
			    		
			    		alert("Successfully Logged In, check the console");
			    		$('#loginFields').fadeOut();
			    		$('#accountInfo').removeAttr("class");
			    		
			    		
			    		console.log("SESSION NAME" + sessionStorage.getItem("name"));
			    		document.getElementById("userName").innerHTML = user.email;
			    		
			    	}
			    	else
			    		alert("Account not found.");

			        //Error Checking
			        // if($.isNumeric(data)){
			        //     if(data==400) {
			        //         alert("success logging in");
			        //     } 
			        //     else {
			                
			        //     } 
			        // }
			        // else if(!jQuery.isEmptyObject(data)){
			        //     var obj = JSON.parse(data);
			        //     if(obj.Email.length>0){
			        //         $.cookie.json = true;
			        //         $.cookie("data", data); 
			        //         //redirect user
			        //         $("#loginMessage").hide();
			        //         $(location).attr('href', "search.html");
			        //     }
			        // }
			    },
			    error: function(something, var1) {
			    	console.log(something);
			    	console.log(var1);
	         		alert('An error occurred');
	      		}

			}); // end of ajax
	}); // end submit function
	$('#logout').on("click", function(){
		$('#accountInfo').attr("class", "hidden");
		$('#loginFields').fadeIn();
		
		$('#dropBox').fadeOut();
		
		sessionStorage.removeItem('name');
		sessionStorage.removeItem('password');
		sessionStorage.removeItem('location');
	}); // end logout on click
}); // end doc.ready