"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const productCartService_1 = require("../services/productCartService");
class ProductCartController {
    static async getAllProductCarts(_, res) {
        try {
            const productCartService = tsyringe_1.container.resolve(productCartService_1.ProductCartService);
            const productCarts = await productCartService.getAllProductCarts();
            res.json(productCarts);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async getProductCartById(req, res) {
        try {
            const productCartService = tsyringe_1.container.resolve(productCartService_1.ProductCartService);
            const productCart = await productCartService.getById(parseInt(req.params.id));
            if (!productCart) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.json(productCart);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async createProductCart(req, res) {
        try {
            const productCartService = tsyringe_1.container.resolve(productCartService_1.ProductCartService);
            const newProductCart = await productCartService.createProductCart(req.body);
            res.status(201).json({ message: "ProductCart Created Succesfully" });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async updateProductCart(req, res) {
        try {
            const productCartService = tsyringe_1.container.resolve(productCartService_1.ProductCartService);
            const updatedProductCart = await productCartService.updateProductCart(parseInt(req.params.id), req.body);
            if (!updatedProductCart) {
                return res.status(404).json({ message: "ProductCart not found" });
            }
            res.json(updatedProductCart);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async deleteProductCart(req, res) {
        try {
            const productCartService = tsyringe_1.container.resolve(productCartService_1.ProductCartService);
            await productCartService.deleteProductCart(parseInt(req.params.id));
            res.status(200).json({ status: 200, message: "ProductCart Deleted Succesfully" });
        }
        catch (error) {
            if (error.message === 'ProductCart not found') {
                return res.status(404).json({ message: error.message });
            }
            res.status(500).json({ message: error.message });
        }
    }
}
exports.default = ProductCartController;
