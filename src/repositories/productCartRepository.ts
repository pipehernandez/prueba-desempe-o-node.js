import { injectable } from "tsyringe";
import { ProductCart } from "../models/productCartModel";

@injectable()
export default class ProductCartRepository{
    async findAll(){
        return await ProductCart.findAll()
    }
    async findById(id: number){
        return await ProductCart.findByPk(id)
    }
    async create(productCart: Partial<ProductCart>){
        return await ProductCart.create(productCart)
    }
    async update(id: number, productCart: Partial<ProductCart>){
        const productCartToUpdate = await ProductCart.findByPk(id);
        if(!productCartToUpdate){
            throw new Error("ProductCart not found");
        }
        return await productCartToUpdate.update(productCart);
    }
    async delete(id: number){
        const productCartToDelete = await ProductCart.findByPk(id);
        if(!productCartToDelete){
            throw new Error("ProductCart not found");
        }
        return await productCartToDelete.destroy();
    }
}