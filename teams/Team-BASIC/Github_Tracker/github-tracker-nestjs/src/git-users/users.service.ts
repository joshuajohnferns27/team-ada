import { Delete, Get, HttpException, Injectable, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  @Get()
  async getAllUsers(): Promise<Array<Users>> {
    return this.usersRepository.find({});
  }

  @Get(':username')
  async findByusername(username: string): Promise<Users> {
    const data =await this.usersRepository.findOneBy({username: username});
    if(!data)
    {
      const errors={data: 'Not Found'};
      throw new HttpException({errors},404);
    } 
    return data;
  }
  
  @Post()
  async create(users: Users): Promise<Users> {
    return this.usersRepository.save(this.usersRepository.create(users));
  }

  // @Put()
  //  async update(username: string, data: any): Promise<any> {
  //   return this.usersRepository.createQueryBuilder()
  //     .update()
  //     .set({
  //       email: data.email,
  //     })
  //     .where('username = :username', { username })
  //     .execute();
  // }

  @Delete()
  async delete(username: string): Promise<any> {
    return this.usersRepository.createQueryBuilder()
      .delete()
      .from(Users)
      .where('username = :username', { username })
      .execute();
  }


}
