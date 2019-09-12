const express = require("express");

const Post = require("../models/post");
const checkAuth = require("../middleware/check-auth");

const extractFiles = require("../middleware/check-auth");
const postController = require("../controllers/posts");

const router = express.Router();

router.post("", checkAuth, extractFiles, postController.createPost);

router.put("/:id", checkAuth, extractFiles, postController.updatePost);

router.get("", checkAuth, extractFiles, postController.getPosts);

router.get("/:id", checkAuth, extractFiles, postController.getPost);

router.delete("/:id", checkAuth, extractFiles, postController.deletePost);

module.exports = router;
