import { Column, DataType, PrimaryKey, Table } from 'sequelize-typescript'; 

export enum OrderStatus {
    Approved = 'approved',
    Pending  = 'pending' 
}


@Table({
    tableName: 'orders',
}) 

export class Order {

    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    id:     string;

    @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })    
    amount: number;

    @Column({ allowNull: false, defaultValue: OrderStatus.Pending })
    status: OrderStatus;

}
