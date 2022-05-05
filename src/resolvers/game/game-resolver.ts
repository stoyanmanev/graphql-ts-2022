import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";
import { Game, GameModel } from "../../entities/game-entity";
import { UserRoles } from "../user/user.roles";
import { EditGameInput } from "./game-arguments";

@Resolver()
export class GameResolver {
  @Query((returns) => [Game])
  async games(): Promise<Game[]> {
    return await GameModel.find({});
  }

  @Query((returns) => Game)
  async game(@Arg("_id") _id: string): Promise<Game> {
    return await GameModel.findById(_id);
  }

  @Mutation((returns) => Game)
  async createGame(@Arg("data") data: EditGameInput): Promise<Game> {
    const newGame = new GameModel(data);
    await newGame.save();
    return newGame;
  }

  // @Authorized([UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
  @Mutation((returns) => Game)
  async deleteGame(@Arg("_id") _id: string): Promise<Game> {
    return await GameModel.findByIdAndRemove(_id);
  }

  @Mutation((returns) => Game)
  async editGame(
    @Arg("_id") _id: string,
    @Arg("data") data: EditGameInput
  ): Promise<Game> {
    return await GameModel.findByIdAndUpdate(_id, data, { new: true });
  }
}

// 18:00 tsbe_03.mp4