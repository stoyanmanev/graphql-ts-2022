import { ObjectType, InputType, Field } from "type-graphql";
import { prop as Prop, getModelForClass } from "@typegoose/typegoose"
import { ObjectId } from "mongodb"

@ObjectType()
export class Game {

  @Field()
  readonly _id: ObjectId;

  @Prop({required: true}) // mongodb
  @Field() // graphql
  name: string; //typescript

  @Prop({required: true})
  @Field()
  description: string;

  @Prop({required: true})
  @Field()
  image: string;

}


export const GameModel = getModelForClass(Game);
