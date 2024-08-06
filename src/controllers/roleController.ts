import { container } from "tsyringe";
import RoleService from "../services/roleService";
import { Request, Response } from "express";

export default class RoleController{
    static async createRole(req: Request, res: Response){
        try {
            const roleService = container.resolve(RoleService)
            const newRole = await roleService.createRole(req.body);
            res.status(201).json(newRole);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }
}