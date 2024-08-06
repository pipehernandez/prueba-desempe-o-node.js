import { Request, Response } from "express";
import { container } from "tsyringe";
import { ProductService } from "../services/productService";

export default class ProductController{
    static async getAllProducts(_:Request, res:Response){
        try {
            const productService = container.resolve(ProductService)
            const products = await productService.getAllProducts();
            res.json(products)
        } catch (error:any) {
            res.status(500).json({message: error.message})
        }
    }

    static async getProductById(req: Request, res: Response){
        try {
            const productService = container.resolve(ProductService)
            const product = await productService.getById(parseInt(req.params.id));
            if(!product){
                return res.status(404).json({ message: "Product not found" });
            }
            res.json(product);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async createProduct(req: Request, res: Response){
        try {
            const productService = container.resolve(ProductService)
            const newProduct = await productService.createProduct(req.body);
            res.status(201).json({ message: "Product Created Succesfully"})
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updateProduct(req: Request, res: Response){
        try {
            const productService = container.resolve(ProductService)
            const updatedProduct = await productService.updateProduct(parseInt(req.params.id), req.body);
            if(!updatedProduct){
                return res.status(404).json({ message: "Product not found" });
            }
            res.json(updatedProduct);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deleteProduct(req: Request, res: Response){
        try {
            const productService = container.resolve(ProductService)
            await productService.deleteProduct(parseInt(req.params.id));
            res.status(200).json({status: 200, message: "Product Deleted Succesfully"});
        } catch(error:any){
            if(error.message === 'Product not found'){
                return res.status(404).json({ message: error.message });
            }
            res.status(500).json({ message: error.message });
        }
    }
}
