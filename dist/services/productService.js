"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const tsyringe_1 = require("tsyringe");
const productRepository_1 = __importDefault(require("../repositories/productRepository"));
let ProductService = class ProductService {
    constructor(ProductRepository) {
        this.ProductRepository = ProductRepository;
    }
    async getAllProducts() {
        try {
            return await this.ProductRepository.findAll();
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getById(id) {
        try {
            return await this.ProductRepository.findById(id);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async createProduct(product) {
        try {
            return await this.ProductRepository.create(product);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async updateProduct(id, product) {
        try {
            return await this.ProductRepository.update(id, product);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async deleteProduct(id) {
        try {
            return await this.ProductRepository.delete(id);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(productRepository_1.default)),
    __metadata("design:paramtypes", [productRepository_1.default])
], ProductService);
