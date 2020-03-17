var express = require('express')
var app = express()

app.set("port", (process.env.PORT || 3000));

app.get("/getPerson", getPerson);

app.listen(app.get("port"), function(){
	
	console.log("Now listening port: ", app.get("port"));
	
});

function getPerson(req, res) {
    	
	console.log("Getting person information");
}