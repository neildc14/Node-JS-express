const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
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
app.use(express.static("styles"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//GET REQUESTS-------------------//
app.get("/", function (req, res) {
  res.redirect("/blogs");
});

app.get("/about", function (req, res) {
  res.render("about", { title: "About" });
});

app.use("/blogs", blogRoutes);

//error 404 fires in every single request so it must be to the bottom
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
