const express = require("express");
const mysql = require("mysql");
const bodyparser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public", { "extensions": ["css", "js", "php"] }));
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
		user: "Micah",
		password: "Micah3cheese",
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
    res.render("Registration");
});

app.get("/orders1", (req, res) => {
    var myConnection = getConnection();
	myConnection.connect((err)=>{
		if (err) throw err;
		myConnection.query("SELECT * FROM packages", (err,result,fields)=>{
			if (err) throw err;
			console.log(result);
			console.log(fields);
			res.render("orders1", { "result": result, "fields": fields });
			myConnection.end((err)=>{
				if (err) throw err;
			});
		});
	});   
});

app.get("/orders2", (req, res) => {
    var myConnection = getConnection();
	myConnection.connect((err)=>{
		if (err) throw err;
		myConnection.query("SELECT * FROM packages", (err,result,fields)=>{
			if (err) throw err;
			console.log(result);
			console.log(fields);
			res.render("orders2", { "result": result, "fields": fields });
			myConnection.end((err)=>{
				if (err) throw err;
			});
		});
	});   
});

app.get("/orders3", (req, res) => {
    var myConnection = getConnection();
	myConnection.connect((err)=>{
		if (err) throw err;
		myConnection.query("SELECT * FROM packages", (err,result,fields)=>{
			if (err) throw err;
			console.log(result);
			console.log(fields);
			res.render("orders3", { "result": result, "fields": fields });
			myConnection.end((err)=>{
				if (err) throw err;
			});
		});
	});   
});

app.get("/orders4", (req, res) => {
    var myConnection = getConnection();
	myConnection.connect((err)=>{
		if (err) throw err;
		myConnection.query("SELECT * FROM packages", (err,result,fields)=>{
			if (err) throw err;
			console.log(result);
			console.log(fields);
			res.render("orders4", { "result": result, "fields": fields });
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
			console.log(result);
			console.log(fields);
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
		myConnection.query("SELECT * FROM packages", (err,result,fields)=>{
			if (err) throw err;
			console.log(result);
			console.log(fields);
			res.render("contactpage", { "result": result, "fields": fields });
			myConnection.end((err)=>{
				if (err) throw err;
			});
		});
	});   
});

// app.use("/contact",(req,res)=>{
//     res.render("contact");
// });



