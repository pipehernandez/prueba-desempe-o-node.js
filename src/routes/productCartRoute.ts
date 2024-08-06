import { Router } from "express";
import ProductCartController from "../controllers/productCartController";

export const productCartRouter = Router();

productCartRouter.get('/', ProductCartController.getAllProductCarts);
productCartRouter.get('/:id', ProductCartController.getProductCartById);
productCartRouter.post('/', ProductCartController.createProductCart);
productCartRouter.put('/:id', ProductCartController.updateProductCart);
productCartRouter.delete('/:id', ProductCartController.deleteProductCart);
