import { Injectable } from '@nestjs/common';
import { UserEnity } from '../entities/User/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEnity)
    private userRepository: Repository<UserEnity>,
  ) {}

  create(user: UserEnity) {
    return this.userRepository.save(user);
  }

  findAll(): Promise<UserEnity[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<UserEnity> {
    return this.userRepository.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserEnity> {
    const { email, name, race, role, gender } = updateUserDto;
    const updatedUser = await this.userRepository.findOne(id);

    updatedUser.email = email;
    updatedUser.name = name;
    updatedUser.race = race;
    updatedUser.role = role;
    updatedUser.gender = gender;

    return updatedUser;
  }
}
