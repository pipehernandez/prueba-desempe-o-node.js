import { injectable } from "tsyringe";
import { User } from "../models/userModel";

@injectable()
export default class UserRepository{
    async findAll(){
        return await User.findAll({attributes: ['id', 'email', 'roleId']})
    }
    async findById(id: number){
        return await User.findByPk(id, {attributes: ['id', 'email', 'roleId']})
    }
    async findByEmail(email: string){
        return await User.findOne({ where: { email } });
    }

    // debe ir en el auth
    async create(user: Partial<User>){
        return await User.create(user)
    }
    async update(id: number, user: Partial<User>){
        const userToUpdate = await User.findByPk(id);
        if(!userToUpdate){
            throw new Error("User not found");
        }
        return await userToUpdate.update(user);
    }
    async delete(id: number){
        const userToDelete = await User.findByPk(id);
        if(!userToDelete){
            throw new Error("User not found");
        }
        return await userToDelete.destroy();
    }
}