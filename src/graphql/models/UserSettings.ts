import { ObjectType, Int, Field } from '@nestjs/graphql';
import { Column, PrimaryColumn, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class UserSetting {
  @PrimaryColumn()
  @Field((type) => Int)
  userId: number;

  @Column()
  @Field({ defaultValue: false })
  receiveNotifications: boolean;

  @Column()
  @Field({ defaultValue: false })
  receiveEmails: boolean;
}
