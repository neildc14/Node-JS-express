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
  const blogs = [
    {
      title: "Yoshi find segss",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, perferendis.",
    },
    {
      title: "Mario fin stars",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, perferendis.",
    },
    {
      title: "How to defeat bowser",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, perferendis.",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", function (req, res) {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

//sandbox
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "New Blossg",
    snippet: "snippet of blog",
    body: "body of the blog",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-blogs", (req, res) => {
  Blog.find() //find methods directly on the Blog not on the instance of it.
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.lopg(err);
    });
});

//error 404 fires in every single request so it must be to the bottom
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
