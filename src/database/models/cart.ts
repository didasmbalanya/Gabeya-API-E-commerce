import {
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Base } from '../base';
import Item from './item';
import User from './user';

@Table
export default class Cart extends Base<Cart> {
  @Column({
    type: DataType.STRING,
  })
  quanity: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @ForeignKey(() => Item)
  @Column({
    type: DataType.INTEGER,
  })
  itemId: number;

  @BelongsTo(() => User)
  buyer: User;

  @BelongsTo(() => Item)
  item: Item;
}
