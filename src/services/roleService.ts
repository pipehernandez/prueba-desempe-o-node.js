import { inject, injectable } from "tsyringe";
import RoleRepository from "../repositories/roleRepository";
import { Role } from "../models/roleModel";

@injectable()
export default class RoleService {
    constructor(@inject(RoleRepository)
    private RoleRepository: RoleRepository){ }

    // async getAllRoles(){
    //     try {
    //         return await this.RoleRepository.findAll();
    //     } catch (error:any) {
    //         throw new Error(error.message)
    //     }
    // }

    // async getById(id: number) {
    //     try {
    //         return await this.RoleRepository.findById(id);
    //     } catch (error: any) {
    //         throw new Error(error.message)
    //     }
    // }

    async createRole(role: Partial<Role>) {
        try {
            return await this.RoleRepository.create(role)
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}