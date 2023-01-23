import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';

@Controller('api')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/users')
  createUser(@Body() body: CreateUserDto) {
    this.usersService.create(body.first_name, body.last_name, body.avatar, body.email, body.password);
    return "User created by email : "+ body.email + " Successfully.";
  }

  @Get('user/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.usersService.findOne(parseInt(id));
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  @Get('user/:id/avatar')
  async findUserAvatar(@Param('id') id: string) {    
    const user = await this.usersService.findOneAvatar(parseInt(id));
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user.avatar;
  }

  @Get('users')
  findAllUsers() {
    return this.usersService.find();
  }

  @Delete('/user/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }

  @Patch('/user/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(parseInt(id), body);
  }
}
