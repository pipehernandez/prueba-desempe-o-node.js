import { injectable } from "tsyringe";
import { Product } from "../models/productModel";

@injectable()
export default class ProductRepository{
    async findAll(){
        return await Product.findAll()
    }
    async findById(id: number){
        return await Product.findByPk(id)
    }
    async create(product: Partial<Product>){
        return await Product.create(product)
    }
    async update(id: number, product: Partial<Product>){
        const productToUpdate = await Product.findByPk(id);
        if(!productToUpdate){
            throw new Error("Product not found");
        }
        return await productToUpdate.update(product);
    }
    async delete(id: number){
        const productToDelete = await Product.findByPk(id);
        if(!productToDelete){
            throw new Error("Product not found");
        }
        return await productToDelete.destroy();
    }
}