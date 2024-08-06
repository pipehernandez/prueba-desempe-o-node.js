import { Request, Response } from "express";
import { container } from "tsyringe";
import UserService from "../services/userService";

export default class UserController {
    static async getAllUsers(_: Request, res: Response){
        try {
            const userService = container.resolve(UserService)
            const users = await userService.getAllUsers();
            res.json(users);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getUserById(req: Request, res: Response){
        try {
            const userService = container.resolve(UserService)
            const user = await userService.getById(parseInt(req.params.id));
            if(!user){
                return res.status(404).json({ message: "User not found" });
            }
            res.json(user);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async createUser(req: Request, res: Response){
        try {
            const userService = container.resolve(UserService)
            const newUser = await userService.createUser(req.body);
            res.status(201).json({ message: "User Created Succesfully"})
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updateUser(req: Request, res: Response){
        try {
            const userService = container.resolve(UserService)
            const updatedUser = await userService.updateUser(parseInt(req.params.id), req.body);
            if(!updatedUser){
                return res.status(404).json({ message: "User not found" });
            }
            res.json(updatedUser);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deleteUser(req: Request, res: Response){
        try {
            const userService = container.resolve(UserService)
            await userService.deleteUser(parseInt(req.params.id));
            res.status(200).json({ status: 200, message: "User deleted successfully" });
        } catch (error:any) {
            if(error.message === 'User not found'){
                return res.status(404).json({ message: error.message });
            }
            res.status(500).json({ message: error.message });
        }
    }
}