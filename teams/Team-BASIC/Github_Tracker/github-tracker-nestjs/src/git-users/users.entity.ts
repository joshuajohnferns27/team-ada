import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class SUsers{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

}

@Entity()
export class Users{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;
}