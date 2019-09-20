const express = require("express");
const checkAuth = require("../middleware/check-auth");

const extractFiles = require("../middleware/file");
const postController = require("../controllers/posts");

const router = express.Router();

router.post("", checkAuth, extractFiles, postController.createPost);

router.put("/:id", checkAuth, extractFiles, postController.updatePost);

router.get("", postController.getPosts);

router.get("/:id", postController.getPost);

router.delete("/:id", checkAuth, extractFiles, postController.deletePost);

module.exports = router;
