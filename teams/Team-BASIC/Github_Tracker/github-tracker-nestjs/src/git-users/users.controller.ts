import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import {  Users } from './users.entity';
import { UsersService } from './users.service';

@Controller('git-users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<Array<Users>> {
    return this.usersService.getAllUsers();
  }

  @Get(':username')
  async findByusername(@Param('username') username: string) {
    return this.usersService.findByusername(username);
  }

  @Post()
  async create(@Body() createUsers: Users) {
    const user = await this.usersService.create(createUsers);
    if (!user) {
      return 'User could not be added';
    }
    return 'User created successfully';
  }

  // @Put(':username')
  // async update(@Param('username') username: string, @Body() body: any) {
  //   const newUsers = await this.usersService.update(username, body);
  //   if (!newUsers) {
  //     return 'User could not be updated';
  //   }
  //   return 'User updated successfully';
  // }

  @Delete(':username')
  async remove(@Param('username') username: string) {
    await this.usersService.delete(username);
}
}
