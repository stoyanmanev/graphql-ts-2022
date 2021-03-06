import { ObjectType, Field, Authorized } from "type-graphql";
import {
  prop as Prop,
  getModelForClass,
  modelOptions,
  Severity,
} from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Game } from "./game-entity";
import { UserRoles } from "../resolvers/user/user.roles";

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
@ObjectType()
export class User {
  @Field()
  readonly _id: ObjectId;

  @Prop({ required: true }) // mongodb
  @Field() // graphql
  firstName: string; //typescript

  @Prop({ required: true })
  @Field()
  lastName: string;

  @Prop({ required: true })
  @Field()
  email: string;

  @Prop({ required: true })
  @Field()
  password: string;

  @Prop({ default: Date.now() })
  @Field()
  lastLogin?: number;

  @Prop({ default: [] })
  @Field((type) => [Game])
  games?: Game[];

  @Authorized([UserRoles.SUPER_ADMIN])
  @Prop({ default: [UserRoles.USER] })
  @Field(type => [String])
  roles?: string[]
}

export const UserModel = getModelForClass(User, { schemaOptions: { timestamps: true }});


// 04sb/50:47