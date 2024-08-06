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
}