"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const cartService_1 = __importDefault(require("../services/cartService"));
class CartController {
    static async getAllCarts(_, res) {
        try {
            const cartService = tsyringe_1.container.resolve(cartService_1.default);
            const carts = await cartService.getAllCarts();
            res.status(200).json({ status: 200, carts: carts });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async getCartById(req, res) {
        try {
            const cartService = tsyringe_1.container.resolve(cartService_1.default);
            const cart = await cartService.getById(parseInt(req.params.id));
            if (!cart) {
                return res.status(404).json({ message: "Cart not found" });
            }
            res.status(200).json({ status: 200, cart: cart });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async createCart(req, res) {
        try {
            const cartService = tsyringe_1.container.resolve(cartService_1.default);
            const newCart = await cartService.createCart(req.body);
            res.status(201).json({ message: "Cart Created Succesfully" });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async updateCart(req, res) {
        try {
            const cartService = tsyringe_1.container.resolve(cartService_1.default);
            const updatedCart = await cartService.updateCart(parseInt(req.params.id), req.body);
            if (!updatedCart) {
                return res.status(404).json({ message: "Cart not found" });
            }
            res.json(updatedCart);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async deleteCart(req, res) {
        try {
            const cartService = tsyringe_1.container.resolve(cartService_1.default);
            await cartService.deleteCart(parseInt(req.params.id));
            res.status(200).json({ status: 200, message: "Cart deleted successfully" });
        }
        catch (error) {
            if (error.message === 'Cart not found') {
                return res.status(404).json({ message: error.message });
            }
            res.status(500).json({ message: error.message });
        }
    }
}
exports.default = CartController;
