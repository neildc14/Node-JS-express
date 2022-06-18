const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

router.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

router.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      // const blogs = result;
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

//route param
router.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details " });
    })
    .catch((err) => console.log(err));
});

//POST REQUESTS----------------------//
router.post("/blogs", (req, res) => {
  const blog = new Blog(req.body); //data contained by the post request

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

//DELETE--------------//
router.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs  " });
      //you cannot pass a redirect method in this
    })
    .catch((err) => console.log(err));
});

module.exports = router;
