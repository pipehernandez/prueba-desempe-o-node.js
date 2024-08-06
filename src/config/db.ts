import { Sequelize } from "sequelize-typescript";
import { User } from "../models/userModel";
import { Product } from "../models/productModel";
import { Role } from "../models/roleModel";
import { Cart } from "../models/cartModel";
import { ProductCart } from "../models/productCartModel";
import { Order } from "../models/orderModel";

const sequelize: Sequelize = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "Rlwl2023.",
    database: "ecomFast",
    models: [User, Product, Role, Cart, ProductCart, Order],
});

export default sequelize;