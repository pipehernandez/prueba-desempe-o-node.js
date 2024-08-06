import { Order } from './../models/orderModel';
import { inject, injectable } from "tsyringe";
import OrderRepository from "../repositories/orderRepository";

@injectable()
export default class OrderService {
    constructor(@inject(OrderRepository)
    private OrderRepository: OrderRepository){}

    async getAllOrders() {
        try {
            return await this.OrderRepository.findAll();
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async getById(id: number){
        try {
            return await this.OrderRepository.findById(id);
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    async createOrder(order: Partial<Order>) {
        try {
            return await this.OrderRepository.create(order)
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async updateOrder(id: number, order: Partial<Order>) {
        try {
            return await this.OrderRepository.update(id, order)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async deleteOrder(id: number) {
        try {
            return await this.OrderRepository.delete(id);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}