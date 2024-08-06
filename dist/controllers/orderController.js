"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orderService_1 = __importDefault(require("../services/orderService"));
const tsyringe_1 = require("tsyringe");
class OrderController {
    static async getAllOrders(_, res) {
        try {
            const orderService = tsyringe_1.container.resolve(orderService_1.default);
            const orders = await orderService.getAllOrders();
            res.json(orders);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async getOrderById(req, res) {
        try {
            const orderService = tsyringe_1.container.resolve(orderService_1.default);
            const order = await orderService.getById(parseInt(req.params.id));
            if (!order) {
                return res.status(404).json({ message: "Order not found" });
            }
            res.json(order);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async createOrder(req, res) {
        try {
            const orderService = tsyringe_1.container.resolve(orderService_1.default);
            const newOrder = await orderService.createOrder(req.body);
            res.status(201).json({ message: "Order Created Succesfully" });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async updateOrder(req, res) {
        try {
            const orderService = tsyringe_1.container.resolve(orderService_1.default);
            const updatedOrder = await orderService.updateOrder(parseInt(req.params.id), req.body);
            if (!updatedOrder) {
                return res.status(404).json({ message: "Order not found" });
            }
            res.json(updatedOrder);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async deleteOrder(req, res) {
        try {
            const orderService = tsyringe_1.container.resolve(orderService_1.default);
            await orderService.deleteOrder(parseInt(req.params.id));
            res.status(200).json({ status: 200, message: "Order Deleted Succesfully" });
        }
        catch (error) {
            if (error.message === 'Order not found') {
                return res.status(404).json({ message: error.message });
            }
            res.status(500).json({ message: error.message });
        }
    }
}
exports.default = OrderController;
