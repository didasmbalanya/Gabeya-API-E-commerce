import {
  Table,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';
import { Base } from '../base';
import CartItem from './cartItem';
import User from './user';

@Table
export default class Item extends Base<Item> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id!: number;
  @Column({
    type: DataType.STRING,
  })
  name: string;

  // image url
  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @Column({
    type: DataType.FLOAT,
  })
  price: number;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  @Column({
    type: DataType.STRING,
  })
  vendorName: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => CartItem)
  carts: CartItem[];
}
