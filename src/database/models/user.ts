import {
  Table,
  Column,
  DataType,
} from 'sequelize-typescript';
import { Base } from '../base';

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
  })
  password: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  phoneNumber: string;
}
