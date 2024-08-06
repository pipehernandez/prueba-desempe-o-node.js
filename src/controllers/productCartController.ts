import { Request, Response } from "express";
import { container } from "tsyringe";
import { ProductCartService } from "../services/productCartService";

export default class ProductCartController{
    static async getAllProductCarts(_:Request, res:Response){
        try {
            const productCartService = container.resolve(ProductCartService)
            const productCarts = await productCartService.getAllProductCarts();
            res.json(productCarts)
        } catch (error:any) {
            res.status(500).json({message: error.message})
        }
    }

    static async getProductCartById(req: Request, res: Response){
        try {
            const productCartService = container.resolve(ProductCartService)
            const productCart = await productCartService.getById(parseInt(req.params.id));
            if(!productCart){
                return res.status(404).json({ message: "Product not found" });
            }
            res.json(productCart);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async createProductCart(req: Request, res: Response){
        try {
            const productCartService = container.resolve(ProductCartService)
            const newProductCart = await productCartService.createProductCart(req.body);
            res.status(201).json({ message: "ProductCart Created Succesfully"})
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updateProductCart(req: Request, res: Response){
        try {
            const productCartService = container.resolve(ProductCartService)
            const updatedProductCart = await productCartService.updateProductCart(parseInt(req.params.id), req.body);
            if(!updatedProductCart){
                return res.status(404).json({ message: "ProductCart not found" });
            }
            res.json(updatedProductCart);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deleteProductCart(req: Request, res: Response){
        try {
            const productCartService = container.resolve(ProductCartService)
            await productCartService.deleteProductCart(parseInt(req.params.id));
            res.status(200).json({status: 200, message: "ProductCart Deleted Succesfully"});
        } catch(error:any){
            if(error.message === 'ProductCart not found'){
                return res.status(404).json({ message: error.message });
            }
            res.status(500).json({ message: error.message });
        }
    }
}
