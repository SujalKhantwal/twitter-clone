import express from "express"
import { protectRoute } from "../middleware/ProtectRoute.js";
import { getUserProfile,followUnfollowUser,updateUser,getSuggestedUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username",protectRoute,getUserProfile);
router.get("/suggested",protectRoute,getSuggestedUser);
router.post("/follow/:id",protectRoute,followUnfollowUser);
router.post("/update",protectRoute,updateUser);

export default router;