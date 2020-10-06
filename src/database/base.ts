import { Model, Column, DataType } from 'sequelize-typescript';

export class Base<T> extends Model<T> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;
}
