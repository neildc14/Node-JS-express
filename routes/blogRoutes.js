const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogControllers");

router.get("/create", blogController.blog_create);

router.get("/", blogController.blog_all);

//route param
router.get("/:id", blogController.blog_details);

//POST REQUESTS----------------------//
router.post("/", blogController.blog_post);

//DELETE--------------//
router.delete("/:id", blogController.blog_delete);

module.exports = router;
