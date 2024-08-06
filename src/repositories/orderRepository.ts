import { injectable } from "tsyringe";
import { Order } from "../models/orderModel";

@injectable()
export default class OrderRepository{
    async findAll(){
        return await Order.findAll();
    }
    async findById(id: number){
        return await Order.findByPk(id);
    }
    async create(order: Partial<Order>){
        return await Order.create(order);
    }
    async update(id: number, order: Partial<Order>){
        const orderToUpdate = await Order.findByPk(id);
        if(!orderToUpdate){
            throw new Error("Order not found");
        }
        return await orderToUpdate.update(order);
    }
    async delete(id: number){
        const orderToDelete = await Order.findByPk(id);
        if(!orderToDelete){
            throw new Error("Order not found");
        }
        return await orderToDelete.destroy();
    }
}