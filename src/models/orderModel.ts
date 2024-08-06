import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./userModel";
import { ProductCart } from "./productCartModel";

@Table({
    tableName: "orders",
    timestamps: true,
})
export class Order extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
    id!: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId!: number;
    @BelongsTo(() => User)
    user!: User;

    @ForeignKey(() => ProductCart)
    @Column({ type: DataType.INTEGER, allowNull: false })
    productCartId!: number;
    @BelongsTo(() => ProductCart)
    productCart!: ProductCart;

    @Column({
        type: DataType.FLOAT(10, 2),
        allowNull: false,})
    total!: number;

}