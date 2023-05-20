import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  RelationId,
  ManyToOne,
} from 'typeorm';
import { User } from './User.entity';
import { Seller } from './Seller.entity';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  meta: any;

  @ManyToOne((type) => User, (user) => user.products)
  owner: User;

  @ManyToOne((type) => Seller, (seller) => seller.products)
  seller: User;

  // in order be able to fetch resources in adminjs - we have to have id available
  @RelationId((product: Product) => product.owner)
  ownerId: number;

  @RelationId((product: Product) => product.seller)
  sellerId: string;
}
