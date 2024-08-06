import { inject, injectable } from "tsyringe";
import ProductCartRepository from "../repositories/productCartRepository";
import { ProductCart } from "../models/productCartModel";

@injectable()
export class ProductCartService{
    constructor(@inject(ProductCartRepository)
    private ProductCartRepository: ProductCartRepository){}

    async getAllProductCarts(){
        try {
            return await this.ProductCartRepository.findAll();
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    async getById(id: number) {
        try {
            return await this.ProductCartRepository.findById(id);
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async createProductCart(productCart: Partial<ProductCart>) {
        try {
            return await this.ProductCartRepository.create(productCart)
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async updateProductCart(id: number, productCart: Partial<ProductCart>){
        try {
            return await this.ProductCartRepository.update(id, productCart)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
    
    async deleteProductCart(id: number){
        try {
            return await this.ProductCartRepository.delete(id)
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}