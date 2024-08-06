"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const roleService_1 = __importDefault(require("../services/roleService"));
class RoleController {
    static async createRole(req, res) {
        try {
            const roleService = tsyringe_1.container.resolve(roleService_1.default);
            const newRole = await roleService.createRole(req.body);
            res.status(201).json(newRole);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
exports.default = RoleController;
