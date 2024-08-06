import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: "entities",
    timestamps: true,
})
export class Entity extends Model<Entity> {
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
    id!: number;

    @Column({ type: DataType.STRING(200), allowNull: false })
    name!: string;
}