const express = require("express");
const mysql = require("mysql");
const bodyparser = require("body-parser");
const { resourceLimits } = require("worker_threads");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("media", {"extensions": ["gif", "jpg", "png"] }));
app.use(express.static("public", {"extensions": ["css"] }));
app.use(bodyparser.urlencoded({
    "extended": true
}));

app.listen(8000, (err) => {
    if (err) throw err;
    console.log("Server do be running.")
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

app.get("/", (req, res, err) => {
    res.render("Homepage");
});

app.get("/registration", (req, res, err) => {
    res.render("Registration");
});

app.get("/orders", (req, res) => {
            res.render("orders");   
});
