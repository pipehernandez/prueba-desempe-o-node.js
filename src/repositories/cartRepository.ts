import { injectable } from "tsyringe";
import { Cart } from "../models/cartModel";

@injectable()
export default class CartRepository{
    async findAll(){
        return await Cart.findAll();
    }
    async findById(id: number){
        return await Cart.findByPk(id);
    }
    async create(cart: Partial<Cart>){
        return await Cart.create(cart);
    }
    async update(id: number, cart: Partial<Cart>){
        const cartToUpdate = await Cart.findByPk(id);
        if(!cartToUpdate){
            throw new Error("Cart not found");
        }
        return await cartToUpdate.update(cart);
    }
    async delete(id: number){
        const cartToDelete = await Cart.findByPk(id);
        if(!cartToDelete){
            throw new Error("Cart not found");
        }
        return await cartToDelete.destroy();
    }
}