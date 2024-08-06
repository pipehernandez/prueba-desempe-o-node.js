import {
    AutoIncrement,
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    HasOne,
    Model,
    PrimaryKey,
    Table,
} from "sequelize-typescript";
import { Role } from "./roleModel";
import { Cart } from "./cartModel";
import { Order } from "./orderModel";

@Table({
    tableName: "users",
    timestamps: true,
})
export class User extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER})
    id!: number;

    @Column({
        type: DataType.STRING(200), allowNull: false, unique: true,
        validate: { isEmail: { msg: "The email must be a valid email address",}}
    })
    email!: string;

    @Column({
        type: DataType.STRING(200),allowNull: false,
        validate: {
            notEmpty: { msg: "The password cannot be empty" },
        },
    })
    password!: string;

    @ForeignKey(() => Role)
    @Column({ type: DataType.INTEGER, allowNull: false })
    roleId!: number;
    @BelongsTo(() => Role)
    role!: Role;

    @HasOne(() => Cart)
    cart?: Cart;

    @HasMany(() => Order)
    orders?: Order[];
}
