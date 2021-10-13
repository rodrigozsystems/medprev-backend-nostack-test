import { Address } from 'src/addresses/address.entity';
import {
  BaseEntity,
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity({ name: 'clients' })
@Unique(['email'])
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: true, type: 'varchar', length: 200 })
  companyName: string;

  @Column({ nullable: true, type: 'varchar', length: 200 })
  email: string;

  @Column()
  clientType: number; // 1: PF | 2: PJ

  @Column({ nullable: false, type: 'varchar', length: 200 })
  nationalRegistration: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  birthDate: Date;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  cellphone: string;

  @Column({ nullable: true })
  photo: string;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
