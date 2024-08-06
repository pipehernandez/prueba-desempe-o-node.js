import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Role } from "./roleModel";
import { Entity } from "./entityModel";

@Table({
    tableName: "permissions",
    timestamps: true,
})
export class Permission extends Model<Permission> {
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
    id!: number;

    @ForeignKey(() => Role)
    @Column({ type: DataType.INTEGER, allowNull: false })
    roleId!: number;
    @BelongsTo(() => Role)
    role!: Role;

    @ForeignKey(() => Entity)
    @Column({ type: DataType.INTEGER, allowNull: false })
    entityId!: number;
    @BelongsTo(() => Entity)
    entity!: Entity;

    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
    canCreate!: boolean;

    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
    canUpdate!: boolean;

    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
    canDelete!: boolean;

    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
    canGet!: boolean;
}