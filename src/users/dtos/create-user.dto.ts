import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class createUserDto {
  @Field()
  username: string;

  @Field({ nullable: true })
  displayName?: string;
}
