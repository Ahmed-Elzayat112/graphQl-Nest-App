import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { User } from '../graphql/models/User';
import { UserSetting } from '../graphql/models/UserSettings';
import { UserService } from './user.service';
import { createUserDto } from './dtos/create-user.dto';
import { UserSettingService } from './userSetting.service';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private userSettingService: UserSettingService,
  ) {}
  @Query((returns) => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUserById(id);
  }

  @Query((returns) => [User])
  async getUsers() {
    const users = await this.userService.getUsers();
    return users;
  }

  // @ResolveField(() => UserSetting, { name: 'settings', nullable: true })
  // getUserSettings(@Parent() user: User) {
  //   return this.userSettingService.getUserSettingsById(user.id);
  // }

  @Mutation((returns) => User)
  createUser(@Args('createUserData') createUserData: createUserDto) {
    return this.userService.createUser(createUserData);
  }
}
