import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSetting } from 'src/graphql/models/UserSettings';
import { Repository } from 'typeorm';
import { CreateUserSettingDto } from './dtos/create-user-settings.dto';
import { User } from 'src/graphql/models/User';
import { UserService } from './user.service';

@Injectable()
export class UserSettingService {
  constructor(
    @InjectRepository(UserSetting) private repo: Repository<UserSetting>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  getUserSettingsById(userId: number) {
    return this.repo.findOneBy({ userId });
  }

  async createUserSetting(createUserSettingData: CreateUserSettingDto) {
    const user = await this.userRepo.findOneBy({
      id: createUserSettingData.userId,
    });

    if (!user) {
      throw new Error('User not found');
    }

    const newUserSettings = this.repo.create(createUserSettingData);
    const savedSettings = await this.repo.save(newUserSettings);

    user.settings = savedSettings;

    const userUpdated = await this.userRepo.save(user);
    console.log(userUpdated);

    return savedSettings;
  }
}
