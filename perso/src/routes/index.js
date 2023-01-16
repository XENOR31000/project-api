import express, { Router } from "express";
import engineRoutes from "./engine";
import modelRoutes from "./models";
import usersRoutes from "./users";

const router = express.Router();

router.use(modelRoutes)
router.use(engineRoutes)
router.use(usersRoutes);

export default router;
