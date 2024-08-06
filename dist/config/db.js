"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const userModel_1 = require("../models/userModel");
const productModel_1 = require("../models/productModel");
const roleModel_1 = require("../models/roleModel");
const cartModel_1 = require("../models/cartModel");
const productCartModel_1 = require("../models/productCartModel");
const orderModel_1 = require("../models/orderModel");
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "Rlwl2023.",
    database: "ecomFast",
    models: [userModel_1.User, productModel_1.Product, roleModel_1.Role, cartModel_1.Cart, productCartModel_1.ProductCart, orderModel_1.Order],
});
exports.default = sequelize;
