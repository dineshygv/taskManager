var express = require("express");
var app = express();
var fs = require("fs");

function sendFile(res, filePath){
	fs.exists(__dirname + filePath, function(exists){
		if(exists){
			res.sendFile(__dirname + filePath);
		}else{
			res.sendStatus(404);			
		}		
	});
}


app.get("/", function(req, res){
	console.log("/");
	sendFile(res, "/taskManager.htm");	
});

app.get("*", function(req, res){
	console.log(req.path);
	sendFile(res, req.path);
});

var port = (process.argv.length > 2 && typeof process.argv[2] == "number") ? process.argv[2] : 3000;
app.listen(port);

console.log("File server listening on " + port + " with base path " + __dirname);

 