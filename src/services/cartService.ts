import { inject, injectable } from "tsyringe";
import CartRepository from "../repositories/cartRepository";
import { Cart } from "../models/cartModel";

@injectable()
export default class CartService {
    constructor(@inject(CartRepository)
    private CartRepository: CartRepository){}

    async getAllCarts() {
        try {
            return await this.CartRepository.findAll();
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async getById(id: number){
        try {
            return await this.CartRepository.findById(id);
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    async createCart(cart: Partial<Cart>) {
        try {
            return await this.CartRepository.create(cart)
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async updateCart(id: number, cart: Partial<Cart>) {
        try {
            return await this.CartRepository.update(id, cart)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async deleteCart(id: number) {
        try {
            return await this.CartRepository.delete(id);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}