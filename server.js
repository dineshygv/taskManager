var express = require("express");
var app = express();
var fs = require("fs");
var port = process.env.PORT || 1337;

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

app.listen(port);

 