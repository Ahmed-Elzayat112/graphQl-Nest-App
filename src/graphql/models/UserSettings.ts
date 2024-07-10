import { ObjectType, Int, Field } from '@nestjs/graphql';
import { Column, PrimaryColumn, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class UserSetting {
  @PrimaryColumn()
  @Field((type) => Int, { nullable: true })
  userId: number;

  @Column({ default: false })
  @Field({ defaultValue: false })
  receiveNotifications: boolean;

  @Column({ default: false })
  @Field({ defaultValue: false })
  receiveEmails: boolean;
}
