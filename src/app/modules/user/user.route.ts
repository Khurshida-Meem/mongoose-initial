import express from "express";
import { createUser, getSingleUser, getUsers } from "./user.controller";
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getSingleUser);
router.post("/create-user", createUser);

export default router;
