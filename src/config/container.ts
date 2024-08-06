import { container } from "tsyringe";
import UserService from "../services/userService";
import UserRepository from "../repositories/userRepository";
import CartRepository from "../repositories/cartRepository";
import CartService from "../services/cartService";
import ProductRepository from "../repositories/productRepository";
import { ProductService } from "../services/productService";
import RoleRepository from "../repositories/roleRepository";
import RoleService from "../services/roleService";
import OrderRepository from "../repositories/orderRepository";
import OrderService from "../services/orderService";

container.registerSingleton<UserRepository>(UserRepository);
container.registerSingleton<UserService>(UserService);

container.registerSingleton<ProductRepository>(ProductRepository)
container.registerSingleton<ProductService>(ProductService)

container.registerSingleton<CartRepository>(CartRepository);
container.registerSingleton<CartService>(CartService);

container.registerSingleton<RoleRepository>(RoleRepository);
container.registerSingleton<RoleService>(RoleService)

container.registerSingleton<OrderRepository>(OrderRepository);
container.registerSingleton<OrderService>(OrderService);