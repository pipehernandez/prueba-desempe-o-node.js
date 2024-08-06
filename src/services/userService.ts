import { User } from './../models/userModel';
import { inject, injectable } from "tsyringe";
import UserRepository from "../repositories/userRepository";

@injectable()
export default class UserService {
    constructor(@inject(UserRepository)
    private UserRepository: UserRepository) { }

    async getAllUsers() {
        try {
            return await this.UserRepository.findAll();
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async getById(id: number) {
        try {
            return await this.UserRepository.findById(id);
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async getByEmail(email: string) {
        try {
            return await this.UserRepository.findByEmail(email);
        } catch (error: any) {
            throw new Error(error.message)
        }
    }


    // debe ir en el auth
    async createUser(user: Partial<User>) {
        try {
            return await this.UserRepository.create(user)
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async updateUser(id: number, user: Partial<User>) {
        try {
            return await this.UserRepository.update(id, user)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async deleteUser(id: number) {
        try {
            return await this.UserRepository.delete(id);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async checkUserCredentials(email:string, password: string){
        const user = await this.UserRepository.findByEmail(email)
        if(user &&  user.password === password){
            return user;
        }
        throw new Error('Invalid credentials');
    }
}