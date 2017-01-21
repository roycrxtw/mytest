// rebase test

function echo(msg){
	var status = 0;
	console.log("Basic echo function.");
	console.log("Server is running.");		// server branch code.
	console.log("message is " + msg);
	
	console.log("server offline.");		// server branch code
	if(status === 0){
		console.log("Local backup is running.");
	}else if(status === 1){
		console.log("Connect with remote database.");
	}else{
		console.log("ERROR");
	}
	return null;
}

