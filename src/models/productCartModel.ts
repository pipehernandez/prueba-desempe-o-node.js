import { AutoIncrement, BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Cart } from "./cartModel";
import { Product } from "./productModel";
import { Order } from "./orderModel";

@Table({
    tableName: "productCarts",
    timestamps: true,
})
export class ProductCart extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
    id!: number;

    @ForeignKey(() => Cart)
    @Column({ type: DataType.INTEGER, allowNull: false })
    cartId!: number;
    @BelongsTo(() => Cart)
    cart!: Cart;

    @ForeignKey(() => Product)
    @Column({ type: DataType.INTEGER, allowNull: false })
    productId!: number;
    @BelongsTo(() => Product)
    product!: Product;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,})
    quantity!: number;

    // @BelongsToMany(() => Order, ()=> ProductCart)
    // orders?: Order[];
}