var express = require('express');
const app = express();

app.set("port", (process.env.PORT || 3000));

app.use(express.static('public'));

app.get("/loginCredentials/index", getHomePage);
app.get("/loginCredentials/register", getRegister);
app.get("/homePage.html", getLogin);
app.get("/loginCredentials/dashboard", getDashboard);

app.listen(app.get("port"), function(){
	
	console.log("Now listening port: ", app.get("port"));
	
});

app.set("view engine", "ejs");

function getHomePage(req, res) {
    	
	res.render("index");
	//console.log("Getting person information");
	//var result = {id: 238, first: "Gabriel", last: "Andres"};
	
	//res.json(result);
}

function getRegister(req, res) {
    	
	res.render("register");
	
}

function getLogin(req, res) {
    	
	res.render("login");
	
}

function getDashboard(req, res) {
    	
	res.render("dashboard", { user: "Gabriel"});
	
}

