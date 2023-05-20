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

@Entity()
export class Seller extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany((type) => Product, (Product) => Product.seller)
  products: Array<Product>;
}
