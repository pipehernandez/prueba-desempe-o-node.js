"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const userModel_1 = require("../models/userModel");
let UserRepository = class UserRepository {
    async findAll() {
        return await userModel_1.User.findAll({ attributes: ['id', 'email', 'roleId'] });
    }
    async findById(id) {
        return await userModel_1.User.findByPk(id, { attributes: ['id', 'email', 'roleId'] });
    }
    async create(user) {
        return await userModel_1.User.create(user);
    }
    async update(id, user) {
        const userToUpdate = await userModel_1.User.findByPk(id);
        if (!userToUpdate) {
            throw new Error("User not found");
        }
        return await userToUpdate.update(user);
    }
    async delete(id) {
        const userToDelete = await userModel_1.User.findByPk(id);
        if (!userToDelete) {
            throw new Error("User not found");
        }
        return await userToDelete.destroy();
    }
};
UserRepository = __decorate([
    (0, tsyringe_1.injectable)()
], UserRepository);
exports.default = UserRepository;
