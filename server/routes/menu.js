import express from "express";
const router = express.Router();
import {
  addMenuItem,
  removeMenuItem,
  updateMenuItem,
  getMenuItems,
} from "../controllers/menu.js";

router.post("/add/:restaurant_id", addMenuItem);
router.delete("/remove/:restaurant_id/:id", removeMenuItem);
router.put("/update/:restaurant_id/:id", updateMenuItem);
router.get("/get/:restaurant_id/", getMenuItems);

export default router;
