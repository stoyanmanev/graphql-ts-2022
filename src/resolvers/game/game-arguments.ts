import { Length, MinLength } from "class-validator";
import { ObjectId } from "mongodb";
import { Field, InputType } from "type-graphql";
import { Game } from "../../entities/game-entity";

@InputType()
export class EditGameInput {
  @Field()
  @Length(2, 30)
  name: string;

  @Field()
  @Length(2, 500)
  description: string;

  @Field()
  @MinLength(5)
  image: string;
}

@InputType()
export class GameInput implements Partial<Game> {
  @Field()
  _id: ObjectId;

  @Field()
  name: string;

  @Field()
  description?: string;

  @Field()
  image: string;
}
