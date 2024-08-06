"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const roleModel_1 = require("../models/roleModel");
let RoleRepository = class RoleRepository {
    async findAll() {
        return await roleModel_1.Role.findAll();
    }
    async findById(id) {
        return await roleModel_1.Role.findByPk(id);
    }
    async create(role) {
        return await roleModel_1.Role.create(role);
    }
    async update(id, role) {
        const roleToUpdate = await roleModel_1.Role.findByPk(id);
        if (!roleToUpdate) {
            throw new Error("Role not found");
        }
        return await roleToUpdate.update(role);
    }
    async delete(id) {
        const roleToDelete = await roleModel_1.Role.findByPk(id);
        if (!roleToDelete) {
            throw new Error("Role not found");
        }
        return await roleToDelete.destroy();
    }
};
RoleRepository = __decorate([
    (0, tsyringe_1.injectable)()
], RoleRepository);
exports.default = RoleRepository;
