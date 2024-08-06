import {
    AutoIncrement,
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    PrimaryKey,
    Table,
} from "sequelize-typescript";
import { User } from "./userModel";
import { ProductCart } from "./productCartModel";

@Table({
    tableName: "carts",
    timestamps: true,
})
export class Cart extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER})
    id!: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId!: number;
    @BelongsTo(() => User)
    user!: User;

    @HasMany(() => ProductCart)
    products!: ProductCart[];
}