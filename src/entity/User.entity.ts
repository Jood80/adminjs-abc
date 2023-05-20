import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Product } from './Product.entity';

export enum UserRoles {
  DESIGNER = 'designer',
  CLIENT = 'client',
}

console.log('User too');

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({
    type: 'enum',
    enum: UserRoles,
  })
  role: UserRoles;

  @OneToMany((type) => Product, (product) => product.owner)
  products: Array<Product>;
}
