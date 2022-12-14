const express = require("express");
const mysql = require("mysql");
const bodyparser = require("body-parser");
const app = express();
const quote = require("./public/quotes.js")


app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public", { "extensions": ["css", "js"] }));
app.use(express.static("media", { "extensions": ["png", "jpg", "gif"] }));
app.use(bodyparser.urlencoded({ extended: true }));

app.listen(8000, (err)=>{
	if (err) throw err;
	
	console.log("server started on port 8000");
});

function getConnection()
{
	var con = mysql.createConnection({
		host: "localhost",
		user: "Dorothy",
		password: "Dorothy3cheese",
		database: "travelexperts"
	});
	return con;
}

app.get("/packages", (req,res)=>{ 
	var myConnection = getConnection();
	myConnection.connect((err)=>{
		if (err) throw err;
		myConnection.query("SELECT * FROM `packages` WHERE `PkgEndDate` >= CURRENT_DATE", (err,result,fields)=>{
			if (err) throw err;
			res.render("packages", { "result": result, "fields": fields });
			myConnection.end((err)=>{
				if (err) throw err;
			});
		});
	});
});


app.get("/", (req, res, err) => {
    res.render("Homepage");
});

app.get("/registration", (req, res, err) => {
    res.render("Registration",{"quote": quote.generateQuote()});
});

app.post("/orders", (req, res) => {
	var pkgData = [req.body.PkgName, req.body.PkgBasePrice, req.body.PkgStartDate, req.body.PkgEndDate, req.body.members];
    var myConnection = getConnection();
	myConnection.connect((err)=>{
		if (err) throw err;
		myConnection.query("SELECT `PkgName`, `PkgBasePrice`, `PkgStartDate`, `PkgEndDate` FROM packages WHERE PackageId=?", [req.body.pkgId], (err,result,fields)=>{
			if (err) throw err;
			res.render("Orders", { "result": result, "fields": fields });
			myConnection.end((err)=>{
				if (err) throw err;
			});
		});
	});   
});

app.get("/Confirmation", (req, res) => {
     var myConnection = getConnection();
 	myConnection.connect((err)=>{
 		if (err) throw err;
 		myConnection.query("SELECT * FROM packages", (err,result,fields)=>{
 			if (err) throw err;
 			res.render("Confirmation", { "result": result, "fields": fields });
 			myConnection.end((err)=>{
 				if (err) throw err;
 			});
 		});
 	});   
});

app.get("/contact", (req, res) => {
    var myConnection = getConnection();
	myConnection.connect((err)=>{
		if (err) throw err;
		myConnection.query("SELECT * FROM agents WHERE AgencyId= 1", (err,calAgents)=>{
			if (err) throw err;
			myConnection.query("SELECT * FROM agents WHERE AgencyId= 2", (err,okAgents)=>{
				if (err) throw err;
			myConnection.query("SELECT * FROM agencies", (err1,agencies,fields1)=>{
				if (err1) throw err1;
				console.log(calAgents);
				console.log(okAgents);
				console.log(agencies);
				console.log(fields1);
				res.render("contactpage", { "calAgents": calAgents, "okAgents": okAgents, "agencies": agencies, "fields1": fields1 });
				
				myConnection.end((err)=>{
				if (err) throw err;
					});
				});
			});
		});
	});   
});


app.post("/register", function(req, res, next) {
	console.log(req.body);
	res.send(req.body);
});

app.get("/login", (req, res, err) => {
    res.render("login");
});

app.post("/purgatory", (req, res, err) => {
    res.render("Purgatory");
});

app.post("/confirm", (req, res) => {
    var agtdata = [ req.body.AgtFirstName, req.body.AgtMiddleInitial, req.body.AgtLastName, 
        req.body.AgtBusPhone, req.body.AgtEmail, req.body.AgtPosition, req.body.AgencyId];
    var myConnection = getConnection();
    myConnection.connect((err) => {
        console.log("working to this point");
        if (err) throw err;
        var sql = "INSERT INTO `agents`(`AgentId`, `AgtFirstName`, `AgtMiddleInitial`, `AgtLastName`, `AgtBusPhone`, `AgtEmail`, `AgtPosition`, `AgencyId`) VALUES (0, ?, ?, ?, ?, ?, ?, ?)";
        console.log("working so far.");
        console.log(agtdata);
        myConnection.query({"sql": sql, "values": agtdata}, (err, result) => {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) inserted!");
            if (result.affectedRows > 0) {
                res.render("Confirmation");
            }
            else {
                res.send("data insert failed :(")
            }
            myConnection.end((err) => {
                if (err) throw err;
            });
        });
    });
});
