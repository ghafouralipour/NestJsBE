import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(first_name:string,last_name:string,avatar:string, email: string, password: string) {
    const user = this.repo.create({ first_name,last_name,avatar,email, password });

    return this.repo.save(user);
  }

  findOne(id: number) {
    return this.repo.findOne(id);
  }
  findOneAvatar(id: number) {    
    return this.repo.findOne(id);
  }

  find() {
    return this.repo.find();
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }
}
