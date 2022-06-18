const Blog = require("../models/blog");

const blog_create = (req, res) => {
  res.render("blogs/create", { title: "Create a new blog" });
};

const blog_all = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) //top is the most recent
    .then((result) => {
      // const blogs = result;
      res.render("blogs/index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("blogs/details", { blog: result, title: "Blog Details " });
    })
    .catch((err) => console.log(err));
};

const blog_post = (req, res) => {
  const blog = new Blog(req.body); //data contained by the post request

  blog
    .save()
    .then((result) => {
      res.redirect("blogs/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "blogs/blogs  " });
      //you cannot pass a redirect method in this
    })
    .catch((err) => console.log(err));
};
module.exports = {
  blog_create,
  blog_all,
  blog_details,
  blog_post,
  blog_delete,
};
