var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var knex = require("./db/connection");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var movies = require("./routes/movies");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/v1/movies", movies);

const port = process.env.port || 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
