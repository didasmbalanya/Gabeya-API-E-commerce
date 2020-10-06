import {
  Table,
  Column,
  DataType,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { Base } from '../base';
import Cart from './cart';
import User from './user';

@Table
export default class Item extends Base<Item> {
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

  // // a user seller
  // @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
  })
  vendorName: string;

  @HasMany(() => Cart)
  carts: Cart[];
}
