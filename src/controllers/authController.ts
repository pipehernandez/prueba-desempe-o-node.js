import { Request, Response } from "express";
import { container } from "tsyringe";
import UserService from "../services/userService";
import jwt from "jsonwebtoken";

export default class AuthController{
    static async registerNewUser(req: Request, res: Response) {
        try {
            const newUser = req.body;
            if (!newUser) return res.status(500).json({ message: "No user provided" });
            const userService = container.resolve(UserService);
            const createdUser = await userService.createUser(newUser);
            res.status(201).json(createdUser);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async loginUser(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const userService = container.resolve(UserService);
            const user = await userService.checkUserCredentials(email, password);
            const token = AuthController.generateToken({ email: user.email, password: user.password });
            res.status(200).json({ status: 200, token });
        } catch (error:any) {
            res.status(401).json({message: error.message})
        }
    }

    static generateToken = (user: { email: string, password: string }) => {
        const token = jwt.sign(user, "secretKey", { expiresIn: "1h" });
        return token;
    };
}