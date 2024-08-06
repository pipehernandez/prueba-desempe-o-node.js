"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const userService_1 = __importDefault(require("../services/userService"));
class UserController {
    static async getAllUsers(_, res) {
        try {
            const userService = tsyringe_1.container.resolve(userService_1.default);
            const users = await userService.getAllUsers();
            res.json(users);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async getUserById(req, res) {
        try {
            const userService = tsyringe_1.container.resolve(userService_1.default);
            const user = await userService.getById(parseInt(req.params.id));
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.json(user);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async createUser(req, res) {
        try {
            const userService = tsyringe_1.container.resolve(userService_1.default);
            const newUser = await userService.createUser(req.body);
            res.status(201).json({ message: "User Created Succesfully" });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async updateUser(req, res) {
        try {
            const userService = tsyringe_1.container.resolve(userService_1.default);
            const updatedUser = await userService.updateUser(parseInt(req.params.id), req.body);
            if (!updatedUser) {
                return res.status(404).json({ message: "User not found" });
            }
            res.json(updatedUser);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async deleteUser(req, res) {
        try {
            const userService = tsyringe_1.container.resolve(userService_1.default);
            await userService.deleteUser(parseInt(req.params.id));
            res.status(200).json({ status: 200, message: "User deleted successfully" });
        }
        catch (error) {
            if (error.message === 'User not found') {
                return res.status(404).json({ message: error.message });
            }
            res.status(500).json({ message: error.message });
        }
    }
}
exports.default = UserController;
