
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, PrimaryColumn } from "typeorm";


@Entity()
export class SUsers{

  @PrimaryColumn()
  email: string;

  @Column()
  password: string;

}

@Entity()
export class Users{
  @Column()
  email: string;

  @PrimaryColumn()
  username: string;

  @Column({nullable: true})
  firstname: string;

  @Column({nullable: true})
  lastname: string;
}

@Entity()
export class GitHistory{
  @PrimaryColumn()
  userId: string;

  @ManyToOne(()=>Users, (users)=>users.username)
  @JoinColumn({ name: 'userId' })
  users: Users;
  
  @PrimaryColumn()
  datetime: Date;

  @Column()
  violations: number;

  @Column()
  public_gist: string;

  @Column()
  public_repo: number;



}