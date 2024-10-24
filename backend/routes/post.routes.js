import express from "express";
import { protectRoute } from "../middleware/ProtectRoute.js";
import { likeUnlikePost,commentOnPost,createPost,deletePost, getAllPosts, getLikedPosts, getFollowingPosts, getUserPosts } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/all",protectRoute,getAllPosts);
router.get("/following",protectRoute,getFollowingPosts)
router.get("/likes/:id", protectRoute,getLikedPosts);
router.get("/user/:username", protectRoute,getUserPosts)
router.post("/like/:id",protectRoute,likeUnlikePost);
router.post("/comment/:id",protectRoute,commentOnPost)
router.post("/create",protectRoute,createPost)
router.delete("/:id",protectRoute,deletePost)



export default router;