import express, { Router } from "express";
import modelRoutes from "./models";
import usersRoutes from "./users";

const router = express.Router();

router.use(modelRoutes)

router.use(usersRoutes);

export default router;
