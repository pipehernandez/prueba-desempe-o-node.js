"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const productModel_1 = require("../models/productModel");
let ProductRepository = class ProductRepository {
    async findAll() {
        return await productModel_1.Product.findAll();
    }
    async findById(id) {
        return await productModel_1.Product.findByPk(id);
    }
    async create(product) {
        return await productModel_1.Product.create(product);
    }
    async update(id, product) {
        const productToUpdate = await productModel_1.Product.findByPk(id);
        if (!productToUpdate) {
            throw new Error("Product not found");
        }
        return await productToUpdate.update(product);
    }
    async delete(id) {
        const productToDelete = await productModel_1.Product.findByPk(id);
        if (!productToDelete) {
            throw new Error("Product not found");
        }
        return await productToDelete.destroy();
    }
};
ProductRepository = __decorate([
    (0, tsyringe_1.injectable)()
], ProductRepository);
exports.default = ProductRepository;
