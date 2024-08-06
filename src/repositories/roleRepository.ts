import { injectable } from "tsyringe";
import { Role } from "../models/roleModel";

@injectable()
export default class RoleRepository{
    async findAll(){
        return await Role.findAll()
    }
    async findById(id: number){
        return await Role.findByPk(id)
    }
    async create(role: Partial<Role>){
        return await Role.create(role)
    }
    async update(id: number, role: Partial<Role>){
        const roleToUpdate = await Role.findByPk(id);
        if(!roleToUpdate){
            throw new Error("Role not found");
        }
        return await roleToUpdate.update(role);
    }
    async delete(id: number){
        const roleToDelete = await Role.findByPk(id);
        if(!roleToDelete){
            throw new Error("Role not found");
        }
        return await roleToDelete.destroy();
    }
}