import { UsersService } from './users.service';
import { User } from '../entities/User/user.entity';
import {
  Resolver,
  Mutation,
  Args,
  Query,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
// import { Race, Role, UserStatus } from 'src/types/enums';
//TODO
@Resolver((of) => User)
export class UsersResolver {
  constructor(@Inject(UsersService) private usersService: UsersService) {}

  @Query((returns) => [User])
  async users(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  // @Mutation((returns) => UserEnity)
  // async createUser(@Args('name') name: string): Promise<UserEnity> {
  //   const user = new UserEnity();
  //   user.name = name;
  //   user.status = UserStatus.IN_PROCESS;

  //   return this.usersService.create(user);
  // }

  // @Mutation((returns) => UserEnity)
  // async updateUser(
  //   @Args('id') id: string | null,
  //   @Args('name') name: string | null,
  //   @Args('gender') gender: string | null,
  //   @Args('role') role: Role | null,
  //   @Args('race') race: Race | null,
  //   @Args('email') email: string | null,
  // ): Promise<UserEnity> {
  //   return this.usersService.update(id, { name, gender, role, race, email });
  // }
}
