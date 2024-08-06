"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productCartRouter = void 0;
const express_1 = require("express");
const productCartController_1 = __importDefault(require("../controllers/productCartController"));
exports.productCartRouter = (0, express_1.Router)();
exports.productCartRouter.get('/', productCartController_1.default.getAllProductCarts);
exports.productCartRouter.get('/:id', productCartController_1.default.getProductCartById);
exports.productCartRouter.post('/', productCartController_1.default.createProductCart);
exports.productCartRouter.put('/:id', productCartController_1.default.updateProductCart);
exports.productCartRouter.delete('/:id', productCartController_1.default.deleteProductCart);
