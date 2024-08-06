import { Request, Response } from "express";
import OrderService from "../services/orderService";
import { container } from "tsyringe";


export default class OrderController{
    static async getAllOrders(_:Request, res:Response){
        try {
            const orderService = container.resolve(OrderService)
            const orders = await orderService.getAllOrders();
            res.json(orders);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getOrderById(req: Request, res: Response){
        try {
            const orderService = container.resolve(OrderService)
            const order = await orderService.getById(parseInt(req.params.id));
            if(!order){
                return res.status(404).json({ message: "Order not found" });
            }
            res.json(order);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async createOrder(req: Request, res: Response){
        try {
            const orderService = container.resolve(OrderService)
            const newOrder = await orderService.createOrder(req.body);
            res.status(201).json({message: "Order Created Succesfully"});
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updateOrder(req: Request, res: Response){
        try {
            const orderService = container.resolve(OrderService)
            const updatedOrder = await orderService.updateOrder(parseInt(req.params.id), req.body);
            if(!updatedOrder){
                return res.status(404).json({ message: "Order not found" });
            }
            res.json(updatedOrder);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deleteOrder(req: Request, res: Response){
        try {
            const orderService = container.resolve(OrderService)
            await orderService.deleteOrder(parseInt(req.params.id));
            res.status(200).json({status: 200, message: "Order Deleted Succesfully"});
        } catch(error:any){
            if(error.message === 'Order not found'){
                return res.status(404).json({ message: error.message });
            }
            res.status(500).json({ message: error.message });
        }
    }
}