import express from "express";
import recipesRoutes from "./recipes";
import usersRoutes from "./users";

const router = express.Router();


router.use(usersRoutes);

export default router;
