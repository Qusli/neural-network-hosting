import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { hashingPassword } from '../helpers/hashing-password.helper';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  lastname: string | null;

  @Column({ nullable: true })
  firstname: string | null;

  @Column({ nullable: true })
  patronic: string | null;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  private async onBeforeInsert() {
    this.password = await hashingPassword(this.password);
  }

  @BeforeUpdate()
  private async onBeforeUpdate() {
    this.password = await hashingPassword(this.password);
  }
}
