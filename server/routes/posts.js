const express = require("express")
const { getFeedPosts, getUserPosts, likePost } = require("../controllers/posts.js");
const { verifyToken } = require("../middleware/auth.js")

const postRouter = express.Router();

/* READ */
postRouter.get("/", verifyToken, getFeedPosts);
postRouter.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
postRouter.patch("/:id/like", verifyToken, likePost);

module.exports = {postRouter}