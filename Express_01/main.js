var express = require("express");
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var app = express();

var userRoutes = require('./routes/user.route')

var port = 8000;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser())

app.use(express.static('public'))

app.get("/", function(req, res) {
    res.render("index", {
        name: "Toi dang hoc Express",
    }); // trỏ đến cái file index.pug trong view
});

app.use('/users', userRoutes)

app.listen(port, function() {
    console.log("server listening on port " + port);
});