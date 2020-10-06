import {
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Base } from '../base';
import CartItem from './cartItem';
import Item from './item';
import User from './user';

@Table
export default class Cart extends Base<Cart> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => CartItem)
  items: CartItem[];
}
