import { log } from 'console';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

log('Org been hit');
@Entity({ name: 'organizations' })
export class Organization extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;
}
