import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserSettingDto {
  @Field(() => Int)
  userId: number;

  @Field({ nullable: true, defaultValue: false })
  receiveNotifications: boolean;

  @Field({ nullable: true, defaultValue: false })
  receiveEmails: boolean;
}
