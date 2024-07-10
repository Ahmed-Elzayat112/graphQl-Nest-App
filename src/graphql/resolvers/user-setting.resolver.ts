import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSettings';
import { CreateUserSettingDto } from 'src/users/dtos/create-user-settings.dto';
import { UserSettingService } from 'src/users/userSetting.service';

@Resolver()
export class UserSettingResolver {
  constructor(private userSettingService: UserSettingService) {}
  @Mutation(() => UserSetting)
  createUserSetting(
    @Args('createUserSettingData') createUserSettingData: CreateUserSettingDto,
  ) {
    return this.userSettingService.createUserSetting(createUserSettingData);
  }
}
