import { AutoIncrement, BelongsTo, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Cart } from "./cartModel";

@Table({
    tableName: 'products',
    timestamps: true,
})
export class Product extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER })
    id!: number;
    
    @Column({type: DataType.STRING(255), allowNull: false})
    name!: string;

    @Column({type: DataType.FLOAT(10,2), allowNull: false})
    price!: number;

    @Column({type: DataType.TEXT, allowNull: false})
    description!: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    stock!: number;

}
