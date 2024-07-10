import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { Repository } from 'typeorm';
import { createUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  getUsers() {
    return this.repo.find({ relations: ['settings'] });
  }

  getUserById(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOne({ where: { id }, relations: ['settings'] });
  }

  createUser(createUserData: createUserDto) {
    const newUser = this.repo.create(createUserData);
    return this.repo.save(newUser);
  }
}
