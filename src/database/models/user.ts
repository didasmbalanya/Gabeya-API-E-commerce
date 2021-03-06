import { Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { Base } from '../base';
import Cart from './cart';
import Item from './item';

@Table
export default class User extends Base<User> {
  @Column({
    type: DataType.STRING,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
  })
  lastName: string;

  @Column({
    allowNull: false,
    unique: true,
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  phoneNumber: string;

  @HasMany(() => Cart)
  carts: Cart[];

  @HasMany(() => Item)
  items: Item[];
}
