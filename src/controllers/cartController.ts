import { Request, Response } from "express";
import { container } from "tsyringe";
import CartService from "../services/cartService";

export default class CartController{
    static async getAllCarts(_:Request, res:Response){
        try {
            const cartService = container.resolve(CartService)
            const carts = await cartService.getAllCarts();
            res.status(200).json({status: 200, carts: carts});
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getCartById(req: Request, res: Response){
        try {
            const cartService = container.resolve(CartService)
            const cart = await cartService.getById(parseInt(req.params.id));
            if(!cart){
                return res.status(404).json({ message: "Cart not found" });
            }
            res.status(200).json({status: 200, cart: cart});
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async createCart(req: Request, res: Response){
        try {
            const cartService = container.resolve(CartService)
            const newCart = await cartService.createCart(req.body);
            res.status(201).json({ message: "Cart Created Succesfully"})
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updateCart(req: Request, res: Response){
        try {
            const cartService = container.resolve(CartService)
            const updatedCart = await cartService.updateCart(parseInt(req.params.id), req.body);
            if(!updatedCart){
                return res.status(404).json({ message: "Cart not found" });
            }
            res.json(updatedCart);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deleteCart(req: Request, res: Response){
        try {
            const cartService = container.resolve(CartService)
            await cartService.deleteCart(parseInt(req.params.id));
            res.status(200).json({status: 200, message: "Cart deleted successfully" });
        } catch (error:any) {
            if(error.message === 'Cart not found'){
                return res.status(404).json({ message: error.message });
            }
            res.status(500).json({ message: error.message });
        }
    }
}