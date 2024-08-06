import { inject, injectable } from "tsyringe";
import ProductRepository from "../repositories/productRepository";
import { Product } from "../models/productModel";

@injectable()
export class ProductService{
    constructor(@inject(ProductRepository)
    private ProductRepository: ProductRepository){}

    async getAllProducts(){
        try {
            return await this.ProductRepository.findAll();
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    async getById(id: number) {
        try {
            return await this.ProductRepository.findById(id);
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async createProduct(product: Partial<Product>) {
        try {
            return await this.ProductRepository.create(product)
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async updateProduct(id: number, product: Partial<Product>){
        try {
            return await this.ProductRepository.update(id, product)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
    
    async deleteProduct(id: number){
        try {
            return await this.ProductRepository.delete(id)
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}