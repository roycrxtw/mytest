// rebase test

function echo(msg){
	var status = 0;
	console.log("Basic echo function.");
	console.log("Server is running.");		// server branch code.
	console.log("message is " + msg);
	
	if(status){
		console.log("server online.");		// server branch code
	}else{
		console.log("server offline.");
	}
	return null;
}

