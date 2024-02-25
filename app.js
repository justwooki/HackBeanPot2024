// Imports
const express = require("express");
const app = express();
const port = 8080;

// Static Files
app.use(express.static("public"));
app.use("/css-files", express.static(__dirname + "css-files"));
app.use("/js-files", express.static(__dirname + "js-files"));
app.use("/images-files", express.static(__dirname + "images-files"));

// Set Views
app.set("views", "./views");
app.set("view engine", "ejs");

// Set Webpages
app.get("", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/sign-in", (req, res) => {
  res.render("sign-in");
});

app.get("/home", (req, res) => {
  res.render("home-signed-in");
});

app.get("/account", (req, res) => {
  res.render("account");
});

app.get("/about", (req, res) => {
  res.render("about-us");
});

app.get("/cookie-listing", (req, res) => {
  res.render("cookie-listing");
});

app.get("/pizza-listing", (req, res) => {
  res.render("pizza-listing");
});

app.get("/lobster-listing", (req, res) => {
  res.render("lobster-listing");
});

app.get("/share", (req, res) => {
  res.render("share");
});

// Listen on port 8080
app.listen(port, () => console.info("Listening on port ${port}"));
