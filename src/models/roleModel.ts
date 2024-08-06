import {
    AutoIncrement,
    BelongsToMany,
    Column,
    DataType,
    HasMany,
    Model,
    PrimaryKey,
    Table,
} from "sequelize-typescript";
import { User } from "./userModel";

@Table({
    tableName: "roles",
    timestamps: true,
})
export class Role extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
    id!: number;

    @Column({ type: DataType.STRING(200), allowNull: false, unique: false,
        // validar que solo pueda poner admin y client:
        validate: {
            isIn: {
                args: [["admin", "client"]],
                msg: "The role must be either 'admin' or 'client'",
            },
        },
        
    })
    name!: string;
    
    
}