import { Module } from '@nestjs/common';
import { UserResolver } from './User.resolver';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { UserSettingService } from './userSetting.service';
import { UserSetting } from 'src/graphql/models/UserSettings';
import { UserSettingResolver } from 'src/graphql/resolvers/user-setting.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  providers: [
    UserResolver,
    UserService,
    UserSettingService,
    UserSettingResolver,
  ],
})
export class UsersMoule {}
