import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { User } from '../models/User';
import { UserSetting } from '../models/UserSettings';

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return {
      id: 1,
      username: 'john_doe',
      displayName: 'John Doe',
    };
  }

  @ResolveField(() => UserSetting, { name: 'settings', nullable: true })
  getUserSettings(@Parent() user: User) {
    return {};
  }

  @Mutation((returns) => User)
  createUser(
    @Args('username') username: string,
    @Args('displayName', { nullable: true }) displayName: string,
  ) {
    console.log(username, displayName);
  }
}
