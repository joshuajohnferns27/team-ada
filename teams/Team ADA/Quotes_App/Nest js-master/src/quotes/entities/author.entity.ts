import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Quotes {
    
    @PrimaryGeneratedColumn("uuid")
    _id:string;

    @Column({nullable:true})
    __v: string;
   
    @Column({name:"author"})
    AName: string;
   
    @Column()
    likes:number;

    @Column()
    dislike:number;

    @Column()
    quote:string;
    @Column()
    isActive:boolean;

    @Column()
    tags:string;
    

}
