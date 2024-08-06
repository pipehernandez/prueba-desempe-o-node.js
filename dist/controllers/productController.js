"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const productService_1 = require("../services/productService");
class ProductController {
    static async getAllProducts(_, res) {
        try {
            const productService = tsyringe_1.container.resolve(productService_1.ProductService);
            const products = await productService.getAllProducts();
            res.json(products);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async getProductById(req, res) {
        try {
            const productService = tsyringe_1.container.resolve(productService_1.ProductService);
            const product = await productService.getById(parseInt(req.params.id));
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.json(product);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async createProduct(req, res) {
        try {
            const productService = tsyringe_1.container.resolve(productService_1.ProductService);
            const newProduct = await productService.createProduct(req.body);
            res.status(201).json({ message: "Product Created Succesfully" });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async updateProduct(req, res) {
        try {
            const productService = tsyringe_1.container.resolve(productService_1.ProductService);
            const updatedProduct = await productService.updateProduct(parseInt(req.params.id), req.body);
            if (!updatedProduct) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.json(updatedProduct);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async deleteProduct(req, res) {
        try {
            const productService = tsyringe_1.container.resolve(productService_1.ProductService);
            await productService.deleteProduct(parseInt(req.params.id));
            res.status(200).json({ status: 200, message: "Product Deleted Succesfully" });
        }
        catch (error) {
            if (error.message === 'Product not found') {
                return res.status(404).json({ message: error.message });
            }
            res.status(500).json({ message: error.message });
        }
    }
}
exports.default = ProductController;
