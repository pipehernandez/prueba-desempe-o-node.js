"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const cartModel_1 = require("../models/cartModel");
let CartRepository = class CartRepository {
    async findAll() {
        return await cartModel_1.Cart.findAll();
    }
    async findById(id) {
        return await cartModel_1.Cart.findByPk(id);
    }
    async create(cart) {
        return await cartModel_1.Cart.create(cart);
    }
    async update(id, cart) {
        const cartToUpdate = await cartModel_1.Cart.findByPk(id);
        if (!cartToUpdate) {
            throw new Error("Cart not found");
        }
        return await cartToUpdate.update(cart);
    }
    async delete(id) {
        const cartToDelete = await cartModel_1.Cart.findByPk(id);
        if (!cartToDelete) {
            throw new Error("Cart not found");
        }
        return await cartToDelete.destroy();
    }
};
CartRepository = __decorate([
    (0, tsyringe_1.injectable)()
], CartRepository);
exports.default = CartRepository;
