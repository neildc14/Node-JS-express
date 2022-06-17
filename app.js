const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const app = express();

const db =
  "mongodb+srv://neronero:neronero1@cluster0.sjkdwdq.mongodb.net/nodejs?retryWrites=true&w=majority";

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true }) //remove deprecationwarning
  .then((res) => {
    console.log("connected to db");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

//register views
app.set("view engine", "ejs");

//middleware
app.use(morgan("dev"));
app.use(express.static("styles"));

app.get("/", function (req, res) {
  res.redirect("/blogs");
});

app.get("/about", function (req, res) {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      const blogs = result;
      res.render("index", { title: "All Blogs", blogs });
    })
    .catch((err) => {
      console.log(err);
    });
});
//error 404 fires in every single request so it must be to the bottom
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
