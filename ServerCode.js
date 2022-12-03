const express = require("express");
const mysql = require("mysql");
const bodyparser = require("body-parser");
const app = express();

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
		user: "rabab",
		password: "rabab123",
		database: "travelexperts"
	});
	return con;
}

app.get("/packages", (req,res)=>{ 
	var myConnection = getConnection();
	myConnection.connect((err)=>{
		if (err) throw err;
		myConnection.query("SELECT * FROM packages", (err,result,fields)=>{
			if (err) throw err;
			console.log(result);
			console.log(fields);
			res.render("packages", { "result": result, "fields": fields });
			myConnection.end((err)=>{
				if (err) throw err;
			});
		});
	});
});


app.get("/", (req,res)=>{
    res.render("index");

});

// app.use("/contact",(req,res)=>{
//     res.render("contact");
// });


