import { Router } from "express";
import { userRouter } from "./userRoute";
import { roleRouter } from "./roleRoute";
import { productRouter } from "./productRoute";
import { cartRouter } from "./cartRoute";
import { productCartRouter } from "./productCartRoute";
import { orderRouter } from "./orderRoute";
import { authRouter } from "./authRoute";

const router = Router();

router.use('/users', userRouter);
router.use('/roles', roleRouter);
router.use('/products', productRouter);
router.use('/carts', cartRouter);
router.use('/productCarts', productCartRouter);
router.use('/orders', orderRouter);
router.use('/auth', authRouter);

export default router;