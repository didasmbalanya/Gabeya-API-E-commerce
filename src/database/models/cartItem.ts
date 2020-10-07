import {
  Table,
  ForeignKey,
  PrimaryKey,
  Column,
  BelongsTo,
  DataType,
  Model,
} from 'sequelize-typescript';
import { Base } from '../base';
import Cart from './cart';
import Item from './item';

@Table
export default class CartItem extends Model<CartItem> {
  @BelongsTo(() => Cart)
  cart: Cart;

  @ForeignKey(() => Cart)
  @PrimaryKey
  @Column
  cartId: number;

  @BelongsTo(() => Item)
  item: Item;

  @ForeignKey(() => Item)
  @PrimaryKey
  @Column
  itemId: number;

  @Column({
    type: DataType.STRING,
  })
  quantity: number;
}
