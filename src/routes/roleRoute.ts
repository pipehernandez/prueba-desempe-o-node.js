import { Router } from "express";
import RoleController from "../controllers/roleController";

export const roleRouter = Router();

roleRouter.post('/', RoleController.createRole)